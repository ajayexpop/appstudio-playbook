(function () {
  'use strict';

  var ORDER = ['Journeys', 'Steps', 'Watch-outs', 'Problems', 'Planners', 'What App Studio does', 'Home'];
  var STOP = setOf('a an the and or of to in on at by for from with as is are be been was were it its this that these those i me my we our us you your he she they them their how what when where which who why can could should would will do does did so if then than there here into onto about cant cannot dont doesnt didnt isnt arent wasnt werent wont wouldnt shouldnt couldnt im ive youre weve theyre lets whats hows wheres whys still but find mean means meaning need needs want wants get gets getting got one now');
  var STATE = setOf('missing old wrong different not no showing appear appears appearing');
  var KEEP = setOf('news ios its this his has was does yes bus gas plus always perhaps series species analysis basis');
  var EXACT = 1, STEMMED = 0.95, SYNONYM = 1, PREFIX = 0.8, AS_KEY = 0.45;
  var W_T = 10, W_S = 5, W_X = 2, W_W = 1;
  var BIT_T = 1, BIT_S = 2, BIT_X = 4, BIT_W = 8;
  var FIELD = [];
  for (var b0 = 0; b0 < 16; b0++) {
    var ws = [];
    if (b0 & BIT_T) ws.push(W_T);
    if (b0 & BIT_S) ws.push(W_S);
    if (b0 & BIT_X) ws.push(W_X);
    FIELD.push(ws.length ? ws[0] + 0.2 * (ws.length - 1) : (b0 & BIT_W ? W_W : 0));
  }
  var RELAX = true;
  var MAX_TEXT = 200, MAX_WORDS = 16, MAX_PREFIX = 400, MAX_SUGGEST = 6;

  function setOf(list) { var o = Object.create(null); list.split(' ').forEach(function (w) { o[w] = true; }); return o; }
  function str(v) { return typeof v === 'string' ? v : v == null ? '' : String(v); }

  var ASCII = [];
  for (var c0 = 0; c0 < 128; c0++) {
    var ch0 = String.fromCharCode(c0);
    ASCII.push(/[a-z0-9]/.test(ch0) ? ch0 : /[A-Z]/.test(ch0) ? ch0.toLowerCase() : c0 === 39 || c0 === 96 ? '' : ' ');
  }
  var BY_HAND = Object.create(null);
  BY_HAND['\u00df'] = 'ss'; BY_HAND['\u00e6'] = 'ae'; BY_HAND['\u0153'] = 'oe'; BY_HAND['\u00f8'] = 'o'; BY_HAND['\u0111'] = 'd';
  BY_HAND['\u00f0'] = 'd'; BY_HAND['\u00fe'] = 'th'; BY_HAND['\u0142'] = 'l'; BY_HAND['\u0131'] = 'i';
  var GONE = /^[\u2018\u2019\u201b\u02bc\u2032\u00b4\u00ad\u0300-\u036f\u200b-\u200d\u2060\ufeff]$/;
  var NFD = typeof ''.normalize === 'function';
  var HYPHENS = '-\u2010\u2011';
  var folds = Object.create(null);
  function isLetter(f) {
    var c = f.charCodeAt(0);
    if (c < 128) return ASCII[c] !== ' ' && ASCII[c] !== '';
    return f.toLowerCase() !== f.toUpperCase() || (c >= 0x0590 && c <= 0x08ff) || (c >= 0x0e00 && c <= 0x0eff) ||
      (c >= 0x3040 && c <= 0x30ff) || (c >= 0x3400 && c <= 0x9fff) || (c >= 0xac00 && c <= 0xd7af) || (c >= 0xf900 && c <= 0xfaff);
  }
  function foldChar(ch) {
    var f = folds[ch];
    if (f !== undefined) return f;
    if (GONE.test(ch)) f = '';
    else {
      var l = ch.toLowerCase();
      f = BY_HAND[l] || (NFD ? l.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : l);
      if (!f || !isLetter(f)) f = ' ';
    }
    folds[ch] = f;
    return f;
  }
  function foldAt(s, i) { var c = s.charCodeAt(i); return c < 128 ? ASCII[c] : foldChar(s.charAt(i)); }
  function combining(c) { return c >= 0x0300 && c <= 0x036f; }

  function tokens(s) {
    var out = [], a = -1, end = 0, w = '', same = true;
    for (var i = 0, n = s.length; i <= n; i++) {
      var c = i < n ? s.charCodeAt(i) : 32;
      if ((c >= 97 && c <= 122) || (c >= 48 && c <= 57)) {
        if (a < 0) { a = i; same = true; } else if (!same) w += s.charAt(i);
        end = i + 1;
        continue;
      }
      var f = c < 128 ? ASCII[c] : foldChar(s.charAt(i));
      if (f === ' ') {
        if (a >= 0) {
          var prev = out.length ? out[out.length - 1] : null;
          out.push({ w: same ? s.slice(a, end) : w, a: a, b: end, j: !!prev && a - prev.b === 1 && HYPHENS.indexOf(s.charAt(a - 1)) >= 0, d: !same });
          a = -1;
        }
        continue;
      }
      if (a >= 0 && same) { w = s.slice(a, i); same = false; }
      if (f === '') { if (a >= 0 && combining(c)) end = i + 1; continue; }
      if (a < 0) { a = i; w = ''; same = false; }
      w += f;
      end = i + 1;
    }
    return out;
  }
  function spanEnd(s, a, n) {
    var got = 0;
    for (var i = a; i < s.length; i++) {
      var f = foldAt(s, i);
      if (f === ' ') return i;
      got += f.length;
      if (got >= n) { i++; while (i < s.length && combining(s.charCodeAt(i))) i++; return i; }
    }
    return s.length;
  }

  function single(w) {
    if (w.length < 4 || KEEP[w]) return w;
    if (/ies$/.test(w)) return w.slice(0, -3) + 'y';
    if (/(?:ss|sh|ch|x|z)es$/.test(w)) return w.slice(0, -2);
    if (/[^su]s$/.test(w)) return w.slice(0, -1);
    return w;
  }
  var stems = Object.create(null), nStems = 0;
  function stem(w) {
    var s = stems[w];
    if (s !== undefined) return s;
    if (++nStems > 20000) { stems = Object.create(null); nStems = 1; }
    s = single(w);
    if (s.length >= 4 && !KEEP[w]) {
      var cut = false;
      if (/ied$/.test(s) && s.length > 4) s = s.slice(0, -3) + 'y';
      else if (/ing$/.test(s) && s.length > 5) { s = s.slice(0, -3); cut = true; }
      else if (/ed$/.test(s) && s.length > 4) { s = s.slice(0, -2); cut = true; }
      if (cut && s.length >= 5 && /([bcdfgkmnprtv])\1$/.test(s)) s = s.slice(0, -1);
      if (s.length > 3 && /e$/.test(s)) s = s.slice(0, -1);
    }
    stems[w] = s;
    return s;
  }

  var gen = 0, recs = null, POST, WORDS, COUNT, SHOW, STEMS, SINGLES, VLIST, PAIRS, SYN, SYN_STEM, SYN_KEYS, MULTI, GROUPS, NAMES;

  function post(w, n, bit) {
    var p = POST[w];
    if (!p) p = POST[w] = { ids: [], bits: [] };
    var last = p.ids.length - 1;
    if (last >= 0 && p.ids[last] === n) p.bits[last] |= bit;
    else { p.ids.push(n); p.bits.push(bit); }
  }
  function startsSentence(s, a) {
    for (var i = a - 1; i >= 0; i--) {
      var ch = s.charAt(i);
      if (' \t\n\u201c\u2018"(['.indexOf(ch) >= 0) continue;
      return '.!?:'.indexOf(ch) >= 0;
    }
    return true;
  }
  function indexField(r, toks, bit, s, forms, pairs) {
    for (var k = 0; k < toks.length; k++) {
      var tk = toks[k];
      post(tk.w, r.n, bit);
      if (tk.j && k) post(toks[k - 1].w + tk.w, r.n, bit);
      if (!forms) continue;
      COUNT[tk.w] = (COUNT[tk.w] || 0) + 1;
      if (tk.d) {
        var o = s.slice(tk.a, tk.b), cap = /^[A-Z][a-z]*$/.test(o) && startsSentence(s, tk.a);
        var fm = forms[tk.w] || (forms[tk.w] = { mid: Object.create(null), cap: 0 });
        if (cap) fm.cap++; else fm.mid[o] = (fm.mid[o] || 0) + 1;
      }
      if (pairs && k) { var pair = stem(toks[k - 1].w) + ' ' + stem(tk.w); PAIRS[pair] = (PAIRS[pair] || 0) + 1; }
    }
  }
  function showOf(w, fm, plain) {
    var best = null, bestLower = plain ? w : null, nLower = plain;
    for (var o in fm.mid) {
      if (best === null || fm.mid[o] > fm.mid[best]) best = o;
      if (o === o.toLowerCase() && fm.mid[o] > nLower) { bestLower = o; nLower = fm.mid[o]; }
    }
    return bestLower !== null ? bestLower : best !== null ? best : w;
  }
  function prefixed(list, p, max) {
    var lo = 0, hi = list.length;
    while (lo < hi) { var mid = (lo + hi) >> 1; if (list[mid] < p) lo = mid + 1; else hi = mid; }
    var out = [];
    for (var i = lo; i < list.length && list[i].lastIndexOf(p, 0) === 0 && out.length < max; i++) out.push(list[i]);
    return out;
  }
  function groupBy(list, key) {
    var o = Object.create(null);
    list.forEach(function (x) { var k = key(x); (o[k] || (o[k] = [])).push(x); });
    return o;
  }

  function init(entries, words) {
    gen++;
    stems = Object.create(null); nStems = 0;
    recs = []; POST = Object.create(null); COUNT = Object.create(null); SHOW = Object.create(null); PAIRS = Object.create(null);
    GROUPS = Object.create(null); NAMES = ORDER.slice();
    ORDER.forEach(function (g, i) { GROUPS[g] = i; });
    var forms = Object.create(null), list = entries && typeof entries.length === 'number' ? entries : [];
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      if (!e || typeof e !== 'object') continue;
      var g = str(e.g);
      if (!(g in GROUPS)) { GROUPS[g] = NAMES.length; NAMES.push(g); }
      var et = str(e.t), es = str(e.s), ex = str(e.x);
      var where = (Object.prototype.toString.call(e.w) === '[object Array]' ? e.w : [e.w]).map(str).concat(g).join(' | ');
      var r = { e: e, n: recs.length, g: g, gi: GROUPS[g], t: tokens(et), s: tokens(es), x: tokens(ex), w: tokens(where), tn: 0,
        k: typeof e.r === 'number' && e.r > 0 && e.r <= 1 ? e.r : 1 };
      indexField(r, r.t, BIT_T, et, forms, true);
      indexField(r, r.s, BIT_S, es, forms, true);
      indexField(r, r.x, BIT_X, ex, forms, false);
      indexField(r, r.w, BIT_W, where, null, false);
      for (var k = 0; k < r.t.length; k++) if (!STOP[r.t[k].w]) r.tn++;
      recs.push(r);
    }
    for (var w in COUNT) {
      var fm = forms[w];
      var plain = COUNT[w] - (fm ? fm.cap + Object.keys(fm.mid).reduce(function (a, o) { return a + fm.mid[o]; }, 0) : 0);
      SHOW[w] = fm ? showOf(w, fm, plain) : w;
    }
    WORDS = Object.keys(POST).sort();
    VLIST = Object.keys(COUNT).sort();
    STEMS = groupBy(WORDS, stem);
    SINGLES = groupBy(WORDS, single);
    SYN = Object.create(null); SYN_STEM = Object.create(null); MULTI = Object.create(null);
    var syn = words && typeof words === 'object' ? words.synonyms : null;
    if (syn && typeof syn === 'object') {
      for (var key in syn) {
        if (!Object.prototype.hasOwnProperty.call(syn, key)) continue;
        var kw = tokens(str(key)).map(function (t) { return t.w; });
        var targets = [].concat(syn[key]).filter(function (x) { return typeof x === 'string'; }).map(function (x) {
          return { show: x.replace(/\s+/g, ' ').trim(), w: tokens(x).map(function (t) { return t.w; }) };
        }).filter(function (x) { return x.w.length; });
        if (!kw.length || !targets.length) continue;
        if (kw.length === 1) {
          var k1 = kw[0];
          SYN[k1] = (SYN[k1] || []).concat(targets);
          var sk = stem(k1);
          if (!SYN_STEM[sk]) SYN_STEM[sk] = [];
          if (SYN_STEM[sk].indexOf(k1) < 0) SYN_STEM[sk].push(k1);
        } else {
          (MULTI[kw[0]] || (MULTI[kw[0]] = [])).push({ words: kw, targets: targets });
        }
      }
    }
    SYN_KEYS = Object.keys(SYN).sort();
    for (var f in MULTI) MULTI[f].sort(function (a, b2) { return b2.words.length - a.words.length; });
    memo = null;
  }
  function ready() {
    if (recs) return;
    var root = typeof window !== 'undefined' ? window : {};
    init(root.PB_SEARCH || [], root.PB_WORDS || null);
  }

  var ALPHA = 'abcdefghijklmnopqrstuvwxyz0123456789';
  function edits(w) {
    var out = [], n = w.length, i, k;
    for (i = 0; i < n; i++) out.push(w.slice(0, i) + w.slice(i + 1));
    for (i = 0; i < n - 1; i++) out.push(w.slice(0, i) + w.charAt(i + 1) + w.charAt(i) + w.slice(i + 2));
    for (i = 0; i < n; i++) for (k = 0; k < ALPHA.length; k++) out.push(w.slice(0, i) + ALPHA.charAt(k) + w.slice(i + 1));
    for (i = 0; i <= n; i++) for (k = 0; k < ALPHA.length; k++) out.push(w.slice(0, i) + ALPHA.charAt(k) + w.slice(i));
    return out;
  }
  function weightOf(w) {
    if (COUNT[w]) return COUNT[w];
    if (SYN[w]) return 0.9 * SYN[w].reduce(function (a, t) { return Math.max(a, COUNT[t.w[0]] || 0); }, 0) || 0.5;
    return POST[w] ? POST[w].ids.length : 0;
  }
  function near(q, open, max, shortest) {
    if (q.length < (shortest || 5) || q.length > 24) return [];
    var vs = edits(q), seen = Object.create(null), whole = [], starts = [], i, v;
    seen[q] = true;
    for (i = 0; i < vs.length; i++) {
      v = vs[i];
      if (seen[v]) continue;
      seen[v] = true;
      if (!STOP[v] && (COUNT[v] || SYN[v] || POST[v])) whole.push(v);
    }
    if (open) {
      var tried = Object.create(null);
      for (i = 0; i < vs.length; i++) {
        v = vs[i];
        if (v.length < 4 || tried[v]) continue;
        tried[v] = true;
        var more = prefixed(VLIST, v, 50);
        for (var k = 0; k < more.length; k++) if (!seen[more[k]] && !STOP[more[k]]) { seen[more[k]] = true; starts.push(more[k]); }
      }
    }
    var byWeight = function (a, b) {
      return weightOf(b) - weightOf(a) || (b.charAt(0) === q.charAt(0)) - (a.charAt(0) === q.charAt(0)) || (a < b ? -1 : a > b ? 1 : 0);
    };
    var found = whole.sort(byWeight).concat(starts.sort(byWeight)), out = [], stemsSeen = Object.create(null);
    for (i = 0; i < found.length && out.length < max; i++) {
      var s = stem(found[i]);
      if (stemsSeen[s]) continue;
      stemsSeen[s] = true;
      out.push({ w: found[i], show: SHOW[found[i]] || found[i] });
    }
    return out;
  }

  function newTerm(q, a, b, last) {
    return { q: q, a: a, b: b, soft: !!STOP[q], alts: Object.create(null), pre: Object.create(null), phrases: [], any: false, fix: null, last: last };
  }
  function addAlt(t, w, k) {
    if (!POST[w]) return;
    if (!(w in t.alts) || t.alts[w] < k) t.alts[w] = k;
    t.any = true;
  }
  function addGroup(t, w, kSelf, kGroup, groups, key) {
    addAlt(t, w, kSelf);
    var g = groups[key(w)];
    if (g) for (var i = 0; i < g.length; i++) if (g[i] !== w && (STOP[w] || !STOP[g[i]])) addAlt(t, g[i], kGroup);
  }
  function setOfGroup(groups, key) {
    return function (w) {
      var o = Object.create(null), g = groups[key(w)] || [];
      if (POST[w]) o[w] = true;
      for (var i = 0; i < g.length; i++) if (STOP[w] || !STOP[g[i]]) o[g[i]] = true;
      return o;
    };
  }
  function addPhrase(t, words, k, setFor) {
    var sets = words.map(setFor);
    for (var i = 0; i < sets.length; i++) if (!Object.keys(sets[i]).length) return false;
    t.phrases.push({ sets: sets, k: k });
    t.any = true;
    addAlt(t, words.join(''), k);
    return true;
  }
  function addTargets(t, targets, k) {
    if (targets.length) t.syn = true;
    var mine = Object.create(null);
    t.q.split(' ').forEach(function (w) { mine[stem(w)] = true; });
    if (!t.tgt) t.tgt = Object.create(null);
    for (var i = 0; i < targets.length; i++) {
      var tw = targets[i].w;
      if (tw.length === 1) {
        addGroup(t, tw[0], k, k, SINGLES, single);
        [tw[0]].concat(SINGLES[single(tw[0])] || []).forEach(function (w) { if (!mine[stem(w)]) t.tgt[w] = true; });
      } else if (addPhrase(t, tw, k, setOfGroup(SINGLES, single))) {
        t.phrases[t.phrases.length - 1].tgt = true;
        t.tgt[tw.join('')] = true;
      }
    }
  }
  function synonymsOf(t, q, k) {
    var keys = SYN[q] ? [q] : [], more = SYN_STEM[stem(q)] || [];
    for (var i = 0; i < more.length; i++) if (keys.indexOf(more[i]) < 0) keys.push(more[i]);
    for (var j = 0; j < keys.length; j++) addTargets(t, SYN[keys[j]], k);
  }
  function wordTerm(tok, last, fixing) {
    var q = tok.w, t = newTerm(q, tok.a, tok.b, last);
    synonymsOf(t, q, SYNONYM);
    var own = t.any ? AS_KEY : 1;
    addGroup(t, q, EXACT * own, STEMMED * own, STEMS, stem);
    if (last && !t.soft) {
      var pre = prefixed(WORDS, q, MAX_PREFIX);
      for (var i = 0; i < pre.length; i++) if (!(pre[i] in t.alts)) { addAlt(t, pre[i], PREFIX * own); t.pre[pre[i]] = true; }
    }
    if (!t.any && !t.soft && !fixing) {
      var best = near(q, last, 1)[0];
      if (best) {
        var f = wordTerm({ w: best.w, a: tok.a, b: tok.b }, false, true);
        if (f.any) { f.fix = best.show; f.typed = q; f.last = last; return f; }
      }
    }
    return t;
  }
  function multiAt(toks, i) {
    var cands = MULTI[toks[i].w];
    if (!cands) return null;
    for (var c = 0; c < cands.length; c++) {
      var m = cands[c], ok = i + m.words.length <= toks.length;
      for (var k = 1; ok && k < m.words.length; k++) ok = toks[i + k].w === m.words[k] || stem(toks[i + k].w) === stem(m.words[k]);
      if (ok) return m;
    }
    return null;
  }
  function runTerm(toks, i, m) {
    var n = m.words.length, t = newTerm(m.words.join(' '), toks[i].a, toks[i + n - 1].b, false);
    t.soft = false;
    t.run = true;
    addTargets(t, m.targets, SYNONYM);
    addPhrase(t, m.words, EXACT * (t.any ? AS_KEY : 1), setOfGroup(STEMS, stem));
    t.runSets = m.words.map(setOfGroup(STEMS, stem));
    return t;
  }

  var memo = null;
  function plan(text) {
    text = str(text);
    if (memo && memo.gen === gen && memo.input === text) return memo.plan;
    var cut = text.length > MAX_TEXT, src = cut ? text.slice(0, MAX_TEXT) : text;
    var toks = tokens(src);
    var open = !cut && toks.length > 0 && foldAt(src, src.length - 1) !== ' ';
    if (toks.length > MAX_WORDS) { toks = toks.slice(0, MAX_WORDS); open = false; }
    var terms = [], i = 0;
    while (i < toks.length) {
      var m = multiAt(toks, i);
      if (m) { terms.push(runTerm(toks, i, m)); i += m.words.length; continue; }
      terms.push(wordTerm(toks[i], open && i === toks.length - 1, false));
      i++;
    }
    if (terms.every(function (t) { return t.soft; })) terms.forEach(function (t) { t.soft = false; });
    terms.forEach(function (t) {
      for (var w in t.pre) if (terms.some(function (o) { return o !== t && !o.soft && (w in o.alts) && !o.pre[w]; })) { delete t.alts[w]; delete t.pre[w]; }
    });
    terms.forEach(function (t) { t.state = t.q.split(' ').every(function (w) { return STATE[w]; }); });
    var P = { text: src, toks: toks, open: open, terms: terms, seq: [], phrases: [], mark: Object.create(null), kind: Object.create(null), fixes: [], seqBits: Object.create(null), pairOk: 0 };
    var softAt = [];
    terms.forEach(function (t) {
      if (t.run) { P.seq = P.seq.concat(t.runSets); t.runSets.forEach(function () { softAt.push(false); }); }
      else { P.seq.push(t.alts); softAt.push(t.soft); }
      if (t.fix) P.fixes.push({ a: t.a, b: t.b, to: t.fix });
      if (t.soft) return;
      P.phrases = P.phrases.concat(t.phrases);
      for (var w in t.alts) {
        if (t.pre[w] && t.q.length < 2) continue;
        var how = t.pre[w] ? t.q.length : 0;
        if (!(w in P.mark) || how === 0 || (P.mark[w] && how > P.mark[w])) P.mark[w] = how;
        if (!(w in P.kind) || t.alts[w] > P.kind[w]) P.kind[w] = t.alts[w];
      }
    });
    P.seq.forEach(function (set, k) { for (var w in set) P.seqBits[w] = (P.seqBits[w] | 0) | (1 << k); });
    for (var k = 0; k + 1 < P.seq.length; k++) if (!(softAt[k] && softAt[k + 1])) P.pairOk |= 1 << (k + 1);
    memo = { gen: gen, input: text, plan: P };
    return P;
  }

  function gather(t, best, hit, own, held, head) {
    for (var w in t.alts) {
      var p = POST[w], k = t.alts[w], ids = p.ids, bits = p.bits, tg = !!(t.tgt && t.tgt[w]);
      for (var j = 0; j < ids.length; j++) {
        var id = ids[j], v = k * FIELD[bits[j]];
        if (!t.soft && (bits[j] & (BIT_T | BIT_S | BIT_X))) own[id] = 1;
        if (held && (!tg || (bits[j] & (BIT_T | BIT_S | BIT_W)))) held[id] = 1;
        if (head && (bits[j] & (BIT_T | BIT_S))) head[id] = 1;
        if (v > best[id]) { if (!best[id]) hit.push(id); best[id] = v; }
      }
    }
    for (var f = 0; f < t.phrases.length; f++) phraseHits(t.phrases[f], best, hit, t.soft ? null : own, held, head);
    if (t.run) apartHits(t.runSets, AS_KEY, best, hit, t.soft ? null : own, held);
  }
  function apartHits(sets, k, best, hit, own, held) {
    var n = recs.length, seen = new Uint8Array(n);
    for (var s = 0; s < sets.length; s++) {
      for (var w in sets[s]) {
        var p = POST[w];
        for (var j = 0; j < p.ids.length; j++) if (seen[p.ids[j]] === s && (p.bits[j] & (BIT_T | BIT_S))) seen[p.ids[j]] = s + 1;
      }
    }
    var v = k * W_X;
    for (var id = 0; id < n; id++) {
      if (seen[id] !== sets.length) continue;
      if (own) own[id] = 1;
      if (held) held[id] = 1;
      if (v > best[id]) { if (!best[id]) hit.push(id); best[id] = v; }
    }
  }
  function runAt(toks, j, sets) {
    if (j + sets.length > toks.length) return false;
    for (var k = 0; k < sets.length; k++) if (!sets[k][toks[j + k].w]) return false;
    return true;
  }
  function holds(toks, sets) { for (var j = 0; j < toks.length; j++) if (runAt(toks, j, sets)) return true; return false; }
  function phraseHits(ph, best, hit, own, held, head) {
    var n = recs.length, seen = new Uint8Array(n), sets = ph.sets;
    for (var k = 0; k < sets.length; k++) {
      for (var w in sets[k]) {
        var ids = POST[w].ids;
        for (var j = 0; j < ids.length; j++) if (seen[ids[j]] === k) seen[ids[j]] = k + 1;
      }
    }
    for (var id = 0; id < n; id++) {
      if (seen[id] !== sets.length) continue;
      var r = recs[id];
      var v = ph.k * (holds(r.t, sets) ? W_T : holds(r.s, sets) ? W_S : holds(r.x, sets) ? W_X : holds(r.w, sets) ? W_W : 0);
      if (own && v > ph.k * W_W) own[id] = 1;
      if (held && (!ph.tgt || v !== ph.k * W_X)) held[id] = 1;
      if (head && v >= ph.k * W_S) head[id] = 1;
      if (v > best[id]) { if (!best[id]) hit.push(id); best[id] = v; }
    }
  }
  function meet(toks, s, P, wantMarks) {
    var res = { marks: wantMarks ? [] : null, hit: 0, phrase: false, pairs: 0 };
    var m = P.seq.length, full = 1 << (m - 1), D = 0, prev = 0, pairs = 0, nph = wantMarks ? P.phrases.length : 0;
    for (var j = 0; j < toks.length; j++) {
      var tk = toks[j], how = P.mark[tk.w], nx = toks[j + 1];
      if (how !== undefined) {
        if (!STOP[tk.w]) res.hit += P.kind[tk.w];
        if (wantMarks) res.marks.push([tk.a, how ? spanEnd(s, tk.a, how) : tk.b]);
      } else if (nx && nx.j && P.mark[tk.w + nx.w] !== undefined) {
        res.hit += 2 * P.kind[tk.w + nx.w];
        if (wantMarks) res.marks.push([tk.a, nx.b]);
      }
      if (m > 1) {
        var B = P.seqBits[tk.w] | 0;
        D = ((D << 1) | 1) & B;
        if (D & full) { res.phrase = true; if (wantMarks) res.marks.push([toks[j - m + 1].a, tk.b]); }
        pairs |= (prev << 1) & B;
        prev = B;
      }
      for (var f = 0; f < nph; f++) {
        var sets = P.phrases[f].sets;
        if (runAt(toks, j, sets)) res.marks.push([tk.a, toks[j + sets.length - 1].b]);
      }
    }
    for (pairs &= P.pairOk; pairs; pairs &= pairs - 1) res.pairs++;
    if (wantMarks && res.marks.length > 1) res.marks = merged(res.marks);
    return res;
  }
  function merged(list) {
    list.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    var out = [list[0]];
    for (var i = 1; i < list.length; i++) {
      var last = out[out.length - 1];
      if (list[i][0] <= last[1]) { if (list[i][1] > last[1]) last[1] = list[i][1]; }
      else out.push(list[i]);
    }
    return out;
  }
  function finish(r, base, P) {
    var mt = meet(r.t, str(r.e.t), P, true), ms = meet(r.s, str(r.e.s), P, true), score = base;
    if (P.seq.length > 1) score += (mt.phrase ? 6 : 2 * mt.pairs) + (ms.phrase ? 3 : ms.pairs);
    if (r.tn) score += 2 * Math.min(1, mt.hit / r.tn);
    if (r.gi === 0 && r.k === 1) score += 0.5;
    score *= r.k;
    return { e: r.e, score: Math.round(score * 100) / 100, marks: { t: mt.marks, s: ms.marks } };
  }
  function telling(df, n) { return df ? 0.4 + 0.6 * Math.min(1, Math.log(n / df) / Math.log(Math.max(n, 2))) : 1; }
  function matchAll(terms) {
    var n = recs.length, total = new Float64Array(n), got = new Uint8Array(n), bits = new Uint32Array(n), best = new Float64Array(n), own = new Uint8Array(n), held = new Uint8Array(n), thing = new Uint8Array(n), runs = new Uint8Array(n), named = new Uint8Array(n), head = new Uint8Array(n), shead = new Uint8Array(n);
    var need = 0, states = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i], hit = [], bit = t.soft ? 0 : 1 << need;
      if (!t.soft && t.state) states |= bit;
      gather(t, best, hit, own, held, t.soft ? null : t.state ? shead : head);
      var k = t.soft ? 0.3 : telling(hit.length, n);
      if (!t.soft) need++;
      for (var j = 0; j < hit.length; j++) {
        var id = hit[j];
        total[id] += k * best[id];
        if (!t.soft && held[id]) { got[id]++; bits[id] |= bit; if (!t.state) { thing[id]++; if (t.run) runs[id]++; if (t.syn && k >= 0.75) named[id]++; } }
        if (t.state && shead[id]) head[id] = 1;
        best[id] = 0; held[id] = 0;
      }
    }
    var most = 0, top = -1, full = 0, things = ((1 << need) - 1) & ~states, holdThings = 0, plain = 0, most2 = 0, top2 = -1;
    var better = function (e, b) { return b < 0 || thing[e] > thing[b] || (thing[e] === thing[b] && (named[e] > named[b] || (named[e] === named[b] && (runs[e] > runs[b] || (runs[e] === runs[b] && total[e] * recs[e].k > total[b] * recs[b].k))))); };
    for (var e = 0; e < n; e++) {
      if (!own[e]) continue;
      if (got[e] === need) { full++; if (recs[e].g !== 'Planners' || head[e]) plain++; }
      else if (got[e] && (got[e] > most2 || (got[e] === most2 && better(e, top2)))) { most2 = got[e]; top2 = e; }
      if (things && (bits[e] & things) === things) holdThings++;
      if (got[e] && (got[e] > most || (got[e] === most && better(e, top)))) { most = got[e]; top = e; }
    }
    return { total: total, got: got, bits: bits, own: own, need: need, full: full, most: most, keep: top < 0 ? 0 : bits[top], states: states, things: things, holdThings: holdThings, plain: plain, most2: most2, keep2: top2 < 0 ? 0 : bits[top2], shead: shead };
  }
  function searched(P, dropped) {
    var s = P.text;
    for (var i = P.terms.length - 1; i >= 0; i--) {
      var t = P.terms[i];
      if (dropped[i]) s = s.slice(0, t.a) + s.slice(t.b);
      else if (t.fix) s = s.slice(0, t.a) + t.fix + s.slice(t.b);
    }
    return s.replace(/\s+/g, ' ').replace(/ ([,.;:!?)])/g, '$1').replace(/^ | $/g, '');
  }

  function droppedWords(P, dropped) {
    var out = [], last = null;
    for (var i = 0; i < P.terms.length; i++) {
      if (!dropped[i]) continue;
      var t = P.terms[i];
      if (last && !/\S/.test(P.text.slice(last.b, t.a))) last.b = t.b;
      else out.push(last = { a: t.a, b: t.b });
    }
    return out.map(function (x) { return P.text.slice(x.a, x.b); });
  }

  function query(text) {
    ready();
    var P = plan(text), none = { groups: [], corrected: null };
    if (!P.terms.length) return none;
    var M = matchAll(P.terms), want = -1;
    var fill = false;
    if (RELAX && M.states && M.things && M.full < 3 && M.holdThings > M.full) { want = M.things; fill = true; }
    else if (RELAX && M.full && !M.plain && M.need >= 2 && M.most2 >= Math.ceil(M.need / 2)) want = M.keep2;
    else if (!M.full) {
      if (!RELAX || M.need < 2 || !M.most || M.most < Math.ceil(M.need / 2)) return none;
      want = M.keep;
    }
    var lists = [], found = 0;
    for (var id = 0; id < recs.length; id++) {
      if (!M.own[id] || (want < 0 ? M.got[id] !== M.need : (M.bits[id] & want) !== want)) continue;
      var r = recs[id];
      var it = finish(r, M.total[id], P);
      if (fill && M.got[id] === M.need && M.shead[id]) it.score = Math.round((it.score + 100) * 100) / 100;
      (lists[r.gi] || (lists[r.gi] = [])).push({ it: it, n: id });
      found++;
    }
    if (!found) return none;
    var groups = [];
    for (var gi = 0; gi < lists.length; gi++) {
      if (!lists[gi]) continue;
      lists[gi].sort(function (a, b) { return b.it.score - a.it.score || a.n - b.n; });
      groups.push({ g: NAMES[gi], total: lists[gi].length, items: lists[gi].map(function (x) { return x.it; }), gi: gi });
    }
    groups.sort(function (a, b) { return b.items[0].score - a.items[0].score || a.gi - b.gi; });
    groups.forEach(function (g) { delete g.gi; });
    var dropped = [];
    if (want >= 0) {
      var r2 = 0;
      P.terms.forEach(function (t, i) { if (!t.soft) { dropped[i] = !(want & (1 << r2)); r2++; } });
    }
    var out = { groups: groups, corrected: want >= 0 || P.fixes.length ? searched(P, dropped) : null };
    if (out.corrected !== null) {
      out.dropped = droppedWords(P, dropped);
      out.fixes = P.terms.filter(function (t, i) { return t.fix && !dropped[i]; }).map(function (t) { return { typed: P.text.slice(t.a, t.b), as: t.fix }; });
    }
    return out;
  }

  function suggest(text) {
    ready();
    var P = plan(text), out = [];
    if (!P.toks.length) return out;
    var t = P.terms[P.terms.length - 1];
    if (t.run) return out;
    var L = t.q, seen = Object.create(null);
    seen[str(text).replace(/\s+/g, ' ').trim().toLowerCase()] = true;
    var head = P.text.slice(0, t.a);
    for (var i = P.fixes.length - 1; i >= 0; i--) if (P.fixes[i].b <= t.a) head = head.slice(0, P.fixes[i].a) + P.fixes[i].to + head.slice(P.fixes[i].b);
    head = head.replace(/\s+/g, ' ').replace(/^\s+/, '');
    var mask = null, before = P.terms.slice(0, -1).filter(function (x) { return !x.soft; });
    if (before.length) {
      if (before.some(function (x) { return !x.any; })) return out;
      var M = matchAll(before);
      mask = new Uint8Array(recs.length);
      for (var id = 0; id < recs.length; id++) if (M.got[id] === M.need) mask[id] = 1;
    }
    function together(w) {
      if (!mask) return true;
      var ids = POST[w] ? POST[w].ids : [];
      for (var k = 0; k < ids.length; k++) if (mask[ids[k]]) return true;
      return false;
    }
    function add(word, kind) {
      if (out.length >= MAX_SUGGEST) return;
      var q = head + word, key = q.toLowerCase();
      if (seen[key]) return;
      seen[key] = true;
      out.push({ label: q, q: q, kind: kind });
    }
    var pt = P.terms.length > 1 ? P.terms[P.terms.length - 2] : null;
    var prev = pt ? stem((pt.fix ? fold(pt.fix) : pt.q).split(' ').pop()) + ' ' : null;
    var keys = SYN[L] ? [L] : [];
    (SYN_STEM[stem(L)] || []).forEach(function (k) { if (keys.indexOf(k) < 0) keys.push(k); });
    if (P.open && !t.fix && L.length >= 3 && !COUNT[L]) prefixed(SYN_KEYS, L, 20).forEach(function (k) { if (keys.indexOf(k) < 0) keys.push(k); });
    keys.forEach(function (k) {
      SYN[k].forEach(function (target) {
        if (target.w.join('').length < 3 || (prev && !PAIRS[prev + stem(target.w[0])]) || (target.w.length === 1 && stem(target.w[0]) === stem(L))) return;
        var first = setOfGroup(SINGLES, single)(target.w[0]), ok = false;
        for (var w in first) if (together(w)) { ok = true; break; }
        if (ok && target.w.join(' ') !== L) add(target.show, 'synonym');
      });
    });
    if (P.open && !t.fix) {
      var after = P.terms.length > 1, whole = !!COUNT[L], sL = stem(L), byStem = Object.create(null), order = [], real = null;
      for (var q2 = P.terms.length - 2; q2 >= 0 && !real; q2--) if (!P.terms[q2].soft) real = stem((P.terms[q2].fix ? fold(P.terms[q2].fix) : P.terms[q2].q).split(' ').pop()) + ' ';
      var follows = function (s) { return prev ? (PAIRS[prev + s] || 0) + (real && real !== prev ? PAIRS[real + s] || 0 : 0) : 0; };
      prefixed(VLIST, L, 100000).forEach(function (w) {
        if (w === L || STOP[w] || w.length < 3 || /^\d+$/.test(w)) return;
        var s = stem(w);
        if (whole && s === sL) return;
        if (after && (COUNT[L] || SYN[L] || SYN_STEM[stem(L)]) && /^(s|es|d|ed|ing)$/.test(w.slice(L.length)) && w.indexOf(L) === 0) return;
        var gr = byStem[s];
        if (!gr) { gr = byStem[s] = { top: w, n: 0, members: [] }; order.push(s); }
        gr.n += COUNT[w];
        gr.members.push(w);
        if (COUNT[w] > COUNT[gr.top]) gr.top = w;
      });
      if (after) {
        if (order.some(follows)) order = order.filter(follows);
        else if (L.length < 3 || t.soft || STOP[L]) order = [];
        else if (whole) order = order.filter(function (s) { return byStem[s].n > COUNT[L]; });
      }
      order.sort(function (a, b) { return follows(b) - follows(a) || byStem[b].n - byStem[a].n || (a < b ? -1 : 1); });
      if (after && L.length < 2 && !order.some(function (s2) { return real && PAIRS[real + s2]; })) order = [];
      var cap = after ? Math.min(MAX_SUGGEST, out.length + 3) : MAX_SUGGEST;
      for (var o = 0; o < order.length && out.length < cap; o++) {
        var gr2 = byStem[order[o]];
        if (gr2.members.some(together)) add(SHOW[gr2.top] || gr2.top, 'word');
      }
    }
    if (t.fix || (!t.any && !t.soft)) {
      near(t.typed || L, P.open, 3, 4).forEach(function (c) { if (together(c.w) || (SYN[c.w] && !mask)) add(c.show, 'spelling'); });
    }
    return out;
  }

  function fold(text) { return tokens(str(text)).map(function (t) { return t.w; }).join(' '); }

  window.PBSearch = { init: init, query: query, suggest: suggest, fold: fold, stem: stem };
})();