(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51], {
        20357: function(e, t, n) {
            "use strict";
            var s, r;
            e.exports = (null == (s = n.g.process) ? void 0 : s.env) && "object" == typeof(null == (r = n.g.process) ? void 0 : r.env) ? n.g.process : n(88081)
        },
        88081: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, n, s, r = e.exports = {};

                            function o() {
                                throw Error("setTimeout has not been defined")
                            }

                            function i() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : o
                                } catch (e) {
                                    t = o
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : i
                                } catch (e) {
                                    n = i
                                }
                            }();
                            var c = [],
                                l = !1,
                                u = -1;

                            function d() {
                                l && s && (l = !1, s.length ? c = s.concat(c) : u = -1, c.length && f())
                            }

                            function f() {
                                if (!l) {
                                    var e = a(d);
                                    l = !0;
                                    for (var t = c.length; t;) {
                                        for (s = c, c = []; ++u < t;) s && s[u].run();
                                        u = -1, t = c.length
                                    }
                                    s = null, l = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function h(e, t) {
                                this.fun = e, this.array = t
                            }

                            function p() {}
                            r.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                c.push(new h(e, t)), 1 !== c.length || l || a(f)
                            }, h.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                                return []
                            }, r.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, r.cwd = function() {
                                return "/"
                            }, r.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, r.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function s(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var o = n[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](o, o.exports, s), i = !1
                    } finally {
                        i && delete n[e]
                    }
                    return o.exports
                }
                s.ab = "//";
                var r = s(229);
                e.exports = r
            }()
        },
        30051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SessionContext: function() {
                    return en
                },
                SessionProvider: function() {
                    return el
                },
                __NEXTAUTH: function() {
                    return Y
                },
                getCsrfToken: function() {
                    return eo
                },
                getProviders: function() {
                    return ei
                },
                getSession: function() {
                    return er
                },
                signIn: function() {
                    return ea
                },
                signOut: function() {
                    return ec
                },
                useSession: function() {
                    return es
                }
            });
            var s, r, o, i, a, c = n(57437),
                l = n(2265),
                u = n.t(l, 2);
            class d extends Error {
                constructor(e, t) {
                    e instanceof Error ? super(void 0, {
                        cause: {
                            err: e,
                            ...e.cause,
                            ...t
                        }
                    }) : "string" == typeof e ? (t instanceof Error && (t = {
                        err: t,
                        ...t.cause
                    }), super(e, t)) : super(void 0, e), this.name = this.constructor.name, this.type = this.constructor.type ?? "AuthError", this.kind = this.constructor.kind ?? "error", Error.captureStackTrace?.(this, this.constructor);
                    let n = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
                    this.message += `${this.message?". ":""}Read more at ${n}`
                }
            }
            class f extends d {}
            f.kind = "signIn";
            class h extends d {}
            h.type = "AdapterError";
            class p extends d {}
            p.type = "AccessDenied";
            class v extends d {}
            v.type = "CallbackRouteError";
            class g extends d {}
            g.type = "ErrorPageLoop";
            class y extends d {}
            y.type = "EventError";
            class w extends d {}
            w.type = "InvalidCallbackUrl";
            class m extends f {
                constructor() {
                    super(...arguments), this.code = "credentials"
                }
            }
            m.type = "CredentialsSignin";
            class E extends d {}
            E.type = "InvalidEndpoints";
            class x extends d {}
            x.type = "InvalidCheck";
            class S extends d {}
            S.type = "JWTSessionError";
            class b extends d {}
            b.type = "MissingAdapter";
            class T extends d {}
            T.type = "MissingAdapterMethods";
            class L extends d {}
            L.type = "MissingAuthorize";
            class _ extends d {}
            _.type = "MissingSecret";
            class U extends f {}
            U.type = "OAuthAccountNotLinked";
            class R extends f {}
            R.type = "OAuthCallbackError";
            class k extends d {}
            k.type = "OAuthProfileParseError";
            class A extends d {}
            A.type = "SessionTokenError";
            class C extends f {}
            C.type = "OAuthSignInError";
            class P extends f {}
            P.type = "EmailSignInError";
            class N extends d {}
            N.type = "SignOutError";
            class I extends d {}
            I.type = "UnknownAction";
            class M extends d {}
            M.type = "UnsupportedStrategy";
            class O extends d {}
            O.type = "InvalidProvider";
            class X extends d {}
            X.type = "UntrustedHost";
            class H extends d {}
            H.type = "Verification";
            class j extends f {}
            j.type = "MissingCSRF";
            class W extends d {}
            W.type = "DuplicateConditionalUI";
            class V extends d {}
            V.type = "MissingWebAuthnAutocomplete";
            class $ extends d {}
            $.type = "WebAuthnVerificationError";
            class D extends f {}
            D.type = "AccountNotLinked";
            class F extends d {}
            F.type = "ExperimentalFeatureNotEnabled";
            class B extends d {}
            class J extends d {}
            async function q(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = "".concat(z(t), "/").concat(e);
                try {
                    var o;
                    let e = {
                        headers: {
                            "Content-Type": "application/json",
                            ...(null == s ? void 0 : null === (o = s.headers) || void 0 === o ? void 0 : o.cookie) ? {
                                cookie: s.headers.cookie
                            } : {}
                        }
                    };
                    (null == s ? void 0 : s.body) && (e.body = JSON.stringify(s.body), e.method = "POST");
                    let t = await fetch(r, e),
                        n = await t.json();
                    if (!t.ok) throw n;
                    return n
                } catch (e) {
                    return n.error(new B(e.message, e)), null
                }
            }

            function z(e) {
                return "undefined" == typeof window ? "".concat(e.baseUrlServer).concat(e.basePathServer) : e.basePath
            }

            function G() {
                return Math.floor(Date.now() / 1e3)
            }

            function K(e) {
                let t = new URL("http://localhost:3000/api/auth");
                e && !e.startsWith("http") && (e = "https://".concat(e));
                let n = new URL(e || t),
                    s = ("/" === n.pathname ? t.pathname : n.pathname).replace(/\/$/, ""),
                    r = "".concat(n.origin).concat(s);
                return {
                    origin: n.origin,
                    host: n.host,
                    path: s,
                    base: r,
                    toString: () => r
                }
            }
            var Q = n(20357);
            let Y = {
                    baseUrl: K(null !== (r = Q.env.NEXTAUTH_URL) && void 0 !== r ? r : Q.env.VERCEL_URL).origin,
                    basePath: K(Q.env.NEXTAUTH_URL).path,
                    baseUrlServer: K(null !== (i = null !== (o = Q.env.NEXTAUTH_URL_INTERNAL) && void 0 !== o ? o : Q.env.NEXTAUTH_URL) && void 0 !== i ? i : Q.env.VERCEL_URL).origin,
                    basePathServer: K(null !== (a = Q.env.NEXTAUTH_URL_INTERNAL) && void 0 !== a ? a : Q.env.NEXTAUTH_URL).path,
                    _lastSync: 0,
                    _session: void 0,
                    _getSession: () => {}
                },
                Z = null;

            function ee() {
                return "undefined" == typeof BroadcastChannel ? {
                    postMessage: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {}
                } : (null === Z && (Z = new BroadcastChannel("next-auth")), Z)
            }
            let et = {
                    debug: console.debug,
                    error: console.error,
                    warn: console.warn
                },
                en = null === (s = l.createContext) || void 0 === s ? void 0 : s.call(u, void 0);

            function es(e) {
                if (!en) throw Error("React Context is unavailable in Server Components");
                let t = l.useContext(en),
                    {
                        required: n,
                        onUnauthenticated: s
                    } = null != e ? e : {},
                    r = n && "unauthenticated" === t.status;
                return (l.useEffect(() => {
                    if (r) {
                        let e = "".concat(Y.basePath, "/signin?").concat(new URLSearchParams({
                            error: "SessionRequired",
                            callbackUrl: window.location.href
                        }));
                        s ? s() : window.location.href = e
                    }
                }, [r, s]), r) ? {
                    data: t.data,
                    update: t.update,
                    status: "loading"
                } : t
            }
            async function er(e) {
                var t;
                let n = await q("session", Y, et, e);
                return (null === (t = null == e ? void 0 : e.broadcast) || void 0 === t || t) && ee().postMessage({
                    event: "session",
                    data: {
                        trigger: "getSession"
                    }
                }), n
            }
            async function eo() {
                var e;
                let t = await q("csrf", Y, et);
                return null !== (e = null == t ? void 0 : t.csrfToken) && void 0 !== e ? e : ""
            }
            async function ei() {
                return q("providers", Y, et)
            }
            async function ea(e, t, n) {
                let {
                    callbackUrl: s = window.location.href,
                    redirect: r = !0
                } = null != t ? t : {}, o = z(Y), i = await ei();
                if (!i) {
                    window.location.href = "".concat(o, "/error");
                    return
                }
                if (!e || !(e in i)) {
                    window.location.href = "".concat(o, "/signin?").concat(new URLSearchParams({
                        callbackUrl: s
                    }));
                    return
                }
                let a = "credentials" === i[e].type,
                    c = "email" === i[e].type,
                    l = "".concat(o, "/").concat(a ? "callback" : "signin", "/").concat(e),
                    u = await eo(),
                    d = await fetch("".concat(l, "?").concat(new URLSearchParams(n)), {
                        method: "post",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Auth-Return-Redirect": "1"
                        },
                        body: new URLSearchParams({
                            ...t,
                            csrfToken: u,
                            callbackUrl: s
                        })
                    }),
                    f = await d.json();
                if (r || !(a || c)) {
                    var h;
                    let e = null !== (h = f.url) && void 0 !== h ? h : s;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                let p = new URL(f.url).searchParams.get("error"),
                    v = new URL(f.url).searchParams.get("code");
                return d.ok && await Y._getSession({
                    event: "storage"
                }), {
                    error: p,
                    code: v,
                    status: d.status,
                    ok: d.ok,
                    url: p ? null : f.url
                }
            }
            async function ec(e) {
                var t, n;
                let {
                    callbackUrl: s = window.location.href
                } = null != e ? e : {}, r = z(Y), o = await eo(), i = await fetch("".concat(r, "/signout"), {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Auth-Return-Redirect": "1"
                    },
                    body: new URLSearchParams({
                        csrfToken: o,
                        callbackUrl: s
                    })
                }), a = await i.json();
                if (ee().postMessage({
                        event: "session",
                        data: {
                            trigger: "signout"
                        }
                    }), null === (t = null == e ? void 0 : e.redirect) || void 0 === t || t) {
                    let e = null !== (n = a.url) && void 0 !== n ? n : s;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                return await Y._getSession({
                    event: "storage"
                }), a
            }

            function el(e) {
                if (!en) throw Error("React Context is unavailable in Server Components");
                let {
                    children: t,
                    basePath: n,
                    refetchInterval: s,
                    refetchWhenOffline: r
                } = e;
                n && (Y.basePath = n);
                let o = void 0 !== e.session;
                Y._lastSync = o ? G() : 0;
                let [i, a] = l.useState(() => (o && (Y._session = e.session), e.session)), [u, d] = l.useState(!o);
                l.useEffect(() => (Y._getSession = async function() {
                    let {
                        event: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        let t = "storage" === e;
                        if (t || void 0 === Y._session) {
                            Y._lastSync = G(), Y._session = await er({
                                broadcast: !t
                            }), a(Y._session);
                            return
                        }
                        if (!e || null === Y._session || G() < Y._lastSync) return;
                        Y._lastSync = G(), Y._session = await er(), a(Y._session)
                    } catch (e) {
                        et.error(new J(e.message, e))
                    } finally {
                        d(!1)
                    }
                }, Y._getSession(), () => {
                    Y._lastSync = 0, Y._session = void 0, Y._getSession = () => {}
                }), []), l.useEffect(() => {
                    let e = () => Y._getSession({
                        event: "storage"
                    });
                    return ee().addEventListener("message", e), () => ee().removeEventListener("message", e)
                }, []), l.useEffect(() => {
                    let {
                        refetchOnWindowFocus: t = !0
                    } = e, n = () => {
                        t && "visible" === document.visibilityState && Y._getSession({
                            event: "visibilitychange"
                        })
                    };
                    return document.addEventListener("visibilitychange", n, !1), () => document.removeEventListener("visibilitychange", n, !1)
                }, [e.refetchOnWindowFocus]);
                let f = function() {
                        let [e, t] = l.useState("undefined" != typeof navigator && navigator.onLine), n = () => t(!0), s = () => t(!1);
                        return l.useEffect(() => (window.addEventListener("online", n), window.addEventListener("offline", s), () => {
                            window.removeEventListener("online", n), window.removeEventListener("offline", s)
                        }), []), e
                    }(),
                    h = !1 !== r || f;
                l.useEffect(() => {
                    if (s && h) {
                        let e = setInterval(() => {
                            Y._session && Y._getSession({
                                event: "poll"
                            })
                        }, 1e3 * s);
                        return () => clearInterval(e)
                    }
                }, [s, h]);
                let p = l.useMemo(() => ({
                    data: i,
                    status: u ? "loading" : i ? "authenticated" : "unauthenticated",
                    async update(e) {
                        if (u || !i) return;
                        d(!0);
                        let t = await q("session", Y, et, void 0 === e ? void 0 : {
                            body: {
                                csrfToken: await eo(),
                                data: e
                            }
                        });
                        return d(!1), t && (a(t), ee().postMessage({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        })), t
                    }
                }), [i, u]);
                return (0, c.jsx)(en.Provider, {
                    value: p,
                    children: t
                })
            }
        }
    }
]);