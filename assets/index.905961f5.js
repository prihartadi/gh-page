const D = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
};
D();
function h() {}
function M(e) {
  return e();
}
function j() {
  return Object.create(null);
}
function x(e) {
  e.forEach(M);
}
function G(e) {
  return typeof e == "function";
}
function P(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let _;
function J(e, t) {
  return _ || (_ = document.createElement("a")), (_.href = t), e === _.href;
}
function Q(e) {
  return Object.keys(e).length === 0;
}
function d(e, t) {
  e.appendChild(t);
}
function z(e, t, n) {
  e.insertBefore(t, n || null);
}
function C(e) {
  e.parentNode.removeChild(e);
}
function b(e) {
  return document.createElement(e);
}
function E(e) {
  return document.createTextNode(e);
}
function q() {
  return E(" ");
}
function V(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function a(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function W(e) {
  return Array.from(e.childNodes);
}
function X(e, t) {
  (t = "" + t), e.wholeText !== t && (e.data = t);
}
let L;
function p(e) {
  L = e;
}
const m = [],
  B = [],
  $ = [],
  I = [],
  Y = Promise.resolve();
let O = !1;
function Z() {
  O || ((O = !0), Y.then(F));
}
function k(e) {
  $.push(e);
}
const w = new Set();
let y = 0;
function F() {
  const e = L;
  do {
    for (; y < m.length; ) {
      const t = m[y];
      y++, p(t), ee(t.$$);
    }
    for (p(null), m.length = 0, y = 0; B.length; ) B.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      w.has(n) || (w.add(n), n());
    }
    $.length = 0;
  } while (m.length);
  for (; I.length; ) I.pop()();
  (O = !1), w.clear(), p(e);
}
function ee(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(k);
  }
}
const v = new Set();
let te;
function H(e, t) {
  e && e.i && (v.delete(e), e.i(t));
}
function ne(e, t, n, o) {
  if (e && e.o) {
    if (v.has(e)) return;
    v.add(e),
      te.c.push(() => {
        v.delete(e), o && (n && e.d(1), o());
      }),
      e.o(t);
  } else o && o();
}
function re(e) {
  e && e.c();
}
function T(e, t, n, o) {
  const { fragment: r, on_mount: s, on_destroy: l, after_update: c } = e.$$;
  r && r.m(t, n),
    o ||
      k(() => {
        const u = s.map(M).filter(G);
        l ? l.push(...u) : x(u), (e.$$.on_mount = []);
      }),
    c.forEach(k);
}
function U(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (x(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function oe(e, t) {
  e.$$.dirty[0] === -1 && (m.push(e), Z(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function K(e, t, n, o, r, s, l, c = [-1]) {
  const u = L;
  p(e);
  const i = (e.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: h,
    not_equal: r,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: j(),
    dirty: c,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  l && l(i.root);
  let g = !1;
  if (
    ((i.ctx = n
      ? n(e, t.props || {}, (f, S, ...A) => {
          const N = A.length ? A[0] : S;
          return (
            i.ctx &&
              r(i.ctx[f], (i.ctx[f] = N)) &&
              (!i.skip_bound && i.bound[f] && i.bound[f](N), g && oe(e, f)),
            S
          );
        })
      : []),
    i.update(),
    (g = !0),
    x(i.before_update),
    (i.fragment = o ? o(i.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const f = W(t.target);
      i.fragment && i.fragment.l(f), f.forEach(C);
    } else i.fragment && i.fragment.c();
    t.intro && H(e.$$.fragment), T(e, t.target, t.anchor, t.customElement), F();
  }
  p(u);
}
class R {
  $destroy() {
    U(this, 1), (this.$destroy = h);
  }
  $on(t, n) {
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(n),
      () => {
        const r = o.indexOf(n);
        r !== -1 && o.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !Q(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
var ie = "assets/svelte.d72399d3.png";
function se(e) {
  let t, n, o, r, s;
  return {
    c() {
      (t = b("button")),
        (n = E("Clicks: ")),
        (o = E(e[0])),
        a(t, "class", "svelte-1c7643s");
    },
    m(l, c) {
      z(l, t, c), d(t, n), d(t, o), r || ((s = V(t, "click", e[1])), (r = !0));
    },
    p(l, [c]) {
      c & 1 && X(o, l[0]);
    },
    i: h,
    o: h,
    d(l) {
      l && C(t), (r = !1), s();
    },
  };
}
function le(e, t, n) {
  let o = 0;
  return [
    o,
    () => {
      n(0, (o += 1));
    },
  ];
}
class ce extends R {
  constructor(t) {
    super(), K(this, t, le, se, P, {});
  }
}
function ue(e) {
  let t, n, o, r, s, l, c, u;
  return (
    (c = new ce({})),
    {
      c() {
        (t = b("main")),
          (n = b("img")),
          (r = q()),
          (s = b("h1")),
          (s.textContent = "Hello \u{1F44B}"),
          (l = q()),
          re(c.$$.fragment),
          J(n.src, (o = ie)) || a(n, "src", o),
          a(n, "alt", "Svelte Logo"),
          a(n, "class", "svelte-lb6p4a"),
          a(s, "class", "svelte-lb6p4a"),
          a(t, "class", "svelte-lb6p4a");
      },
      m(i, g) {
        z(i, t, g), d(t, n), d(t, r), d(t, s), d(t, l), T(c, t, null), (u = !0);
      },
      p: h,
      i(i) {
        u || (H(c.$$.fragment, i), (u = !0));
      },
      o(i) {
        ne(c.$$.fragment, i), (u = !1);
      },
      d(i) {
        i && C(t), U(c);
      },
    }
  );
}
class fe extends R {
  constructor(t) {
    super(), K(this, t, null, ue, P, {});
  }
}
new fe({ target: document.getElementById("app") });
