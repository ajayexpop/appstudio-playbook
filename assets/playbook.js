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

  var search = $('#search'), sq = $('#ps-q'), sr = $('#ps-results'), lastSearchFocus = null;
  var fold = function (t) { return t.toLowerCase().replace(/['’]/g, ''); };
  var INDEX = (window.PB_SEARCH || []).map(function (e) { return { e: e, hay: fold(e.t + ' ' + (e.s || '') + ' ' + (e.x || '') + ' ' + (e.j || '')), title: fold(e.t) }; });
  function runSearch() {
    var words = fold(sq.value).split(/\s+/).filter(Boolean);
    if (!words.length) { sr.innerHTML = ''; return; }
    var hits = INDEX.filter(function (r) { return words.every(function (w) { return r.hay.indexOf(w) >= 0; }); })
      .map(function (r) { return { r: r, score: words.filter(function (w) { return r.title.indexOf(w) >= 0; }).length * 2 + (r.e.k === 'Journey' ? 1 : 0) }; })
      .sort(function (a, b) { return b.score - a.score; }).slice(0, 12);
    sr.innerHTML = hits.length ? hits.map(function (h) { var e = h.r.e; return '<li><a href="' + escH(up + e.u) + '"><span class="ps-k">' + escH(e.k) + (e.j ? ' · ' + escH(e.j) : '') + '</span><span class="ps-t">' + escH(e.t) + '</span>' + (e.s ? '<span class="ps-s">' + escH(e.s) + '</span>' : '') + '</a></li>'; }).join('') : '<li class="ps-none">Nothing found. Try fewer or other words.</li>';
  }
  function openSearch() { if (!search) return; lastSearchFocus = document.activeElement; search.hidden = false; body.classList.add('search-open'); sq.focus(); sq.select(); runSearch(); }
  function closeSearch() { search.hidden = true; body.classList.remove('search-open'); if (lastSearchFocus && lastSearchFocus.focus) lastSearchFocus.focus(); }
  if (search) {
    $$('[data-search]').forEach(function (b) { b.addEventListener('click', openSearch); });
    $('.ps-close', search).addEventListener('click', closeSearch);
    search.addEventListener('click', function (e) { if (e.target === search) closeSearch(); });
    sq.addEventListener('input', runSearch);
    sr.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a) closeSearch(); });
    document.addEventListener('keydown', function (e) {
      if (!search.hidden && e.key === 'Escape') { e.preventDefault(); closeSearch(); return; }
      if (search.hidden && e.key === '/' && !e.target.matches('input, textarea, select') && !body.classList.contains('player-open')) { e.preventDefault(); openSearch(); }
      if (!search.hidden && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        var links = $$('a', sr); if (!links.length) return;
        var i = links.indexOf(document.activeElement); e.preventDefault();
        (links[e.key === 'ArrowDown' ? Math.min(links.length - 1, i + 1) : Math.max(-1, i - 1)] || sq).focus();
      }
    });
  }

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

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$('.pb-outline a.active').forEach(function (a) { a.classList.remove('active'); });
        var a = $('.pb-outline a[data-step="' + en.target.getAttribute('data-step') + '"]'); if (a) a.classList.add('active');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    $$('.pb-step').forEach(function (st) { io.observe(st); });
  }

  function openSym(li, on) { var b = $('button', li); var d = $('.sym-body', li); b.setAttribute('aria-expanded', String(on)); d.hidden = !on; }
  $$('.sym').forEach(function (li) { $('button', li).addEventListener('click', function () { openSym(li, $('button', li).getAttribute('aria-expanded') !== 'true'); }); });
  function openFromHash() { var t = location.hash && document.getElementById(location.hash.slice(1)); if (t && t.classList.contains('sym')) { openSym(t, true); t.scrollIntoView({ block: 'start' }); } }
  window.addEventListener('hashchange', openFromHash); openFromHash();
  var symQ = $('#sym-q');
  if (symQ) symQ.addEventListener('input', function () {
    var words = fold(symQ.value).split(/\s+/).filter(Boolean), shown = 0;
    $$('.sym-groups .sym').forEach(function (li) { var on = words.every(function (w) { return fold(li.textContent).indexOf(w) >= 0; }); li.hidden = !on; if (on) shown++; });
    $$('.sym-group').forEach(function (g) { g.hidden = !$$('.sym', g).some(function (li) { return !li.hidden; }); });
    $('.sym-count').textContent = words.length ? shown + (shown === 1 ? ' problem' : ' problems') : '';
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
    $('.py-stage', player).textContent = $('.stage-k', st.closest('.pb-stage')).textContent + ' · ' + $('.stage-head h2', st.closest('.pb-stage')).textContent;
    $('#pl-title').innerHTML = $('.st-title h3', st).innerHTML;
    var owner = $('.st-title .owner', st); $('.py-owner', player).innerHTML = owner ? owner.outerHTML : '';
    $('.py-detail', player).innerHTML = $$('.st-why, .st-watch, .st-donewhen, .st-journey, .st-deeper', st).map(function (n) { return n.outerHTML; }).join('');
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