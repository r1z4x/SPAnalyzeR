"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3678], {
        16463: function(e, t, n) {
            var r = n(71169);
            n.o(r, "useParams") && n.d(t, {
                useParams: function() {
                    return r.useParams
                }
            }), n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), n.o(r, "useRouter") && n.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            }), n.o(r, "useSearchParams") && n.d(t, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            })
        },
        31877: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return a.a
                }
            });
            var r = n(84080),
                a = n.n(r),
                o = {};
            for (var u in r) "default" !== u && (o[u] = (function(e) {
                return r[e]
            }).bind(0, u));
            n.d(t, o)
        },
        40905: function(e, t) {
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return u
                    },
                    isEqualNode: function() {
                        return o
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function a(e) {
                let {
                    type: t,
                    props: n
                } = e, a = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? a[o] = !!n[e] : a.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: u
                } = n;
                return u ? a.innerHTML = u.__html || "" : o && (a.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), a
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function u() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            a = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        a !== document.title && (document.title = a), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    u = Number(r.content),
                    i = [];
                for (let t = 0, n = r.previousElementSibling; t < u; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var l;
                    (null == n ? void 0 : null == (l = n.tagName) ? void 0 : l.toLowerCase()) === e && i.push(n)
                }
                let s = t.map(a).filter(e => {
                    for (let t = 0, n = i.length; t < n; t++)
                        if (o(i[t], e)) return i.splice(t, 1), !1;
                    return !0
                });
                i.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), s.forEach(e => n.insertBefore(e, r)), r.content = (u - i.length + s.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        84080: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return g
                    },
                    handleClientScriptLoad: function() {
                        return m
                    },
                    initScriptLoader: function() {
                        return _
                    }
                });
            let r = n(99920),
                a = n(41452),
                o = n(57437),
                u = r._(n(54887)),
                i = a._(n(2265)),
                l = n(36590),
                s = n(40905),
                d = n(49189),
                c = new Map,
                f = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                y = e => {
                    if (u.default.preinit) {
                        e.forEach(e => {
                            u.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                h = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: o,
                        children: u = "",
                        strategy: i = "afterInteractive",
                        onError: l,
                        stylesheets: d
                    } = e, h = n || t;
                    if (h && f.has(h)) return;
                    if (c.has(t)) {
                        f.add(h), c.get(t).then(r, l);
                        return
                    }
                    let m = () => {
                            a && a(), f.add(h)
                        },
                        _ = document.createElement("script"),
                        b = new Promise((e, t) => {
                            _.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), m()
                            }), _.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            l && l(e)
                        });
                    for (let [n, r] of(o ? (_.innerHTML = o.__html || "", m()) : u ? (_.textContent = "string" == typeof u ? u : Array.isArray(u) ? u.join("") : "", m()) : t && (_.src = t, c.set(t, b)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = s.DOMAttributeNames[n] || n.toLowerCase();
                        _.setAttribute(e, r)
                    }
                    "worker" === i && _.setAttribute("type", "text/partytown"), _.setAttribute("data-nscript", i), d && y(d), document.body.appendChild(_)
                };

            function m(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, d.requestIdleCallback)(() => h(e))
                }) : h(e)
            }

            function _(e) {
                e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function b(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: s = "afterInteractive",
                    onError: c,
                    stylesheets: p,
                    ...y
                } = e, {
                    updateScripts: m,
                    scripts: _,
                    getIsSsr: b,
                    appDir: g,
                    nonce: v
                } = (0, i.useContext)(l.HeadManagerContext), E = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    let e = t || n;
                    E.current || (a && e && f.has(e) && a(), E.current = !0)
                }, [a, t, n]);
                let S = (0, i.useRef)(!1);
                if ((0, i.useEffect)(() => {
                        !S.current && ("afterInteractive" === s ? h(e) : "lazyOnload" === s && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                            (0, d.requestIdleCallback)(() => h(e))
                        })), S.current = !0)
                    }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (m ? (_[s] = (_[s] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: c,
                        ...y
                    }]), m(_)) : b && b() ? f.add(t || n) : b && !b() && h(e)), g) {
                    if (p && p.forEach(e => {
                            u.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === s) return n ? (u.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v
                    } : {
                        as: "script",
                        nonce: v
                    }), (0, o.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, {
                                ...y,
                                id: t
                            }]) + ")"
                        }
                    })) : (y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...y,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === s && n && u.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v
                    } : {
                        as: "script",
                        nonce: v
                    })
                }
                return null
            }
            Object.defineProperty(b, "__nextScript", {
                value: !0
            });
            let g = b;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);