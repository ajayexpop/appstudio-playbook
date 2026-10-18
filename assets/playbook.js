(function () {
  'use strict';
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {  } },
  };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var escH = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };

  var themeBtn = $('.pb-theme');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next); store.set('pb-theme', next);
  });

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.vis-toggle'); if (!b) return;
    var fig = b.closest('.vis'); var on = b.getAttribute('aria-pressed') !== 'true';
    $('.vis-frame.focus', fig).hidden = on; $('.vis-frame.whole', fig).hidden = !on;
    b.setAttribute('aria-pressed', String(on)); $('span', b).textContent = on ? 'Focus on the step' : 'Whole screen';
  });

  var body = document.body;
  var journey = body.getAttribute('data-journey');
  var up = body.getAttribute('data-up') || '';

  var fold = function (t) { return t.toLowerCase().replace(/['’]/g, ''); };
  var search = $('#search'), sq = $('#ps-q'), psList = $('#ps-list');
  if (search && sq && psList) (function () {
    var list = psList, fix = $('.ps-fix', search), empty = $('.ps-empty', search), live = $('#ps-live'), clear = $('.ps-clear', search);
    var GROUPS = ['Journeys', 'Steps', 'Watch-outs', 'Problems', 'Planners', 'What App Studio does', 'Home'];
    var KINDS = { Journey: 'Journeys', Planner: 'Planners', "Something's wrong": 'Problems' };
    var SHOW = 5, RECENT = 'pb-search-recent', KEEP = 5;
    var entries = Array.isArray(window.PB_SEARCH) ? window.PB_SEARCH : [];
    var words = window.PB_WORDS && typeof window.PB_WORDS === 'object' ? window.PB_WORDS : {};
    var quick = (Array.isArray(words.quick) ? words.quick : []).filter(function (w) { return w && w.label && w.q; });
    var ICON = {}, tpl = $('#ps-icons');
    if (tpl && tpl.content) $$('[data-k]', tpl.content).forEach(function (i) { ICON[i.getAttribute('data-k')] = i.innerHTML; });
    var engine = null, started = false, plain = null, lastFocus = null, active = null, how = '', shown = null, more = {}, n = 0, liveTimer = 0, mouseAt = '';

    function groupOf(e) { return e.g || KINDS[e.k] || (/^Step /.test(e.k || '') ? 'Steps' : e.k || 'Home'); }
    function whereOf(e) { return (Array.isArray(e.w) ? e.w : e.j ? [e.j, e.k] : []).filter(function (x) { return x && x !== e.t; }); }
    function start() {
      if (started) return;
      started = true;
      var S = window.PBSearch;
      try { if (S && typeof S.query === 'function') { if (typeof S.init === 'function') S.init(entries, words); engine = S; } } catch (err) { engine = null; }
    }
    function plainQuery(text) {
      if (!plain) plain = entries.map(function (e, i) { return { e: e, i: i, g: groupOf(e), hay: fold([e.t, e.s, e.x].concat(whereOf(e)).join(' ')), t: fold(e.t || '') }; });
      var ws = fold(text).split(/\s+/).filter(Boolean), by = {};
      plain.forEach(function (r) {
        if (!ws.every(function (w) { return r.hay.indexOf(w) >= 0; })) return;
        (by[r.g] = by[r.g] || []).push({ e: r.e, i: r.i, score: ws.filter(function (w) { return r.t.indexOf(w) >= 0; }).length, marks: { t: spans(r.e.t, ws), s: spans(r.e.s, ws) } });
      });
      var rank = function (g) { var x = GROUPS.indexOf(g); return x < 0 ? 99 : x; };
      var gs = Object.keys(by).map(function (g) { return { g: g, total: by[g].length, items: by[g].sort(function (a, b) { return b.score - a.score || a.i - b.i; }) }; });
      return { groups: gs.sort(function (a, b) { return b.items[0].score - a.items[0].score || rank(a.g) - rank(b.g); }), corrected: null };
    }
    function spans(text, ws) {
      var t = String(text || ''), low = t.toLowerCase(), out = [];
      if (low.length === t.length) ws.forEach(function (w) { for (var at = low.indexOf(w); at >= 0; at = low.indexOf(w, at + w.length)) out.push([at, at + w.length]); });
      return out;
    }
    function find(text) {
      if (engine) { try { var r = engine.query(text); if (r && Array.isArray(r.groups)) return r; } catch (err) {  } }
      return plainQuery(text);
    }
    function count(r) { return r.groups.reduce(function (a, g) { return a + (g.items && g.items.length ? g.total || g.items.length : 0); }, 0); }
    function unique(list, text) {
      var seen = {}; seen[fold(text)] = 1;
      return list.filter(function (s) { var f = s && s.q && s.label ? fold(String(s.q)).trim() : ''; if (!f || seen[f]) return false; seen[f] = 1; return true; });
    }
    function suggestions(text) {
      var out = [];
      if (engine && typeof engine.suggest === 'function') { try { out = engine.suggest(text) || []; } catch (err) { out = []; } }
      return unique(Array.isArray(out) ? out : [], text).slice(0, 6);
    }
    function tries(text) {
      var ws = text.split(/\s+/), out = [];
      if (ws.length > 1) {
        var kept = ws.filter(function (w) { return count(find(w)) > 0; }).join(' '), r = kept ? find(kept) : null;
        if (r && count(r)) out.push({ label: r.corrected || kept, q: r.corrected || kept });
      }
      quick.forEach(function (w) { out.push({ label: w.q, q: w.q }); });
      return unique(out, text).slice(0, 6);
    }

    function recent() {
      try {
        var a = JSON.parse(localStorage.getItem(RECENT) || '[]');
        return Array.isArray(a) ? a.filter(function (x) { return typeof x === 'string' && x.trim(); }).slice(0, KEEP) : [];
      } catch (err) { return []; }
    }
    function remember(q) {
      q = String(q || '').replace(/\s+/g, ' ').trim();
      if (!q) return;
      var a = [q].concat(recent().filter(function (x) { return fold(x).trim() !== fold(q); })).slice(0, KEEP);
      try { localStorage.setItem(RECENT, JSON.stringify(a)); } catch (err) {  }
    }
    function forget() { try { localStorage.removeItem(RECENT); } catch (err) {  } }

    function oid() { return 'ps-o-' + (n++); }
    function marked(text, ranges) {
      var t = String(text == null ? '' : text), html = '', at = 0;
      (Array.isArray(ranges) ? ranges : []).filter(function (r) { return r && r.length === 2 && r[1] > r[0]; })
        .map(function (r) { return [Math.max(0, r[0] | 0), Math.min(t.length, r[1] | 0)]; })
        .sort(function (a, b) { return a[0] - b[0]; })
        .forEach(function (r) { var a = Math.max(r[0], at); if (r[1] <= a) return; html += escH(t.slice(at, a)) + '<mark>' + escH(t.slice(a, r[1])) + '</mark>'; at = r[1]; });
      return html + escH(t.slice(at));
    }
    function iconOf(u) { var k = String(u || '').split(/[\/#]/)[0]; return ICON[!k || /\.html$/.test(k) ? 'home' : k] || ICON.home || ''; }
    function group(name, body, o) {
      o = o || {};
      var id = 'ps-g-' + (n++);
      return '<ul class="ps-group' + (o.cls ? ' ' + o.cls : '') + '" role="group" aria-labelledby="' + id + (o.count ? ' ' + id + 'c' : '') + '" data-g="' + escH(name) + '"' + (o.rows ? ' style="--rows:' + o.rows + '"' : '') + '>' +
        '<li class="ps-gh" role="presentation"><span id="' + id + '">' + escH(name) + '</span>' + (o.count ? '<span class="ps-gc" id="' + id + 'c">' + o.count + '</span>' : '') + '</li>' + body + '</ul>';
    }
    function fillOpt(label, q, cls, glyph) {
      return '<li class="' + cls + '" role="option" id="' + oid() + '" data-q="' + escH(q) + '">' + (glyph ? '<span class="ps-gi">' + glyph + '</span>' : '') + '<span class="ps-l">' + escH(label) + '</span>' + (glyph ? '<span class="ps-go">' + (ICON['ui-fill'] || '') + '</span>' : '') + '</li>';
    }
    function journeyOpt(e) {
      return '<li role="none"><a class="ps-jr" role="option" id="' + oid() + '" tabindex="-1" href="' + escH(up + e.u) + '"><span class="ps-ic">' + iconOf(e.u) + '</span><span class="ps-t">' + escH(e.t) + '</span></a></li>';
    }
    function resultOpt(it) {
      var e = it.e || {}, m = it.marks || {}, w = whereOf(e);
      return '<li role="none"><a class="ps-item" role="option" id="' + oid() + '" tabindex="-1" href="' + escH(up + e.u) + '"><span class="ps-ic">' + iconOf(e.u) + '</span><span class="ps-tx">' +
        '<span class="ps-t">' + marked(e.t, m.t) + '</span>' + (e.s ? '<span class="ps-s">' + marked(e.s, m.s) + '</span>' : '') +
        (w.length ? '<span class="ps-w" aria-hidden="true">' + w.map(escH).join('<i>›</i>') + '</span><span class="sr">, in ' + escH(w.join(', ')) + '</span>' : '') +
        '</span><span class="ps-go">' + (ICON['ui-enter'] || '') + '</span></a></li>';
    }
    function opening() {
      var rec = recent(), js = entries.filter(function (e) { return groupOf(e) === 'Journeys' && /#top$/.test(e.u || ''); }), html = '';
      if (rec.length) html += group('Recent', rec.map(function (q) { return fillOpt(q, q, 'ps-rec', ICON['ui-recent']); }).join('') + '<li class="ps-more ps-forget" role="option" id="' + oid() + '" data-forget=""><span class="ps-l">Clear recent searches</span></li>', { cls: 'ps-recent' });
      if (quick.length) html += group('Quick searches', quick.map(function (w) { return fillOpt(w.label, w.q, 'ps-chip'); }).join(''), { cls: 'ps-chips' });
      if (js.length) html += group('Journeys', js.map(journeyOpt).join(''), { cls: 'ps-journeys', rows: Math.ceil(js.length / 2) });
      return html;
    }

    function render(keep, via) {
      var text = sq.value, q = text.replace(/\s+/g, ' ').trim(), html = '', total = 0, say = '', y = list.scrollTop;
      clear.hidden = !text;
      n = 0;
      if (q !== shown) { more = {}; shown = q; y = 0; }
      fix.hidden = true; empty.hidden = true;
      if (!q) {
        html = opening();
        if (!html) { empty.innerHTML = '<p class="ps-empty-t">Search is not ready on this page</p><p>Reload the page to try again.</p>'; empty.hidden = false; }
      } else {
        var res = find(q), sug = suggestions(q), fixed = res.corrected ? String(res.corrected) : '';
        var left = fixed && Object.prototype.toString.call(res.dropped) === '[object Array]' ? res.dropped.map(String).filter(Boolean) : [];
        var respelt = fixed && Object.prototype.toString.call(res.fixes) === '[object Array]' && res.fixes.length > 0;
        var without = left.map(function (w) { return '“' + w + '”'; }), andW = without.length > 1 ? without.slice(0, -1).join(', ') + ' and ' + without[without.length - 1] : without.join('');
        total = count(res);
        if (fixed && total) {
          fix.innerHTML = left.length ? 'Showing results ' + (respelt ? 'for <strong>' + escH(fixed) + '</strong>, ' : '') + 'without <strong>' + escH(andW) + '</strong>' : 'Showing results for <strong>' + escH(fixed) + '</strong>';
          fix.hidden = false;
        }
        if (fixed) sug = total ? sug.filter(function (s) { return fold(String(s.q)).trim() !== fold(fixed).trim(); }) : unique([{ label: fixed, q: fixed }].concat(sug), q).slice(0, 6);
        if (sug.length) html += group(total ? 'Suggestions' : 'Did you mean', sug.map(function (s) { return fillOpt(String(s.label), String(s.q), 'ps-chip'); }).join(''), { cls: total ? 'ps-chips ps-sugg' : 'ps-chips ps-try' });
        res.groups.forEach(function (g) {
          var items = g.items || [], N = g.total || items.length, all = more[g.g] || items.length <= SHOW;
          if (!items.length) return;
          html += group(g.g, items.slice(0, all ? items.length : SHOW).map(resultOpt).join('') +
            (all ? '' : '<li class="ps-more" role="option" id="' + oid() + '" data-more="' + escH(g.g) + '"><span class="ps-l">Show all ' + N + '<span class="sr"> in ' + escH(g.g) + '</span></span>' + (ICON['ui-more'] || '') + '</li>'), { count: N });
        });
        if (!total) {
          var t = tries(q);
          empty.innerHTML = '<p class="ps-empty-t">Nothing found for “' + escH(q) + '”</p><p>Check the spelling or use fewer words.</p>';
          empty.hidden = false;
          if (t.length) html += group('Words to try', t.map(function (s) { return fillOpt(s.label, s.q, 'ps-chip'); }).join(''), { cls: 'ps-chips ps-try' });
        }
        say = total ? total + (total === 1 ? ' result' : ' results') + (left.length ? (respelt ? ' for ' + fixed + ',' : '') + ' without ' + andW : fixed ? ' for ' + fixed : '') + '.' : 'Nothing found for ' + q + '.';
      }
      list.innerHTML = html;
      list.scrollTop = y;
      sq.setAttribute('aria-expanded', String(!!$('[role="option"]', list)));
      setActive(null);
      if (keep) {
        var g = $$('.ps-group', list).filter(function (x) { return x.getAttribute('data-g') === keep; })[0];
        setActive(g ? $$('[role="option"]', g)[SHOW] || null : null, via === 'key' ? 'key' : 'mouse');
        if (g) say = 'Showing all ' + g.querySelectorAll('.ps-item').length + ' in ' + keep + '.';
      } else if (q) setActive($('.ps-item', list), 'auto');
      announce(say);
    }
    function announce(say) {
      clearTimeout(liveTimer);
      live.textContent = '';
      if (say) liveTimer = setTimeout(function () { live.textContent = say; }, 450);
    }
    function options() { return $$('[role="option"]', list); }
    function setActive(o, mode) {
      if (active) { active.classList.remove('is-active'); active.removeAttribute('aria-selected'); }
      active = o || null; how = active ? mode : '';
      list.classList.toggle('ps-kb', how === 'key');
      if (!active) { sq.removeAttribute('aria-activedescendant'); return; }
      active.classList.add('is-active');
      active.setAttribute('aria-selected', 'true');
      if (how === 'auto') sq.removeAttribute('aria-activedescendant');
      else sq.setAttribute('aria-activedescendant', active.id);
      if (how === 'key') inView(active);
    }
    function inView(o) {
      var os = options(), b = list.getBoundingClientRect(), r = o.getBoundingClientRect(), g = o.closest('.ps-group'), top = r.top;
      if (os[0] === o) { list.scrollTop = 0; return; }
      if (g && $('[role="option"]', g) === o) top = g.getBoundingClientRect().top;
      if (top < b.top + 8) list.scrollTop -= b.top + 8 - top;
      else if (r.bottom > b.bottom - 8) list.scrollTop += r.bottom - b.bottom + 8;
    }
    function move(d) {
      var os = options();
      if (!os.length) return;
      if (active && how === 'auto' && d > 0) { setActive(active, 'key'); return; }
      var i = os.indexOf(active), j = i < 0 ? (d > 0 ? 0 : -1) : i + d;
      if (j < 0) { setActive(null); return; }
      setActive(os[Math.min(j, os.length - 1)], 'key');
    }

    function activate(o, ev, via) {
      if (!o) return;
      if (o.hasAttribute('data-forget')) {
        forget();
        render();
        announce('Recent searches cleared.');
      } else if (o.hasAttribute('data-q')) {
        sq.value = o.getAttribute('data-q');
        render();
        sq.focus();
        try { sq.setSelectionRange(sq.value.length, sq.value.length); } catch (err) {  }
      } else if (o.hasAttribute('data-more')) {
        more[o.getAttribute('data-more')] = true;
        render(o.getAttribute('data-more'), via);
      } else if (o.tagName === 'A') go(o, ev);
    }
    function go(a, ev) {
      remember(sq.value);
      if (ev && (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button > 0)) return;
      var url = new URL(a.href, location.href), path = function (u) { return u.pathname.replace(/index\.html$/, ''); };
      if (url.protocol !== location.protocol || url.host !== location.host || path(url) !== path(location)) { if (!ev) location.href = url.href; return; }
      if (ev) ev.preventDefault();
      var id = url.hash.slice(1);
      try { id = decodeURIComponent(id); } catch (err) {  }
      closeSearch(!id);
      if (!id) window.scrollTo(0, 0);
      else land(id);
    }
    function land(id) {
      if (typeof window.PBLand === 'function') { try { window.PBLand(id); return; } catch (err) {  } }
      var el = document.getElementById(id);
      if (!el) return;
      if (location.hash !== '#' + id) location.hash = id;
      else el.scrollIntoView({ block: 'start' });
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }

    function openSearch() {
      if (!search.hidden) return;
      start();
      lastFocus = document.activeElement;
      search.hidden = false;
      body.classList.add('search-open');
      sq.value = '';
      shown = null;
      render();
      sq.focus();
    }
    function closeSearch(restore) {
      if (search.hidden) return;
      search.hidden = true;
      body.classList.remove('search-open');
      setActive(null);
      sq.setAttribute('aria-expanded', 'false');
      clearTimeout(liveTimer);
      live.textContent = '';
      var f = lastFocus;
      lastFocus = null;
      if (restore !== false && f && f.focus && document.documentElement.contains(f)) f.focus();
    }
    function trap(e) {
      var f = $$('input, button, a[href]', search).filter(function (x) { return x.tabIndex >= 0 && !x.disabled && x.getClientRects().length; });
      if (!f.length) return;
      var i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && (i < 0 || i === f.length - 1)) { e.preventDefault(); f[0].focus(); }
    }

    $$('[data-search]').forEach(function (b) { b.addEventListener('click', openSearch); });
    $('.ps-close', search).addEventListener('click', function () { closeSearch(); });
    search.addEventListener('click', function (e) {
      if (e.target === search) closeSearch();
      else if (!e.target.closest('input, button, a, [role="option"]') && document.activeElement !== sq) sq.focus();
    });
    clear.addEventListener('click', function () { sq.value = ''; render(); sq.focus(); });
    sq.addEventListener('input', function () { render(); });
    sq.addEventListener('keydown', function (e) {
      if (e.isComposing) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); move(e.key === 'ArrowDown' ? 1 : -1); }
      else if (e.key === 'Enter') { e.preventDefault(); activate(active, null, 'key'); }
    });
    list.addEventListener('mousemove', function (e) {
      var at = e.clientX + ',' + e.clientY, o = e.target.closest('[role="option"]');
      if (at === mouseAt) return;
      mouseAt = at;
      if (o && o !== active) setActive(o, 'mouse');
    });
    list.addEventListener('mousedown', function (e) { if (e.target.closest('[role="option"]')) e.preventDefault(); });
    list.addEventListener('click', function (e) {
      var o = e.target.closest('[role="option"]');
      if (o) activate(o, e, 'mouse');
    });
    list.addEventListener('auxclick', function (e) { if (e.button === 1 && e.target.closest('a[role="option"]')) remember(sq.value); });
    document.addEventListener('focusin', function (e) { if (!search.hidden && !search.contains(e.target)) sq.focus(); });
    document.addEventListener('keydown', function (e) {
      if (!search.hidden) {
        if (e.isComposing) return;
        if (e.key === 'Escape') { e.preventDefault(); closeSearch(); }
        else if (e.key === 'Tab') trap(e);
        return;
      }
      var t = e.target && e.target.closest ? e.target : body;
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !t.closest('input, textarea, select, [contenteditable]') && !body.classList.contains('player-open')) { e.preventDefault(); openSearch(); }
    });
  })();

  $$('[data-print]').forEach(function (b) { b.addEventListener('click', function () { window.print(); }); });

  var qp = $('#qp-date');
  if (qp) { var saved = store.get('pb-event'); if (saved) qp.value = saved; qp.addEventListener('change', function () { store.set('pb-event', qp.value); }); }

  var DIP_OUT = 0.2, DIP_IN = 0.3, DIP_EARLY = 0.08;
  var films = [];
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  var darkScheme = matchMedia('(prefers-color-scheme: dark)');
  var hasIO = 'IntersectionObserver' in window;
  function themeNow() { return document.documentElement.getAttribute('data-theme') || (darkScheme.matches ? 'dark' : 'light'); }
  function filmOf(fig) { for (var i = 0; i < films.length; i++) if (films[i].fig === fig) return films[i]; return null; }
  function filmSrc(f) { return f.fig.getAttribute('data-src-' + f.theme) + (f.end ? '#t=' + f.start + ',' + f.end : ''); }
  function filmLoad(f) {
    if (f.loaded) return;
    f.loaded = true; f.theme = themeNow(); f.v.preload = 'auto'; f.v.src = filmSrc(f);
  }
  function filmButton(f) {
    var on = !f.v.paused;
    f.fig.classList.toggle('is-playing', on);
    f.b.setAttribute('aria-label', (on ? 'Pause: ' : 'Play: ') + f.name);
    f.b.title = on ? 'Pause' : 'Play';
  }
  function filmPlay(f) {
    if (f.failed) return;
    filmLoad(f);
    if (!f.v.paused) return;
    var p = f.v.play();
    if (p && p.catch) p.catch(function () {  });
  }
  function filmPause(f) { if (!f.v.paused) { f.ownPause = true; f.v.pause(); } }
  function filmDecide() {
    var best = null, rank = function (f) { return (f.want === 'on' ? 2 : 1) + f.ratio; };
    films.forEach(function (f) { if (f.half && f.want !== 'off' && !f.covered && !f.failed && (!best || rank(f) > rank(best))) best = f; });
    films.forEach(function (f) { if (f === best) filmPlay(f); else filmPause(f); });
  }
  function filmWrap(f) { if (f.dip) filmDip(f); else f.v.currentTime = f.start; }
  function filmDip(f) {
    if (f.dipping) return;
    f.dipping = true; clearTimeout(f.dipTimer);
    var v = f.v, frame = $('.vis-frame', f.fig), dark = false;
    var back = function () {
      if (dark) return; dark = true;
      frame.removeEventListener('transitionend', ended); clearTimeout(f.dipTimer);
      var shown = false;
      var show = function () {
        if (shown) return; shown = true;
        v.removeEventListener('seeked', seeked); clearTimeout(f.dipTimer);
        f.fig.classList.remove('is-dipping');
        f.dipTimer = setTimeout(function () { f.dipping = false; f.dipTimer = 0; }, DIP_IN * 1000);
      };
      var seeked = function () { if (Math.abs(v.currentTime - f.start) < 0.3) show(); };
      v.addEventListener('seeked', seeked);
      f.dipTimer = setTimeout(show, 800);
      v.currentTime = f.start;
      if (v.paused && f.want !== 'off' && f.half && !f.covered) filmPlay(f);
    };
    var ended = function (e) { if (e.target === frame && e.pseudoElement === '::after' && e.propertyName === 'opacity') back(); };
    frame.addEventListener('transitionend', ended);
    f.dipTimer = setTimeout(back, (DIP_OUT + 0.15) * 1000);
    f.fig.classList.add('is-dipping');
  }
  function filmTick(f) {
    var v = f.v, t = v.currentTime;
    if (f.end && !f.dipping) {
      var lead = f.dip ? DIP_OUT + DIP_EARLY : 0;
      if (t < f.start - 0.25) { v.currentTime = f.start; return; }
      if (t >= f.end || (lead && !v.paused && t >= f.end - lead)) { filmWrap(f); return; }
      if (!v.paused && f.end - lead - t < 0.35 && !f.timer) {
        f.timer = setTimeout(function () { f.timer = 0; if (!v.paused && !f.dipping && v.currentTime >= f.end - lead - 0.4) filmWrap(f); }, Math.max(0, (f.end - lead - t) * 1000 / (v.playbackRate || 1)));
      }
    }
    f.stops.forEach(function (li) { li.classList.toggle('is-now', t >= Number(li.getAttribute('data-start')) && t < Number(li.getAttribute('data-end'))); });
  }
  var nearIO = hasIO ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { var f = filmOf(e.target); if (f && e.isIntersecting && f.want !== 'off') filmLoad(f); });
  }, { rootMargin: '400px 0px' }) : null;
  var halfIO = hasIO ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var f = filmOf(e.target); if (!f) return;
      f.ratio = e.intersectionRatio;
      f.half = e.isIntersecting && (e.intersectionRatio >= 0.499 || (!!e.rootBounds && e.intersectionRect.height >= e.rootBounds.height / 2));
    });
    filmDecide();
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] }) : null;
  function filmAdd(fig) {
    var v = $('video', fig), b = $('.film-btn', fig);
    if (!v || !b || filmOf(fig)) return;
    var box = fig.closest('.as-film');
    var f = { fig: fig, v: v, b: b, name: fig.getAttribute('data-name') || '', start: Number(fig.getAttribute('data-start')) || 0, end: Number(fig.getAttribute('data-end')) || 0,
      want: reduceMotion.matches ? 'off' : 'auto', readerOff: false, loaded: false, theme: null, half: false, ratio: 0, covered: false, failed: false,
      restore: null, resume: false, ownPause: false, timer: 0, dip: false, dipping: false, dipTimer: 0, click: fig.hasAttribute('data-click'), stops: box ? $$('.fs-stop', box) : [] };
    f.dip = !!f.end && fig.getAttribute('data-loop') !== 'seamless';
    if (f.click) f.want = 'off';
    fig.classList.remove('is-playing', 'is-failed', 'is-dipping');
    if (v.hasAttribute('src')) { v.removeAttribute('src'); v.load(); }
    v.muted = true; v.loop = !f.click;
    v.addEventListener('ended', function () { if (f.click) { f.want = 'off'; v.currentTime = 0; filmButton(f); } });
    v.addEventListener('play', function () { filmButton(f); });
    v.addEventListener('pause', function () {
      var own = f.ownPause; f.ownPause = false;
      if (!own && f.dipping) return;
      filmButton(f);
      if (!own && f.end && v.currentTime >= f.end - 0.1 && f.want !== 'off' && f.half && !f.covered) { if (f.dip) filmDip(f); else { v.currentTime = f.start; filmPlay(f); } }
    });
    v.addEventListener('timeupdate', function () { filmTick(f); });
    v.addEventListener('loadedmetadata', function () {
      if (f.restore != null) { var t = f.restore; f.restore = null; if (Math.abs(v.currentTime - t) > 0.05) v.currentTime = t; }
      if (f.resume) { f.resume = false; filmPlay(f); }
    });
    v.addEventListener('error', function () { f.failed = true; fig.classList.add('is-failed'); });
    b.addEventListener('click', function () {
      if (!v.paused) { f.want = 'off'; f.readerOff = true; filmPause(f); return; }
      films.forEach(function (x) { if (x !== f) { if (x.want === 'on') x.want = 'auto'; filmPause(x); } });
      f.want = 'on'; f.readerOff = false; filmPlay(f);
    });
    films.push(f);
    if (nearIO) { nearIO.observe(fig); halfIO.observe(fig); }
  }
  function filmsIn(root) { $$('.vis-film', root).forEach(filmAdd); }
  function filmsOut(root) {
    films = films.filter(function (f) {
      if (!root.contains(f.fig)) return true;
      filmPause(f); clearTimeout(f.timer); clearTimeout(f.dipTimer);
      if (nearIO) { nearIO.unobserve(f.fig); halfIO.unobserve(f.fig); }
      return false;
    });
  }
  function filmsCovered(on, except) {
    films.forEach(function (f) { if (except && except.contains(f.fig)) return; f.covered = on; if (on) filmPause(f); });
    if (!on) filmDecide();
  }
  function filmsTheme() {
    var t = themeNow();
    films.forEach(function (f) {
      if (!f.loaded || f.theme === t) return;
      var v = f.v, at = v.currentTime;
      f.resume = !v.paused; f.restore = at; f.theme = t;
      v.src = filmSrc(f);
      v.currentTime = at;
      filmButton(f);
    });
  }
  filmsIn(document);
  if (films.length || $('.oc-pic')) {
    new MutationObserver(filmsTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    if (darkScheme.addEventListener) darkScheme.addEventListener('change', filmsTheme);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', function () {
      films.forEach(function (f) {
        if (f.click) return;
        if (reduceMotion.matches && f.want === 'auto') { f.want = 'off'; filmPause(f); }
        else if (!reduceMotion.matches && f.want === 'off' && !f.readerOff) f.want = 'auto';
      });
      filmDecide();
    });
    window.addEventListener('beforeprint', function () { $$('.vis-film img, .oc-pic img').forEach(function (img) { img.loading = 'eager'; }); });
  }
  document.addEventListener('click', function (e) {
    var s = e.target.closest('.fs-seek'); if (!s) return;
    var box = s.closest('.as-film'), fig = box && $('.vis-film', box), f = fig && filmOf(fig);
    if (!f) return;
    var t = Number(s.getAttribute('data-seek')) || 0;
    filmLoad(f);
    if (f.v.readyState < 1) f.restore = t;
    f.v.currentTime = t;
    f.stops.forEach(function (li) { li.classList.toggle('is-now', li.contains(s)); });
    if (!reduceMotion.matches) {
      films.forEach(function (x) { if (x !== f) { if (x.want === 'on') x.want = 'auto'; filmPause(x); } });
      f.want = 'on'; f.readerOff = false; filmPlay(f);
    }
    var r = fig.getBoundingClientRect();
    if (r.top < 64 || r.bottom > window.innerHeight) fig.scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  });

  var LAND_MS = 2100, landEl = null, landId = '', landAt = 0, landMarked = null, landTimer = 0, landStill = false, landMargin = null, landFreed = null;
  var FOCUSABLE = 'a[href], button, input, select, textarea, summary, [tabindex], [contenteditable]';
  function hashId() { var h = location.hash.slice(1); try { return decodeURIComponent(h); } catch (e) { return h; } }
  function landable(el) { return !!el && el !== body && el !== document.documentElement && el.tagName !== 'MAIN' && !el.closest('[role="dialog"], dialog'); }
  function landShown(n) { return !!n && n.getClientRects().length > 0; }
  function landGap() {
    var pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
    var bar = $('.pb-top');
    return pad > 0 ? pad : (bar ? Math.max(0, bar.getBoundingClientRect().bottom) : 0) + 24;
  }
  function landUnfilter(el) {
    var q = $('#sym-q'), box = el.closest('#help');
    if (!q || !box || !q.value) return;
    for (var n = el; n && n !== box; n = n.parentElement) {
      if (n.hidden) { q.value = ''; q.dispatchEvent(new Event('input', { bubbles: true })); return; }
    }
  }
  function landUnhide(n) {
    var by = null;
    if (n.id) by = $$('[aria-controls]').filter(function (c) { return c.getAttribute('aria-controls').split(/\s+/).indexOf(n.id) >= 0; })[0] || null;
    var prev = n.previousElementSibling;
    if (!by && prev && prev.matches('button[aria-expanded="false"]')) by = prev;
    if (by && by.getAttribute('aria-expanded') !== 'true') by.click();
    if (n.hidden) n.hidden = false;
  }
  function landOpen(el) {
    var py = $('#player'), se = $('#search'), x;
    if (landShown(py) && (x = $('.py-close', py))) x.click();
    if (landShown(se) && (x = $('.ps-close', se))) x.click();
    landUnfilter(el);
    for (var n = el; n && n !== body; n = n.parentElement) {
      if (n.tagName === 'DETAILS' && !n.open) n.open = true;
      if (n.hidden) landUnhide(n);
    }
    var sym = el.closest('.sym'), b = sym && $('button[aria-expanded]', sym);
    if (b && b.getAttribute('aria-expanded') !== 'true') b.click();
  }
  function landContext(el) {
    var step = el.parentElement && el.parentElement.closest('.pb-step, .sym, .as-film');
    if (!step) return el;
    var chain = [], room = window.innerHeight - landGap() - 24, bottom = el.getBoundingClientRect().bottom;
    if (!step.classList.contains('as-film')) for (var n = el.parentElement; n && n !== step; n = n.parentElement) chain.unshift(n);
    chain.unshift(step);
    for (var i = 0; i < chain.length; i++) if (bottom - chain[i].getBoundingClientRect().top <= room) return chain[i];
    return el;
  }
  function landScroll(el) {
    if (landMargin && landMargin !== el) landMargin.style.scrollMarginTop = '';
    el.style.scrollMarginTop = '';
    var ctx = landContext(el);
    if (ctx !== el) { el.style.scrollMarginTop = Math.round(el.getBoundingClientRect().top - ctx.getBoundingClientRect().top) + 'px'; landMargin = el; }
    el.scrollIntoView({ block: 'start' });
    var bar = $('.pb-top'), under = bar ? bar.getBoundingClientRect().bottom : 0, top = ctx.getBoundingClientRect().top;
    if (top < under) window.scrollBy(0, top - under - 24);
  }
  function landFocus(el) {
    if (!el.matches(FOCUSABLE)) { el.setAttribute('tabindex', '-1'); el.setAttribute('data-land-tabindex', ''); }
    el.classList.add('pb-landed-focus');
    el.focus({ preventScroll: true });
    setTimeout(function () { if (landStill && landEl === el && !el.contains(document.activeElement)) el.focus({ preventScroll: true }); }, 0);
  }
  document.addEventListener('focusout', function (e) {
    var el = e.target;
    if (!el.classList || !el.classList.contains('pb-landed-focus')) return;
    setTimeout(function () {
      var now = document.activeElement;
      if (now === el || (now && now.closest && now.closest('[role="dialog"], dialog'))) return;
      el.classList.remove('pb-landed-focus');
      if (el.hasAttribute('data-land-tabindex')) { el.removeAttribute('tabindex'); el.removeAttribute('data-land-tabindex'); }
    }, 0);
  });
  function landMark(el) {
    if (landMarked && landMarked !== el) landMarked.classList.remove('pb-landed');
    clearTimeout(landTimer);
    el.classList.remove('pb-landed');
    void el.offsetWidth;
    el.classList.add('pb-landed');
    landMarked = el;
    landTimer = setTimeout(function () { el.classList.remove('pb-landed'); if (landMarked === el) landMarked = null; }, LAND_MS);
  }
  function land(id, opts) {
    opts = opts || {};
    id = String(id == null ? '' : id).replace(/^#/, '');
    var el = id ? document.getElementById(id) : null;
    if (!landable(el)) return null;
    landOpen(el);
    while (el && !el.getClientRects().length) el = el.parentElement;
    if (!landable(el)) return null;
    landId = id; landAt = Date.now();
    if (opts.hash !== false && hashId() !== id) location.hash = id;
    landScroll(el);
    if (opts.focus !== false) landFocus(el);
    if (opts.mark !== false) landMark(el);
    landEl = el; landStill = true;
    var held = heldStep(); if (held) markOutline(held);
    return el;
  }
  window.PBLand = land;
  window.addEventListener('hashchange', function () {
    var id = hashId();
    if (!id || (id === landId && Date.now() - landAt < 1000)) return;
    land(id, { hash: false });
  });
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !a.hash || (a.target && a.target !== '_self') || a.href.split('#')[0] !== location.href.split('#')[0]) return;
    var id = a.hash.slice(1);
    try { id = decodeURIComponent(id); } catch (err) { return; }
    if (id !== hashId() || !landable(document.getElementById(id))) return;
    e.preventDefault();
    land(id, { hash: false });
  });
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (t) {
    window.addEventListener(t, function () { if (!landStill) return; landStill = false; if (landFreed) landFreed(); }, { capture: true, passive: true });
  });
  function landOnLoad() {
    var id = hashId(), el = id ? document.getElementById(id) : null;
    if (!landable(el)) return;
    var nav = window.performance && performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
    if (nav && (nav.type === 'reload' || nav.type === 'back_forward')) { landOpen(el); return; }
    land(id, { hash: false });
  }
  window.addEventListener('load', function () { if (landEl && landStill) landScroll(landEl); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', landOnLoad);
  else setTimeout(landOnLoad, 0);

  if (!journey) return;

  var KEY = 'pb:' + journey + ':done';
  var done = {};
  try { done = JSON.parse(store.get(KEY) || '{}') || {}; } catch (e) { done = {}; }
  var total = Number(body.getAttribute('data-steps')) || 0;
  function paint() {
    var n = 0;
    $$('.pb-step').forEach(function (st) {
      var id = st.getAttribute('data-step'); var on = !!done[id]; if (on) n++;
      st.classList.toggle('is-done', on);
      var cb = $('input[data-done="' + id + '"]', st); if (cb) cb.checked = on;
      var ol = $('.pb-outline a[data-step="' + id + '"]'); if (ol) ol.classList.toggle('done', on);
    });
    var pc = $('.ol-pc'); if (pc) pc.textContent = n + ' of ' + total + ' steps done';
    var bar = $('.ol-bar span'); if (bar) bar.style.width = (total ? (100 * n / total) : 0) + '%';
  }
  function setDone(id, on) { if (on) done[id] = 1; else delete done[id]; store.set(KEY, JSON.stringify(done)); paint(); }
  document.addEventListener('change', function (e) { var cb = e.target.closest('input[data-done]'); if (cb) setDone(cb.getAttribute('data-done'), cb.checked); });
  paint();

  function keepInOutline(a) {
    var ol = a.closest('.pb-outline');
    if (!ol || ol.scrollHeight <= ol.clientHeight) return;
    var r = ol.getBoundingClientRect(), b = a.getBoundingClientRect();
    if (b.top >= r.top + 48 && b.bottom <= r.bottom - 48) return;
    var to = ol.scrollTop + b.top - r.top - ol.clientHeight / 3;
    if (ol.scrollTo) ol.scrollTo({ top: to, behavior: reduceMotion && reduceMotion.matches ? 'auto' : 'smooth' }); else ol.scrollTop = to;
  }
  function heldStep() { var st = landStill && landEl && landEl.closest('.pb-step'); return st ? st.getAttribute('data-step') : null; }
  function markOutline(id) {
    var a = $('.pb-outline a[data-step="' + id + '"]');
    if (!a) return;
    $$('.pb-outline a.active').forEach(function (x) { x.classList.remove('active'); });
    a.classList.add('active'); keepInOutline(a);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) markOutline(heldStep() || en.target.getAttribute('data-step'));
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    $$('.pb-step').forEach(function (st) { io.observe(st); });
    landFreed = function () {
      var y = innerHeight * 0.35;
      $$('.pb-step').some(function (st) { var r = st.getBoundingClientRect(); if (r.top <= y && r.bottom >= y) { markOutline(st.getAttribute('data-step')); return true; } return false; });
    };
  }

  function openSym(li, on) { var b = $('button', li); var d = $('.sym-body', li); b.setAttribute('aria-expanded', String(on)); d.hidden = !on; }
  $$('.sym').forEach(function (li) { $('button', li).addEventListener('click', function () { openSym(li, $('button', li).getAttribute('aria-expanded') !== 'true'); }); });
  var symQ = $('#sym-q');
  if (symQ) symQ.addEventListener('input', function () {
    var words = fold(symQ.value).split(/\s+/).filter(Boolean), shown = 0;
    $$('#help .sym').forEach(function (li) { var on = words.every(function (w) { return fold(li.textContent).indexOf(w) >= 0; }); li.hidden = !on; if (on) shown++; });
    $$('.sym-group').forEach(function (g) { g.hidden = !$$('.sym', g).some(function (li) { return !li.hidden; }); });
    $('.sym-count').textContent = words.length ? shown + (shown === 1 ? ' problem' : ' problems') : '';
    var none = $('.sym-none'); if (none) none.hidden = !(words.length && !shown);
  });

  var tl = $('.pl-timeline');
  if (tl) {
    var ms = JSON.parse(tl.getAttribute('data-milestones'));
    var tight = tl.getAttribute('data-tight') ? JSON.parse(tl.getAttribute('data-tight')) : null;
    var ev = $('#pl-event');
    var key = ev.getAttribute('data-key') || 'event';
    var fromUrl = new URLSearchParams(location.search).get(key);
    var start = fromUrl || store.get('pb-' + key);
    var example = !start;
    if (example) { var d0 = new Date(); d0.setDate(d0.getDate() + 56); start = iso(d0); }
    else if (fromUrl) store.set('pb-' + key, fromUrl);
    ev.value = start;
    var inKey = function (id) { return 'pb-in-' + journey + '-' + id; };
    $$('input[data-in]').forEach(function (inp) { var v = store.get(inKey(inp.getAttribute('data-in'))); if (v !== null && v !== '') inp.value = v; });
    function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
    function parse(s) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
    function minus(d, n) { var x = new Date(d); x.setDate(x.getDate() - n); return x; }
    function workday(d) { var x = new Date(d); while (x.getDay() === 0 || x.getDay() === 6) x.setDate(x.getDate() - 1); return x; }
    function workdaysBefore(d, n) { var x = new Date(d); while (n > 0) { x.setDate(x.getDate() - 1); if (x.getDay() !== 0 && x.getDay() !== 6) n--; } return x; }
    function fmt(d) { return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }); }
    function val(id) { var i = $('input[data-in="' + id + '"]'); var n = i ? Number(i.value) : 0; return isFinite(n) && n >= 0 ? Math.floor(n) : 0; }
    function render() {
      var E = parse(ev.value);
      if (!E) { tl.innerHTML = '<li class="pl-left">Pick a date to see the plan.</li>'; return; }
      var byId = {}, dates = {};
      ms.forEach(function (m) { byId[m.id] = m; });
      function dateOf(id, depth) {
        if (id in dates) return dates[id];
        var m = byId[id], spec = m && m.date, d = null;
        if (!m || depth > 30) return null;
        if (spec === 'anchor') d = E;
        else if (spec && spec.from) {
          var base = dateOf(spec.from, depth + 1);
          if (base) {
            var n = 0; (spec.minus || []).forEach(function (x) { n += typeof x === 'number' ? x : val(x); });
            d = spec.count === 'working' ? workdaysBefore(base, n) : minus(base, n);
            if (spec.workday) d = workday(d);
          }
        }
        dates[id] = d; return d;
      }
      ms.forEach(function (m) { dateOf(m.id, 0); });
      var anchor = ms.filter(function (m) { return m.date === 'anchor'; })[0];
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var days = Math.round((E - today) / 864e5);
      var what = key === 'event' ? 'your event' : 'that date';
      var html = '<li class="pl-left"><span class="pl-for">' + escH(($('.pl-label') || {}).textContent || '') + ' ' + escH(fmt(E)) + '. </span>' + (example ? 'An example date, 8 weeks from today: enter your own. ' : '') + (days >= 0 ? days + ' days from today to ' + what + '.' : 'This date has passed.') + '</li>';
      if (tight && dates[tight.milestone] && dates[tight.milestone] < today) html += '<li class="pl-warn"><span>⚠</span><span>' + escH(tight.text) + '</span></li>';
      ms.forEach(function (m) {
        var now = m.date === 'now', d = now ? null : dates[m.id];
        if (!d && !now) return;
        var past = d && d < today && m !== anchor;
        var label = m.step ? '<a href="#step-' + escH(m.step) + '">' + escH(m.label) + '</a>' : escH(m.label);
        html += '<li class="pl-item' + (past ? ' pl-past' : '') + (m === anchor ? ' pl-final' : '') + '"><span class="pl-dot"></span><span class="pl-date">' + escH(d ? fmt(d) : 'Now') + '</span><span class="pl-what">' + label + (m.owner ? ' <span class="owner ' + escH(m.ocls) + '">' + escH(m.owner) + '</span>' : '') + (m.note ? '<span class="pl-sub">' + escH(m.note) + '</span>' : '') + '</span></li>';
      });
      tl.innerHTML = html;
    }
    function entered() { if (parse(ev.value)) { example = false; store.set('pb-' + key, ev.value); } render(); }
    ev.addEventListener('change', entered); ev.addEventListener('input', entered);
    $$('input[data-in]').forEach(function (i) { i.addEventListener('input', function () { store.set(inKey(i.getAttribute('data-in')), i.value); render(); }); });
    render();
  }

  var player = $('#player');
  var steps = $$('.pb-step');
  var at = 0, lastFocus = null;
  function show(i) {
    at = Math.max(0, Math.min(steps.length - 1, i));
    var st = steps[at]; var id = st.getAttribute('data-step');
    var vis = $('.vis', st), pyVis = $('.py-vis', player);
    filmsOut(pyVis);
    pyVis.innerHTML = vis ? vis.outerHTML : '';
    filmsIn(pyVis);
    player.classList.toggle('py-novis', !vis);
    var sk = $('.stage-k', st.closest('.pb-stage')); // a journey of one stage has no counter
    $('.py-stage', player).textContent = (sk ? sk.textContent + ' · ' : '') + $('.stage-head h2', st.closest('.pb-stage')).textContent;
    $('#pl-title').innerHTML = $('.st-title h3', st).innerHTML;
    var owner = $('.st-title .owner', st); $('.py-owner', player).innerHTML = owner ? owner.outerHTML : '';
    $('.py-detail', player).innerHTML = $$('.st-why, .st-watch, .st-donewhen, .st-journey', st).map(function (n) { return n.outerHTML; }).join('');
    [pyVis, $('.py-detail', player), $('.py-owner', player), $('#pl-title')].forEach(function (box) { $$('[id]', box).forEach(function (n) { n.removeAttribute('id'); }); });
    var cb = $('.py-done input', player); cb.checked = !!done[id];
    $('.py-count', player).textContent = 'Step ' + (at + 1) + ' of ' + steps.length;
    $('.py-bar span', player).style.width = (100 * (at + 1) / steps.length) + '%';
    $('.py-prev', player).disabled = at === 0;
    var nx = $('.py-next', player); nx.disabled = false;
    nx.innerHTML = at === steps.length - 1 ? 'Finish' : 'Next <svg class="i s16" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
  }
  function open(i) { lastFocus = document.activeElement; filmsCovered(true, player); player.hidden = false; body.classList.add('player-open'); show(i); $('.py-close', player).focus(); }
  function close() {
    player.hidden = true; body.classList.remove('player-open');
    filmsOut($('.py-vis', player)); filmsCovered(false);
    var st = steps[at]; if (st) st.scrollIntoView({ block: 'start' });
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (player) {
    $$('[data-play]').forEach(function (b) { b.addEventListener('click', function () { open(Number(b.getAttribute('data-play')) || 0); }); });
    $('.py-close', player).addEventListener('click', close);
    $('.py-prev', player).addEventListener('click', function () { show(at - 1); });
    $('.py-next', player).addEventListener('click', function () { if (at === steps.length - 1) close(); else show(at + 1); });
    $('.py-done input', player).addEventListener('change', function (e) { setDone(steps[at].getAttribute('data-step'), e.target.checked); });
    document.addEventListener('keydown', function (e) {
      if (player.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight' && !e.target.matches('input')) show(at + 1);
      else if (e.key === 'ArrowLeft' && !e.target.matches('input')) show(at - 1);
      else if (e.key === 'Tab') {
        var f = $$('button, a[href], input', player).filter(function (n) { return !n.disabled && n.offsetParent !== null; });
        if (!f.length) return; var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
})();