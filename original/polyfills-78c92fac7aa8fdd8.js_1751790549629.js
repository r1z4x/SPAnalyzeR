! function()
{
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" !=
    typeof window ? window : "undefined" != typeof global ? global :
    "undefined" != typeof self ? self :
    {};

  function e(t)
  {
    var e = {
      exports:
      {}
    };
    return t(e, e.exports), e.exports
  }
  var r = function(t)
    {
      return t && t.Math == Math && t
    },
    n = r("object" == typeof globalThis && globalThis) || r("object" ==
      typeof window && window) || r("object" == typeof self && self) || r(
      "object" == typeof t && t) || Function("return this")(),
    o = function(t)
    {
      try
      {
        return !!t()
      }
      catch (t)
      {
        return !0
      }
    },
    i = !o(function()
    {
      return 7 != Object.defineProperty(
      {}, 1,
      {
        get: function()
        {
          return 7
        }
      })[1]
    }),
    a = {}.propertyIsEnumerable,
    u = Object.getOwnPropertyDescriptor,
    s = u && !a.call(
    {
      1: 2
    }, 1) ? function(t)
    {
      var e = u(this, t);
      return !!e && e.enumerable
    } : a,
    c = {
      f: s
    },
    f = function(t, e)
    {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    },
    l = {}.toString,
    h = function(t)
    {
      return l.call(t)
        .slice(8, -1)
    },
    p = "".split,
    d = o(function()
    {
      return !Object("z")
        .propertyIsEnumerable(0)
    }) ? function(t)
    {
      return "String" == h(t) ? p.call(t, "") : Object(t)
    } : Object,
    v = function(t)
    {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t
    },
    g = function(t)
    {
      return d(v(t))
    },
    y = function(t)
    {
      return "object" == typeof t ? null !== t : "function" == typeof t
    },
    m = function(t, e)
    {
      if (!y(t)) return t;
      var r, n;
      if (e && "function" == typeof(r = t.toString) && !y(n = r.call(t)))
      return n;
      if ("function" == typeof(r = t.valueOf) && !y(n = r.call(t))) return n;
      if (!e && "function" == typeof(r = t.toString) && !y(n = r.call(t)))
        return n;
      throw TypeError("Can't convert object to primitive value")
    },
    b = {}.hasOwnProperty,
    w = function(t, e)
    {
      return b.call(t, e)
    },
    S = n.document,
    E = y(S) && y(S.createElement),
    x = function(t)
    {
      return E ? S.createElement(t) :
      {}
    },
    A = !i && !o(function()
    {
      return 7 != Object.defineProperty(x("div"), "a",
        {
          get: function()
          {
            return 7
          }
        })
        .a
    }),
    O = Object.getOwnPropertyDescriptor,
    R = {
      f: i ? O : function(t, e)
      {
        if (t = g(t), e = m(e, !0), A) try
        {
          return O(t, e)
        }
        catch (t)
        {}
        if (w(t, e)) return f(!c.f.call(t, e), t[e])
      }
    },
    j = function(t)
    {
      if (!y(t)) throw TypeError(String(t) + " is not an object");
      return t
    },
    P = Object.defineProperty,
    I = {
      f: i ? P : function(t, e, r)
      {
        if (j(t), e = m(e, !0), j(r), A) try
        {
          return P(t, e, r)
        }
        catch (t)
        {}
        if ("get" in r || "set" in r) throw TypeError(
          "Accessors not supported");
        return "value" in r && (t[e] = r.value), t
      }
    },
    T = i ? function(t, e, r)
    {
      return I.f(t, e, f(1, r))
    } : function(t, e, r)
    {
      return t[e] = r, t
    },
    k = function(t, e)
    {
      try
      {
        T(n, t, e)
      }
      catch (r)
      {
        n[t] = e
      }
      return e
    },
    L = "__core-js_shared__",
    U = n[L] || k(L,
    {}),
    M = Function.toString;
  "function" != typeof U.inspectSource && (U.inspectSource = function(t)
  {
    return M.call(t)
  });
  var _, N, C, F = U.inspectSource,
    B = n.WeakMap,
    D = "function" == typeof B && /native code/.test(F(B)),
    q = !1,
    z = e(function(t)
    {
      (t.exports = function(t, e)
      {
        return U[t] || (U[t] = void 0 !== e ? e :
        {})
      })("versions", [])
      .push(
      {
        version: "3.6.5",
        mode: "global",
        copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)"
      })
    }),
    W = 0,
    K = Math.random(),
    G = function(t)
    {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++W + K)
        .toString(36)
    },
    $ = z("keys"),
    V = function(t)
    {
      return $[t] || ($[t] = G(t))
    },
    H = {};
  if (D)
  {
    var X = new(0, n.WeakMap),
      Y = X.get,
      J = X.has,
      Q = X.set;
    _ = function(t, e)
    {
      return Q.call(X, t, e), e
    }, N = function(t)
    {
      return Y.call(X, t) ||
      {}
    }, C = function(t)
    {
      return J.call(X, t)
    }
  }
  else
  {
    var Z = V("state");
    H[Z] = !0, _ = function(t, e)
    {
      return T(t, Z, e), e
    }, N = function(t)
    {
      return w(t, Z) ? t[Z] :
      {}
    }, C = function(t)
    {
      return w(t, Z)
    }
  }
  var tt, et = {
      set: _,
      get: N,
      has: C,
      enforce: function(t)
      {
        return C(t) ? N(t) : _(t,
        {})
      },
      getterFor: function(t)
      {
        return function(e)
        {
          var r;
          if (!y(e) || (r = N(e))
            .type !== t) throw TypeError("Incompatible receiver, " + t +
            " required");
          return r
        }
      }
    },
    rt = e(function(t)
    {
      var e = et.get,
        r = et.enforce,
        o = String(String)
        .split("String");
      (t.exports = function(t, e, i, a)
      {
        var u = !!a && !!a.unsafe,
          s = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof e || w(i, "name") ||
            T(i, "name", e), r(i)
            .source = o.join("string" == typeof e ? e : "")), t !== n ? (u ?
            !c && t[e] && (s = !0) : delete t[e], s ? t[e] = i : T(t, e, i)
            ) : s ? t[e] = i : k(e, i)
      })(Function.prototype, "toString", function()
      {
        return "function" == typeof this && e(this)
          .source || F(this)
      })
    }),
    nt = n,
    ot = function(t)
    {
      return "function" == typeof t ? t : void 0
    },
    it = function(t, e)
    {
      return arguments.length < 2 ? ot(nt[t]) || ot(n[t]) : nt[t] && nt[t][e] ||
        n[t] && n[t][e]
    },
    at = Math.ceil,
    ut = Math.floor,
    st = function(t)
    {
      return isNaN(t = +t) ? 0 : (t > 0 ? ut : at)(t)
    },
    ct = Math.min,
    ft = function(t)
    {
      return t > 0 ? ct(st(t), 9007199254740991) : 0
    },
    lt = Math.max,
    ht = Math.min,
    pt = function(t, e)
    {
      var r = st(t);
      return r < 0 ? lt(r + e, 0) : ht(r, e)
    },
    dt = function(t)
    {
      return function(e, r, n)
      {
        var o, i = g(e),
          a = ft(i.length),
          u = pt(n, a);
        if (t && r != r)
        {
          for (; a > u;)
            if ((o = i[u++]) != o) return !0
        }
        else
          for (; a > u; u++)
            if ((t || u in i) && i[u] === r) return t || u || 0;
        return !t && -1
      }
    },
    vt = {
      includes: dt(!0),
      indexOf: dt(!1)
    },
    gt = vt.indexOf,
    yt = function(t, e)
    {
      var r, n = g(t),
        o = 0,
        i = [];
      for (r in n) !w(H, r) && w(n, r) && i.push(r);
      for (; e.length > o;) w(n, r = e[o++]) && (~gt(i, r) || i.push(r));
      return i
    },
    mt = ["constructor", "hasOwnProperty", "isPrototypeOf",
      "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"
    ],
    bt = mt.concat("length", "prototype"),
    wt = {
      f: Object.getOwnPropertyNames || function(t)
      {
        return yt(t, bt)
      }
    },
    St = {
      f: Object.getOwnPropertySymbols
    },
    Et = it("Reflect", "ownKeys") || function(t)
    {
      var e = wt.f(j(t)),
        r = St.f;
      return r ? e.concat(r(t)) : e
    },
    xt = function(t, e)
    {
      for (var r = Et(e), n = I.f, o = R.f, i = 0; i < r.length; i++)
      {
        var a = r[i];
        w(t, a) || n(t, a, o(e, a))
      }
    },
    At = /#|\.prototype\./,
    Ot = function(t, e)
    {
      var r = jt[Rt(t)];
      return r == It || r != Pt && ("function" == typeof e ? o(e) : !!e)
    },
    Rt = Ot.normalize = function(t)
    {
      return String(t)
        .replace(At, ".")
        .toLowerCase()
    },
    jt = Ot.data = {},
    Pt = Ot.NATIVE = "N",
    It = Ot.POLYFILL = "P",
    Tt = Ot,
    kt = R.f,
    Lt = function(t, e)
    {
      var r, o, i, a, u, s = t.target,
        c = t.global,
        f = t.stat;
      if (r = c ? n : f ? n[s] || k(s,
        {}) : (n[s] ||
        {})
        .prototype)
        for (o in e)
        {
          if (a = e[o], i = t.noTargetGet ? (u = kt(r, o)) && u.value : r[o], !
            Tt(c ? o : s + (f ? "." : "#") + o, t.forced) && void 0 !== i)
          {
            if (typeof a == typeof i) continue;
            xt(a, i)
          }(t.sham || i && i.sham) && T(a, "sham", !0), rt(r, o, a, t)
        }
    },
    Ut = function(t)
    {
      return Object(v(t))
    },
    Mt = Math.min,
    _t = [].copyWithin || function(t, e)
    {
      var r = Ut(this),
        n = ft(r.length),
        o = pt(t, n),
        i = pt(e, n),
        a = arguments.length > 2 ? arguments[2] : void 0,
        u = Mt((void 0 === a ? n : pt(a, n)) - i, n - o),
        s = 1;
      for (i < o && o < i + u && (s = -1, i += u - 1, o += u - 1); u-- > 0;)
        i in r ? r[o] = r[i] : delete r[o], o += s, i += s;
      return r
    },
    Nt = !!Object.getOwnPropertySymbols && !o(function()
    {
      return !String(Symbol())
    }),
    Ct = Nt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Ft = z("wks"),
    Bt = n.Symbol,
    Dt = Ct ? Bt : Bt && Bt.withoutSetter || G,
    qt = function(t)
    {
      return w(Ft, t) || (Ft[t] = Nt && w(Bt, t) ? Bt[t] : Dt("Symbol." + t)),
        Ft[t]
    },
    zt = Object.keys || function(t)
    {
      return yt(t, mt)
    },
    Wt = i ? Object.defineProperties : function(t, e)
    {
      j(t);
      for (var r, n = zt(e), o = n.length, i = 0; o > i;) I.f(t, r = n[i++], e[
        r]);
      return t
    },
    Kt = it("document", "documentElement"),
    Gt = "prototype",
    $t = "script",
    Vt = V("IE_PROTO"),
    Ht = function() {},
    Xt = function(t)
    {
      return "<" + $t + ">" + t + "</" + $t + ">"
    },
    Yt = function()
    {
      try
      {
        tt = document.domain && new ActiveXObject("htmlfile")
      }
      catch (t)
      {}
      var t, e, r;
      Yt = tt ? function(t)
      {
        t.write(Xt("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e
      }(tt) : (e = x("iframe"), r = "java" + $t + ":", e.style.display =
        "none", Kt.appendChild(e), e.src = String(r), (t = e.contentWindow
          .document)
        .open(), t.write(Xt("document.F=Object")), t.close(), t.F);
      for (var n = mt.length; n--;) delete Yt[Gt][mt[n]];
      return Yt()
    };
  H[Vt] = !0;
  var Jt = Object.create || function(t, e)
    {
      var r;
      return null !== t ? (Ht[Gt] = j(t), r = new Ht, Ht[Gt] = null, r[Vt] =
        t) : r = Yt(), void 0 === e ? r : Wt(r, e)
    },
    Qt = qt("unscopables"),
    Zt = Array.prototype;
  null == Zt[Qt] && I.f(Zt, Qt,
  {
    configurable: !0,
    value: Jt(null)
  });
  var te = function(t)
  {
    Zt[Qt][t] = !0
  };
  Lt(
  {
    target: "Array",
    proto: !0
  },
  {
    copyWithin: _t
  }), te("copyWithin");
  var ee = function(t)
    {
      if ("function" != typeof t) throw TypeError(String(t) +
        " is not a function");
      return t
    },
    re = function(t, e, r)
    {
      if (ee(t), void 0 === e) return t;
      switch (r)
      {
        case 0:
          return function()
          {
            return t.call(e)
          };
        case 1:
          return function(r)
          {
            return t.call(e, r)
          };
        case 2:
          return function(r, n)
          {
            return t.call(e, r, n)
          };
        case 3:
          return function(r, n, o)
          {
            return t.call(e, r, n, o)
          }
      }
      return function()
      {
        return t.apply(e, arguments)
      }
    },
    ne = Function.call,
    oe = function(t, e, r)
    {
      return re(ne, n[t].prototype[e], r)
    };
  oe("Array", "copyWithin"), Lt(
  {
    target: "Array",
    proto: !0
  },
  {
    fill: function(t)
    {
      for (var e = Ut(this), r = ft(e.length), n = arguments.length, o =
          pt(n > 1 ? arguments[1] : void 0, r), i = n > 2 ? arguments[2] :
          void 0, a = void 0 === i ? r : pt(i, r); a > o;) e[o++] = t;
      return e
    }
  }), te("fill"), oe("Array", "fill");
  var ie = Array.isArray || function(t)
    {
      return "Array" == h(t)
    },
    ae = qt("species"),
    ue = function(t, e)
    {
      var r;
      return ie(t) && ("function" != typeof(r = t.constructor) || r !== Array &&
        !ie(r.prototype) ? y(r) && null === (r = r[ae]) && (r = void 0) : r =
        void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
    },
    se = [].push,
    ce = function(t)
    {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        o = 4 == t,
        i = 6 == t,
        a = 5 == t || i;
      return function(u, s, c, f)
      {
        for (var l, h, p = Ut(u), v = d(p), g = re(s, c, 3), y = ft(v.length),
            m = 0, b = f || ue, w = e ? b(u, y) : r ? b(u, 0) : void 0; y >
          m; m++)
          if ((a || m in v) && (h = g(l = v[m], m, p), t))
            if (e) w[m] = h;
            else if (h) switch (t)
        {
          case 3:
            return !0;
          case 5:
            return l;
          case 6:
            return m;
          case 2:
            se.call(w, l)
        }
        else if (o) return !1;
        return i ? -1 : n || o ? o : w
      }
    },
    fe = {
      forEach: ce(0),
      map: ce(1),
      filter: ce(2),
      some: ce(3),
      every: ce(4),
      find: ce(5),
      findIndex: ce(6)
    },
    le = Object.defineProperty,
    he = {},
    pe = function(t)
    {
      throw t
    },
    de = function(t, e)
    {
      if (w(he, t)) return he[t];
      e || (e = {});
      var r = [][t],
        n = !!w(e, "ACCESSORS") && e.ACCESSORS,
        a = w(e, 0) ? e[0] : pe,
        u = w(e, 1) ? e[1] : void 0;
      return he[t] = !!r && !o(function()
      {
        if (n && !i) return !0;
        var t = {
          length: -1
        };
        n ? le(t, 1,
        {
          enumerable: !0,
          get: pe
        }) : t[1] = 1, r.call(t, a, u)
      })
    },
    ve = fe.find,
    ge = "find",
    ye = !0,
    me = de(ge);
  ge in [] && Array(1)[ge](function()
  {
    ye = !1
  }), Lt(
  {
    target: "Array",
    proto: !0,
    forced: ye || !me
  },
  {
    find: function(t)
    {
      return ve(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), te(ge), oe("Array", "find");
  var be = fe.findIndex,
    we = "findIndex",
    Se = !0,
    Ee = de(we);
  we in [] && Array(1)[we](function()
  {
    Se = !1
  }), Lt(
  {
    target: "Array",
    proto: !0,
    forced: Se || !Ee
  },
  {
    findIndex: function(t)
    {
      return be(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), te(we), oe("Array", "findIndex");
  var xe = function(t, e, r, n, o, i, a, u)
    {
      for (var s, c = o, f = 0, l = !!a && re(a, u, 3); f < n;)
      {
        if (f in r)
        {
          if (s = l ? l(r[f], f, e) : r[f], i > 0 && ie(s)) c = xe(t, e, s, ft(s
            .length), c, i - 1) - 1;
          else
          {
            if (c >= 9007199254740991) throw TypeError(
              "Exceed the acceptable array length");
            t[c] = s
          }
          c++
        }
        f++
      }
      return c
    },
    Ae = xe;
  Lt(
  {
    target: "Array",
    proto: !0
  },
  {
    flatMap: function(t)
    {
      var e, r = Ut(this),
        n = ft(r.length);
      return ee(t), (e = ue(r, 0))
        .length = Ae(e, r, r, n, 0, 1, t, arguments.length > 1 ?
          arguments[1] : void 0), e
    }
  }), te("flatMap"), oe("Array", "flatMap"), Lt(
  {
    target: "Array",
    proto: !0
  },
  {
    flat: function()
    {
      var t = arguments.length ? arguments[0] : void 0,
        e = Ut(this),
        r = ft(e.length),
        n = ue(e, 0);
      return n.length = Ae(n, e, e, r, 0, void 0 === t ? 1 : st(t)), n
    }
  }), te("flat"), oe("Array", "flat");
  var Oe, Re, je, Pe = function(t)
    {
      return function(e, r)
      {
        var n, o, i = String(v(e)),
          a = st(r),
          u = i.length;
        return a < 0 || a >= u ? t ? "" : void 0 : (n = i.charCodeAt(a)) <
          55296 || n > 56319 || a + 1 === u || (o = i.charCodeAt(a + 1)) <
          56320 || o > 57343 ? t ? i.charAt(a) : n : t ? i.slice(a, a + 2) :
          o - 56320 + (n - 55296 << 10) + 65536
      }
    },
    Ie = {
      codeAt: Pe(!1),
      charAt: Pe(!0)
    },
    Te = !o(function()
    {
      function t()
      {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t) !==
        t.prototype
    }),
    ke = V("IE_PROTO"),
    Le = Object.prototype,
    Ue = Te ? Object.getPrototypeOf : function(t)
    {
      return t = Ut(t), w(t, ke) ? t[ke] : "function" == typeof t.constructor &&
        t instanceof t.constructor ? t.constructor.prototype :
        t instanceof Object ? Le : null
    },
    Me = qt("iterator"),
    _e = !1;
  [].keys && ("next" in (je = [].keys()) ? (Re = Ue(Ue(je))) !== Object
      .prototype && (Oe = Re) : _e = !0), null == Oe && (Oe = {}), w(Oe, Me) ||
    T(Oe, Me, function()
    {
      return this
    });
  var Ne = {
      IteratorPrototype: Oe,
      BUGGY_SAFARI_ITERATORS: _e
    },
    Ce = I.f,
    Fe = qt("toStringTag"),
    Be = function(t, e, r)
    {
      t && !w(t = r ? t : t.prototype, Fe) && Ce(t, Fe,
      {
        configurable: !0,
        value: e
      })
    },
    De = {},
    qe = Ne.IteratorPrototype,
    ze = function()
    {
      return this
    },
    We = function(t, e, r)
    {
      var n = e + " Iterator";
      return t.prototype = Jt(qe,
      {
        next: f(1, r)
      }), Be(t, n, !1), De[n] = ze, t
    },
    Ke = function(t)
    {
      if (!y(t) && null !== t) throw TypeError("Can't set " + String(t) +
        " as a prototype");
      return t
    },
    Ge = Object.setPrototypeOf || ("__proto__" in
    {} ? function()
    {
      var t, e = !1,
        r = {};
      try
      {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
          .set)
        .call(r, []), e = r instanceof Array
      }
      catch (t)
      {}
      return function(r, n)
      {
        return j(r), Ke(n), e ? t.call(r, n) : r.__proto__ = n, r
      }
    }() : void 0),
    $e = Ne.IteratorPrototype,
    Ve = Ne.BUGGY_SAFARI_ITERATORS,
    He = qt("iterator"),
    Xe = "keys",
    Ye = "values",
    Je = "entries",
    Qe = function()
    {
      return this
    },
    Ze = function(t, e, r, n, o, i, a)
    {
      We(r, e, n);
      var u, s, c, f = function(t)
        {
          if (t === o && v) return v;
          if (!Ve && t in p) return p[t];
          switch (t)
          {
            case Xe:
            case Ye:
            case Je:
              return function()
              {
                return new r(this, t)
              }
          }
          return function()
          {
            return new r(this)
          }
        },
        l = e + " Iterator",
        h = !1,
        p = t.prototype,
        d = p[He] || p["@@iterator"] || o && p[o],
        v = !Ve && d || f(o),
        g = "Array" == e && p.entries || d;
      if (g && (u = Ue(g.call(new t)), $e !== Object.prototype && u.next && (Ue(
          u) !== $e && (Ge ? Ge(u, $e) : "function" != typeof u[He] && T(u,
          He, Qe)), Be(u, l, !0))), o == Ye && d && d.name !== Ye && (h = !0,
          v = function()
          {
            return d.call(this)
          }), p[He] !== v && T(p, He, v), De[e] = v, o)
        if (s = {
            values: f(Ye),
            keys: i ? v : f(Xe),
            entries: f(Je)
          }, a)
          for (c in s)(Ve || h || !(c in p)) && rt(p, c, s[c]);
        else Lt(
        {
          target: e,
          proto: !0,
          forced: Ve || h
        }, s);
      return s
    },
    tr = Ie.charAt,
    er = "String Iterator",
    rr = et.set,
    nr = et.getterFor(er);
  Ze(String, "String", function(t)
  {
    rr(this,
    {
      type: er,
      string: String(t),
      index: 0
    })
  }, function()
  {
    var t, e = nr(this),
      r = e.string,
      n = e.index;
    return n >= r.length ?
    {
      value: void 0,
      done: !0
    } : (t = tr(r, n), e.index += t.length,
    {
      value: t,
      done: !1
    })
  });
  var or = function(t, e, r, n)
    {
      try
      {
        return n ? e(j(r)[0], r[1]) : e(r)
      }
      catch (e)
      {
        var o = t.return;
        throw void 0 !== o && j(o.call(t)), e
      }
    },
    ir = qt("iterator"),
    ar = Array.prototype,
    ur = function(t)
    {
      return void 0 !== t && (De.Array === t || ar[ir] === t)
    },
    sr = function(t, e, r)
    {
      var n = m(e);
      n in t ? I.f(t, n, f(0, r)) : t[n] = r
    },
    cr = {};
  cr[qt("toStringTag")] = "z";
  var fr = "[object z]" === String(cr),
    lr = qt("toStringTag"),
    hr = "Arguments" == h(function()
    {
      return arguments
    }()),
    pr = fr ? h : function(t)
    {
      var e, r, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" ==
        typeof(r = function(t, e)
        {
          try
          {
            return t[e]
          }
          catch (t)
          {}
        }(e = Object(t), lr)) ? r : hr ? h(e) : "Object" == (n = h(e)) &&
        "function" == typeof e.callee ? "Arguments" : n
    },
    dr = qt("iterator"),
    vr = function(t)
    {
      if (null != t) return t[dr] || t["@@iterator"] || De[pr(t)]
    },
    gr = function(t)
    {
      var e, r, n, o, i, a, u = Ut(t),
        s = "function" == typeof this ? this : Array,
        c = arguments.length,
        f = c > 1 ? arguments[1] : void 0,
        l = void 0 !== f,
        h = vr(u),
        p = 0;
      if (l && (f = re(f, c > 2 ? arguments[2] : void 0, 2)), null == h || s ==
        Array && ur(h))
        for (r = new s(e = ft(u.length)); e > p; p++) a = l ? f(u[p], p) : u[p],
          sr(r, p, a);
      else
        for (i = (o = h.call(u))
          .next, r = new s; !(n = i.call(o))
          .done; p++) a = l ? or(o, f, [n.value, p], !0) : n.value, sr(r, p, a);
      return r.length = p, r
    },
    yr = qt("iterator"),
    mr = !1;
  try
  {
    var br = 0,
      wr = {
        next: function()
        {
          return {
            done: !!br++
          }
        },
        return: function()
        {
          mr = !0
        }
      };
    wr[yr, ...
