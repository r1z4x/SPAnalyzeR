"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [804], {
        907: function(e, t, r) {
            r.d(t, {
                Gr: function() {
                    return ew
                },
                Ny: function() {
                    return eT
                },
                SS: function() {
                    return eC
                },
                aS: function() {
                    return eF
                }
            });
            var i, s, n = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
                a = {
                    revert: function() {}
                },
                c = new Map,
                u = new Set;

            function o(e) {
                var t = c.get(e);
                return t || (t = {
                    element: e,
                    attributes: {}
                }, c.set(e, t)), t
            }

            function l(e, t, r, i, s) {
                var n = r(e),
                    a = {
                        isDirty: !1,
                        originalValue: n,
                        virtualValue: n,
                        mutations: [],
                        el: e,
                        _positionTimeout: null,
                        observer: new MutationObserver(function() {
                            if ("position" !== t || !a._positionTimeout) {
                                "position" === t && (a._positionTimeout = setTimeout(function() {
                                    a._positionTimeout = null
                                }, 1e3));
                                var i = r(e);
                                ("position" !== t || i.parentNode !== a.virtualValue.parentNode || i.insertBeforeNode !== a.virtualValue.insertBeforeNode) && i !== a.virtualValue && (a.originalValue = i, s(a))
                            }
                        }),
                        mutationRunner: s,
                        setValue: i,
                        getCurrentValue: r
                    };
                return "position" === t && e.parentNode ? a.observer.observe(e.parentNode, {
                    childList: !0,
                    subtree: !0,
                    attributes: !1,
                    characterData: !1
                }) : a.observer.observe(e, "html" === t ? {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    characterData: !0
                } : {
                    childList: !1,
                    subtree: !1,
                    attributes: !0,
                    attributeFilter: [t]
                }), a
            }

            function h(e, t) {
                var r = t.getCurrentValue(t.el);
                t.virtualValue = e, e && "string" != typeof e ? r && e.parentNode === r.parentNode && e.insertBeforeNode === r.insertBeforeNode || (t.isDirty = !0, C()) : e !== r && (t.isDirty = !0, C())
            }

            function d(e) {
                var t, r = e.originalValue;
                e.mutations.forEach(function(e) {
                    return r = e.mutate(r)
                }), h((t = r, i || (i = document.createElement("div")), i.innerHTML = t, i.innerHTML), e)
            }

            function f(e) {
                var t = new Set(e.originalValue.split(/\s+/).filter(Boolean));
                e.mutations.forEach(function(e) {
                    return e.mutate(t)
                }), h(Array.from(t).filter(Boolean).join(" "), e)
            }

            function p(e) {
                var t = e.originalValue;
                e.mutations.forEach(function(e) {
                    return t = e.mutate(t)
                }), h(t, e)
            }

            function g(e) {
                var t = e.originalValue;
                e.mutations.forEach(function(e) {
                    t = function(e) {
                        var t = e.parentSelector,
                            r = e.insertBeforeSelector,
                            i = document.querySelector(t);
                        if (!i) return null;
                        var s = r ? document.querySelector(r) : null;
                        return r && !s ? null : {
                            parentNode: i,
                            insertBeforeNode: s
                        }
                    }(e.mutate()) || t
                }), h(t, e)
            }
            var _ = function(e) {
                    return e.innerHTML
                },
                m = function(e, t) {
                    return e.innerHTML = t
                };

            function y(e) {
                var t = o(e);
                return t.html || (t.html = l(e, "html", _, m, d)), t.html
            }
            var k = function(e) {
                    return {
                        parentNode: e.parentElement,
                        insertBeforeNode: e.nextElementSibling
                    }
                },
                v = function(e, t) {
                    (!t.insertBeforeNode || t.parentNode.contains(t.insertBeforeNode)) && t.parentNode.insertBefore(e, t.insertBeforeNode)
                };

            function b(e) {
                var t = o(e);
                return t.position || (t.position = l(e, "position", k, v, g)), t.position
            }
            var x = function(e, t) {
                    return t ? e.className = t : e.removeAttribute("class")
                },
                A = function(e) {
                    return e.className
                };

            function E(e) {
                var t = o(e);
                return t.classes || (t.classes = l(e, "class", A, x, f)), t.classes
            }

            function w(e, t) {
                var r = o(e);
                return r.attributes[t] || (r.attributes[t] = l(e, t, function(e) {
                    var r;
                    return null != (r = e.getAttribute(t)) ? r : null
                }, function(e, r) {
                    return null !== r ? e.setAttribute(t, r) : e.removeAttribute(t)
                }, p)), r.attributes[t]
            }

            function S(e, t, r) {
                if (r.isDirty) {
                    r.isDirty = !1;
                    var i, s, n, a, u, o, l, h, d, f, p = r.virtualValue;
                    !r.mutations.length && (f = c.get(e)) && ("html" === t ? (null == (i = f.html) || null == (s = i.observer) || s.disconnect(), delete f.html) : "class" === t ? (null == (n = f.classes) || null == (a = n.observer) || a.disconnect(), delete f.classes) : "position" === t ? (null == (u = f.position) || null == (o = u.observer) || o.disconnect(), delete f.position) : (null == (l = f.attributes) || null == (h = l[t]) || null == (d = h.observer) || d.disconnect(), delete f.attributes[t])), r.setValue(e, p)
                }
            }

            function B(e, t) {
                e.html && S(t, "html", e.html), e.classes && S(t, "class", e.classes), e.position && S(t, "position", e.position), Object.keys(e.attributes).forEach(function(r) {
                    S(t, r, e.attributes[r])
                })
            }

            function C() {
                c.forEach(B)
            }

            function F(e) {
                if ("position" !== e.kind || 1 !== e.elements.size) {
                    var t = new Set(e.elements);
                    document.querySelectorAll(e.selector).forEach(function(r) {
                        if (!t.has(r)) {
                            var i;
                            e.elements.add(r), i = null, "html" === e.kind ? i = y(r) : "class" === e.kind ? i = E(r) : "attribute" === e.kind ? i = w(r, e.attribute) : "position" === e.kind && (i = b(r)), i && (i.mutations.push(e), i.mutationRunner(i))
                        }
                    })
                }
            }

            function R() {
                u.forEach(F)
            }

            function T(e) {
                return "undefined" == typeof document ? a : (u.add(e), F(e), {
                    revert: function() {
                        e.elements.forEach(function(t) {
                            return function(e, t) {
                                var r = null;
                                if ("html" === e.kind ? r = y(t) : "class" === e.kind ? r = E(t) : "attribute" === e.kind ? r = w(t, e.attribute) : "position" === e.kind && (r = b(t)), r) {
                                    var i = r.mutations.indexOf(e); - 1 !== i && r.mutations.splice(i, 1), r.mutationRunner(r)
                                }
                            }(e, t)
                        }), e.elements.clear(), u.delete(e)
                    }
                })
            }

            function V(e, t) {
                return T({
                    kind: "html",
                    elements: new Set,
                    mutate: t,
                    selector: e
                })
            }

            function O(e, t) {
                return T({
                    kind: "class",
                    elements: new Set,
                    mutate: t,
                    selector: e
                })
            }

            function I(e, t, r) {
                return n.test(t) ? "class" === t || "className" === t ? O(e, function(e) {
                    var t = r(Array.from(e).join(" "));
                    e.clear(), t && t.split(/\s+/g).filter(Boolean).forEach(function(t) {
                        return e.add(t)
                    })
                }) : T({
                    kind: "attribute",
                    attribute: t,
                    elements: new Set,
                    mutate: r,
                    selector: e
                }) : a
            }
            "undefined" != typeof document && (s || (s = new MutationObserver(function() {
                R()
            })), R(), s.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !1,
                characterData: !1
            }));
            var N = {
                declarative: function(e) {
                    var t, r = e.selector,
                        i = e.action,
                        s = e.value,
                        n = e.attribute,
                        c = e.parentSelector,
                        u = e.insertBeforeSelector;
                    if ("html" === n) {
                        if ("append" === i) return V(r, function(e) {
                            return e + (null != s ? s : "")
                        });
                        if ("set" === i) return V(r, function() {
                            return null != s ? s : ""
                        })
                    } else if ("class" === n) {
                        if ("append" === i) return O(r, function(e) {
                            s && e.add(s)
                        });
                        if ("remove" === i) return O(r, function(e) {
                            s && e.delete(s)
                        });
                        if ("set" === i) return O(r, function(e) {
                            e.clear(), s && e.add(s)
                        })
                    } else if ("position" === n) {
                        if ("set" === i && c) return t = function() {
                            return {
                                insertBeforeSelector: u,
                                parentSelector: c
                            }
                        }, T({
                            kind: "position",
                            elements: new Set,
                            mutate: t,
                            selector: r
                        })
                    } else {
                        if ("append" === i) return I(r, n, function(e) {
                            return null !== e ? e + (null != s ? s : "") : null != s ? s : ""
                        });
                        if ("set" === i) return I(r, n, function() {
                            return null != s ? s : ""
                        });
                        if ("remove" === i) return I(r, n, function() {
                            return null
                        })
                    }
                    return a
                }
            };
            let D = {
                fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
                SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
                EventSource: globalThis.EventSource
            };

            function K(e) {
                let t = 2166136261,
                    r = e.length;
                for (let i = 0; i < r; i++) t ^= e.charCodeAt(i), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                return t >>> 0
            }

            function M(e, t, r) {
                return 2 === r ? K(K(e + t) + "") % 1e4 / 1e4 : 1 === r ? K(t + e) % 1e3 / 1e3 : null
            }

            function $(e, t) {
                return e >= t[0] && e < t[1]
            }

            function P(e) {
                try {
                    let t = e.replace(/([^\\])\//g, "$1\\/");
                    return new RegExp(t)
                } catch (e) {
                    console.error(e);
                    return
                }
            }

            function U(e, t) {
                if (!t.length) return !1;
                let r = !1,
                    i = !1;
                for (let s = 0; s < t.length; s++) {
                    let n = function(e, t, r) {
                        try {
                            let i = new URL(e, "https://_");
                            if ("regex" === t) {
                                let e = P(r);
                                if (!e) return !1;
                                return e.test(i.href) || e.test(i.href.substring(i.origin.length))
                            }
                            if ("simple" === t) return function(e, t) {
                                try {
                                    let r = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
                                        i = [
                                            [e.host, r.host, !1],
                                            [e.pathname, r.pathname, !0]
                                        ];
                                    return r.hash && i.push([e.hash, r.hash, !1]), r.searchParams.forEach((t, r) => {
                                        i.push([e.searchParams.get(r) || "", t, !1])
                                    }), !i.some(e => ! function(e, t, r) {
                                        try {
                                            let i = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
                                            return r && (i = "\\/?" + i.replace(/(^\/|\/$)/g, "") + "\\/?"), RegExp("^" + i + "$", "i").test(e)
                                        } catch (e) {
                                            return !1
                                        }
                                    }(e[0], e[1], e[2]))
                                } catch (e) {
                                    return !1
                                }
                            }(i, r);
                            return !1
                        } catch (e) {
                            return !1
                        }
                    }(e, t[s].type, t[s].pattern);
                    if (!1 === t[s].include) {
                        if (n) return !1
                    } else r = !0, n && (i = !0)
                }
                return i || !r
            }
            let L = e => Uint8Array.from(atob(e), e => e.charCodeAt(0));
            async function H(e, t, r) {
                if (t = t || "", !(r = r || globalThis.crypto && globalThis.crypto.subtle || D.SubtleCrypto)) throw Error("No SubtleCrypto implementation found");
                try {
                    let i = await r.importKey("raw", L(t), {
                            name: "AES-CBC",
                            length: 128
                        }, !0, ["encrypt", "decrypt"]),
                        [s, n] = e.split("."),
                        a = await r.decrypt({
                            name: "AES-CBC",
                            iv: L(s)
                        }, i, L(n));
                    return new TextDecoder().decode(a)
                } catch (e) {
                    throw Error("Failed to decrypt")
                }
            }

            function j(e) {
                return "string" == typeof e ? e : JSON.stringify(e)
            }

            function J(e) {
                "number" == typeof e && (e += ""), e && "string" == typeof e || (e = "0");
                let t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
                return 3 === t.length && t.push("~"), t.map(e => e.match(/^[0-9]+$/) ? e.padStart(5, " ") : e).join("-")
            }

            function q(e) {
                return "object" == typeof e && null !== e
            }

            function G(e) {
                return e.urlPatterns && e.variations.some(e => q(e) && "urlRedirect" in e) ? "redirect" : e.variations.some(e => q(e) && (e.domMutations || "js" in e || "css" in e)) ? "visual" : "unknown"
            }
            let z = {};

            function Q(e, t, r) {
                for (let [i, s] of(r = r || {}, Object.entries(t))) switch (i) {
                    case "$or":
                        if (!X(e, s, r)) return !1;
                        break;
                    case "$nor":
                        if (X(e, s, r)) return !1;
                        break;
                    case "$and":
                        if (! function(e, t, r) {
                                for (let i = 0; i < t.length; i++)
                                    if (!Q(e, t[i], r)) return !1;
                                return !0
                            }(e, s, r)) return !1;
                        break;
                    case "$not":
                        if (Q(e, s, r)) return !1;
                        break;
                    default:
                        if (! function e(t, r, i) {
                                if ("string" == typeof t) return r + "" === t;
                                if ("number" == typeof t) return 1 * r === t;
                                if ("boolean" == typeof t) return !!r === t;
                                if (null === t) return null === r;
                                if (Array.isArray(t) || !Z(t)) return JSON.stringify(r) === JSON.stringify(t);
                                for (let s in t)
                                    if (! function(t, r, i, s) {
                                            switch (t) {
                                                case "$veq":
                                                    return J(r) === J(i);
                                                case "$vne":
                                                    return J(r) !== J(i);
                                                case "$vgt":
                                                    return J(r) > J(i);
                                                case "$vgte":
                                                    return J(r) >= J(i);
                                                case "$vlt":
                                                    return J(r) < J(i);
                                                case "$vlte":
                                                    return J(r) <= J(i);
                                                case "$eq":
                                                    return r === i;
                                                case "$ne":
                                                    return r !== i;
                                                case "$lt":
                                                    return r < i;
                                                case "$lte":
                                                    return r <= i;
                                                case "$gt":
                                                    return r > i;
                                                case "$gte":
                                                    return r >= i;
                                                case "$exists":
                                                    return i ? null != r : null == r;
                                                case "$in":
                                                    if (!Array.isArray(i)) return !1;
                                                    return W(r, i);
                                                case "$inGroup":
                                                    return W(r, s[i] || []);
                                                case "$notInGroup":
                                                    return !W(r, s[i] || []);
                                                case "$nin":
                                                    if (!Array.isArray(i)) return !1;
                                                    return !W(r, i);
                                                case "$not":
                                                    return !e(i, r, s);
                                                case "$size":
                                                    if (!Array.isArray(r)) return !1;
                                                    return e(i, r.length, s);
                                                case "$elemMatch":
                                                    return function(t, r, i) {
                                                        if (!Array.isArray(t)) return !1;
                                                        let s = Z(r) ? t => e(r, t, i) : e => Q(e, r, i);
                                                        for (let e = 0; e < t.length; e++)
                                                            if (t[e] && s(t[e])) return !0;
                                                        return !1
                                                    }(r, i, s);
                                                case "$all":
                                                    if (!Array.isArray(r)) return !1;
                                                    for (let t = 0; t < i.length; t++) {
                                                        let n = !1;
                                                        for (let a = 0; a < r.length; a++)
                                                            if (e(i[t], r[a], s)) {
                                                                n = !0;
                                                                break
                                                            } if (!n) return !1
                                                    }
                                                    return !0;
                                                case "$regex":
                                                    try {
                                                        return (z[i] || (z[i] = new RegExp(i.replace(/([^\\])\//g, "$1\\/"))), z[i]).test(r)
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                case "$type":
                                                    return function(e) {
                                                        if (null === e) return "null";
                                                        if (Array.isArray(e)) return "array";
                                                        let t = typeof e;
                                                        return ["string", "number", "boolean", "object", "undefined"].includes(t) ? t : "unknown"
                                                    }(r) === i;
                                                default:
                                                    return console.error("Unknown operator: " + t), !1
                                            }
                                        }(s, r, t[s], i)) return !1;
                                return !0
                            }(s, function(e, t) {
                                let r = t.split("."),
                                    i = e;
                                for (let e = 0; e < r.length; e++) {
                                    if (!i || "object" != typeof i || !(r[e] in i)) return null;
                                    i = i[r[e]]
                                }
                                return i
                            }(e, i), r)) return !1
                }
                return !0
            }

            function Z(e) {
                let t = Object.keys(e);
                return t.length > 0 && t.filter(e => "$" === e[0]).length === t.length
            }

            function W(e, t) {
                return Array.isArray(e) ? e.some(e => t.includes(e)) : t.includes(e)
            }

            function X(e, t, r) {
                if (!t.length) return !0;
                for (let i = 0; i < t.length; i++)
                    if (Q(e, t[i], r)) return !0;
                return !1
            }
            let Y = {
                    staleTTL: 6e4,
                    maxAge: 864e5,
                    cacheKey: "gbFeaturesCache",
                    backgroundSync: !0,
                    maxEntries: 10,
                    disableIdleStreams: !1,
                    idleStreamInterval: 2e4,
                    disableCache: !1
                },
                ee = {
                    fetchFeaturesCall: e => {
                        let {
                            host: t,
                            clientKey: r,
                            headers: i
                        } = e;
                        return D.fetch("".concat(t, "/api/features/").concat(r), {
                            headers: i
                        })
                    },
                    fetchRemoteEvalCall: e => {
                        let {
                            host: t,
                            clientKey: r,
                            payload: i,
                            headers: s
                        } = e, n = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                ...s
                            },
                            body: JSON.stringify(i)
                        };
                        return D.fetch("".concat(t, "/api/eval/").concat(r), n)
                    },
                    eventSourceCall: e => {
                        let {
                            host: t,
                            clientKey: r,
                            headers: i
                        } = e;
                        return i ? new D.EventSource("".concat(t, "/sub/").concat(r), {
                            headers: i
                        }) : new D.EventSource("".concat(t, "/sub/").concat(r))
                    },
                    startIdleListener: () => {
                        let e;
                        if (!("undefined" != typeof window && "undefined" != typeof document)) return;
                        let t = () => {
                            "visible" === document.visibilityState ? (window.clearTimeout(e), en.forEach(e => {
                                e && "idle" === e.state && ex(e)
                            })) : "hidden" === document.visibilityState && (e = window.setTimeout(eo, Y.idleStreamInterval))
                        };
                        return document.addEventListener("visibilitychange", t), () => document.removeEventListener("visibilitychange", t)
                    },
                    stopIdleListener: () => {}
                };
            try {
                globalThis.localStorage && (D.localStorage = globalThis.localStorage)
            } catch (e) {}
            let et = new Map,
                er = !1,
                ei = new Map,
                es = new Map,
                en = new Map,
                ea = new Set;
            async function ec(e) {
                let {
                    instance: t,
                    timeout: r,
                    skipCache: i,
                    allowStale: s,
                    backgroundSync: n
                } = e;
                return n || (Y.backgroundSync = !1), eh({
                    instance: t,
                    allowStale: s,
                    timeout: r,
                    skipCache: i
                })
            }

            function eu(e) {
                let t = ed(e),
                    r = et.get(t) || new Set;
                r.add(e), et.set(t, r)
            }

            function eo() {
                en.forEach(e => {
                    e && (e.state = "idle", eb(e))
                })
            }
            async function el() {
                try {
                    if (!D.localStorage) return;
                    await D.localStorage.setItem(Y.cacheKey, JSON.stringify(Array.from(ei.entries())))
                } catch (e) {}
            }
            async function eh(e) {
                var t;
                let {
                    instance: r,
                    allowStale: i,
                    timeout: s,
                    skipCache: n
                } = e, a = ed(r), c = ef(r), u = new Date, o = new Date(u.getTime() - Y.maxAge + Y.staleTTL);
                await ep();
                let l = Y.disableCache || n ? void 0 : ei.get(c);
                return l && (i || l.staleAt > u) && l.staleAt > o ? (l.sse && ea.add(a), l.staleAt < u ? ey(r) : ek(r), {
                    data: l.data,
                    success: !0,
                    source: "cache"
                }) : await (t = ey(r), new Promise(e => {
                    let r, i = !1,
                        n = t => {
                            i || (i = !0, r && clearTimeout(r), e(t || null))
                        };
                    s && (r = setTimeout(() => n(), s)), t.then(e => n(e)).catch(() => n())
                })) || {
                    data: null,
                    success: !1,
                    source: "timeout",
                    error: Error("Timeout")
                }
            }

            function ed(e) {
                let [t, r] = e.getApiInfo();
                return "".concat(t, "||").concat(r)
            }

            function ef(e) {
                let t = ed(e);
                if (!e.isRemoteEval()) return t;
                let r = e.getAttributes(),
                    i = e.getCacheKeyAttributes() || Object.keys(e.getAttributes()),
                    s = {};
                i.forEach(e => {
                    s[e] = r[e]
                });
                let n = e.getForcedVariations(),
                    a = e.getUrl();
                return "".concat(t, "||").concat(JSON.stringify({
                    ca: s,
                    fv: n,
                    url: a
                }))
            }
            async function ep() {
                if (!er) {
                    er = !0;
                    try {
                        if (D.localStorage) {
                            let e = await D.localStorage.getItem(Y.cacheKey);
                            if (!Y.disableCache && e) {
                                let t = JSON.parse(e);
                                t && Array.isArray(t) && t.forEach(e => {
                                    let [t, r] = e;
                                    ei.set(t, {
                                        ...r,
                                        staleAt: new Date(r.staleAt)
                                    })
                                }), eg()
                            }
                        }
                    } catch (e) {}
                    if (!Y.disableIdleStreams) {
                        let e = ee.startIdleListener();
                        e && (ee.stopIdleListener = e)
                    }
                }
            }

            function eg() {
                let e = Array.from(ei.entries()).map(e => {
                        let [t, r] = e;
                        return {
                            key: t,
                            staleAt: r.staleAt.getTime()
                        }
                    }).sort((e, t) => e.staleAt - t.staleAt),
                    t = Math.min(Math.max(0, ei.size - Y.maxEntries), ei.size);
                for (let r = 0; r < t; r++) ei.delete(e[r].key)
            }

            function e_(e, t, r) {
                let i = r.dateUpdated || "",
                    s = new Date(Date.now() + Y.staleTTL),
                    n = Y.disableCache ? void 0 : ei.get(t);
                if (n && i && n.version === i) {
                    n.staleAt = s, el();
                    return
                }
                Y.disableCache || (ei.set(t, {
                    data: r,
                    version: i,
                    staleAt: s,
                    sse: ea.has(e)
                }), eg()), el();
                let a = et.get(e);
                a && a.forEach(e => em(e, r))
            }
            async function em(e, t) {
                await e.setPayload(t || e.getPayload())
            }
            async function ey(e) {
                let {
                    apiHost: t,
                    apiRequestHeaders: r
                } = e.getApiHosts(), i = e.getClientKey(), s = e.isRemoteEval(), n = ed(e), a = ef(e), c = es.get(a);
                return c || (c = (s ? ee.fetchRemoteEvalCall({
                    host: t,
                    clientKey: i,
                    payload: {
                        attributes: e.getAttributes(),
                        forcedVariations: e.getForcedVariations(),
                        forcedFeatures: Array.from(e.getForcedFeatures().entries()),
                        url: e.getUrl()
                    },
                    headers: r
                }) : ee.fetchFeaturesCall({
                    host: t,
                    clientKey: i,
                    headers: r
                })).then(e => {
                    if (!e.ok) throw Error("HTTP error: ".concat(e.status));
                    return "enabled" === e.headers.get("x-sse-support") && ea.add(n), e.json()
                }).then(t => (e_(n, a, t), ek(e), es.delete(a), {
                    data: t,
                    success: !0,
                    source: "network"
                })).catch(e => (es.delete(a), {
                    data: null,
                    source: "error",
                    success: !1,
                    error: e
                })), es.set(a, c)), c
            }

            function ek(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = ed(e),
                    i = ef(e),
                    {
                        streamingHost: s,
                        streamingHostRequestHeaders: n
                    } = e.getApiHosts(),
                    a = e.getClientKey();
                if (t && ea.add(r), Y.backgroundSync && ea.has(r) && D.EventSource) {
                    if (en.has(r)) return;
                    let e = {
                        src: null,
                        host: s,
                        clientKey: a,
                        headers: n,
                        cb: t => {
                            try {
                                if ("features-updated" === t.type) {
                                    let e = et.get(r);
                                    e && e.forEach(e => {
                                        ey(e)
                                    })
                                } else if ("features" === t.type) {
                                    let e = JSON.parse(t.data);
                                    e_(r, i, e)
                                }
                                e.errors = 0
                            } catch (t) {
                                ev(e)
                            }
                        },
                        errors: 0,
                        state: "active"
                    };
                    en.set(r, e), ex(e)
                }
            }

            function ev(e) {
                if ("idle" !== e.state && (e.errors++, e.errors > 3 || e.src && 2 === e.src.readyState)) {
                    let t = Math.pow(3, e.errors - 3) * (1e3 + 1e3 * Math.random());
                    eb(e), setTimeout(() => {
                        ["idle", "active"].includes(e.state) || ex(e)
                    }, Math.min(t, 3e5))
                }
            }

            function eb(e) {
                e.src && (e.src.onopen = null, e.src.onerror = null, e.src.close(), e.src = null, "active" === e.state && (e.state = "disabled"))
            }

            function ex(e) {
                e.src = ee.eventSourceCall({
                    host: e.host,
                    clientKey: e.clientKey,
                    headers: e.headers
                }), e.state = "active", e.src.addEventListener("features", e.cb), e.src.addEventListener("features-updated", e.cb), e.src.onerror = () => ev(e), e.src.onopen = () => {
                    e.errors = 0
                }
            }
            let eA = "undefined" != typeof window && "undefined" != typeof document,
                eE = function() {
                    let e;
                    try {
                        e = "1.1.0"
                    } catch (t) {
                        e = ""
                    }
                    return e
                }();
            class ew {
                constructor(e) {
                    if (e = e || {}, this.version = eE, this._ctx = this.context = e, this._renderer = e.renderer || null, this._trackedExperiments = new Set, this._completedChangeIds = new Set, this._trackedFeatures = {}, this.debug = !!e.debug, this._subscriptions = new Set, this._rtQueue = [], this._rtTimer = 0, this.ready = !1, this._assigned = new Map, this._forcedFeatureValues = new Map, this._attributeOverrides = {}, this._activeAutoExperiments = new Map, this._triggeredExpKeys = new Set, this._initialized = !1, this._redirectedUrl = "", this._deferredTrackingCalls = new Map, this._autoExperimentsAllowed = !e.disableExperimentsOnLoad, e.remoteEval) {
                        if (e.decryptionKey) throw Error("Encryption is not available for remoteEval");
                        if (!e.clientKey) throw Error("Missing clientKey");
                        let t = !1;
                        try {
                            t = !!new URL(e.apiHost || "").hostname.match(/growthbook\.io$/i)
                        } catch (e) {}
                        if (t) throw Error("Cannot use remoteEval on GrowthBook Cloud")
                    } else if (e.cacheKeyAttributes) throw Error("cacheKeyAttributes are only used for remoteEval");
                    if (e.features && (this.ready = !0), eA && e.enableDevMode && (window._growthbook = this, document.dispatchEvent(new Event("gbloaded"))), e.experiments ? (this.ready = !0, this._updateAllAutoExperiments()) : e.antiFlicker && this._setAntiFlicker(), this._ctx.stickyBucketService && this._ctx.stickyBucketAssignmentDocs)
                        for (let e in this._ctx.stickyBucketAssignmentDocs) {
                            let t = this._ctx.stickyBucketAssignmentDocs[e];
                            t && this._ctx.stickyBucketService.saveAssignments(t).catch(() => {})
                        }
                    this.ready && this.refreshStickyBuckets(this.getPayload())
                }
                async setPayload(e) {
                    this._payload = e;
                    let t = await this.decryptPayload(e);
                    this._decryptedPayload = t, await this.refreshStickyBuckets(t), t.features && (this._ctx.features = t.features), t.savedGroups && (this._ctx.savedGroups = t.savedGroups), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, this._render()
                }
                initSync(e) {
                    this._initialized = !0;
                    let t = e.payload;
                    if (t.encryptedExperiments || t.encryptedFeatures) throw Error("initSync does not support encrypted payloads");
                    if (this._ctx.stickyBucketService && !this._ctx.stickyBucketAssignmentDocs) throw Error("initSync requires you to pass stickyBucketAssignmentDocs into the GrowthBook constructor");
                    if (this._payload = t, this._decryptedPayload = t, t.features && (this._ctx.features = t.features), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, e.streaming) {
                        if (!this._ctx.clientKey) throw Error("Must specify clientKey to enable streaming");
                        ek(this, !0), eu(this)
                    }
                    return this
                }
                async init(e) {
                    if (this._initialized = !0, (e = e || {}).payload) {
                        if (await this.setPayload(e.payload), e.streaming) {
                            if (!this._ctx.clientKey) throw Error("Must specify clientKey to enable streaming");
                            ek(this, !0), eu(this)
                        }
                        return {
                            success: !0,
                            source: "init"
                        }
                    } {
                        let {
                            data: t,
                            ...r
                        } = await this._refresh({
                            ...e,
                            allowStale: !0
                        });
                        return e.streaming && eu(this), await this.setPayload(t || {}), r
                    }
                }
                async loadFeatures(e) {
                    this._initialized = !0, (e = e || {}).autoRefresh && (this._ctx.subscribeToChanges = !0);
                    let {
                        data: t
                    } = await this._refresh({
                        ...e,
                        allowStale: !0
                    });
                    await this.setPayload(t || {}), this._canSubscribe() && eu(this)
                }
                async refreshFeatures(e) {
                    let t = await this._refresh({
                        ...e || {},
                        allowStale: !1
                    });
                    t.data && await this.setPayload(t.data)
                }
                getApiInfo() {
                    return [this.getApiHosts().apiHost, this.getClientKey()]
                }
                getApiHosts() {
                    let e = this._ctx.apiHost || "https://cdn.growthbook.io";
                    return {
                        apiHost: e.replace(/\/*$/, ""),
                        streamingHost: (this._ctx.streamingHost || e).replace(/\/*$/, ""),
                        apiRequestHeaders: this._ctx.apiHostRequestHeaders,
                        streamingHostRequestHeaders: this._ctx.streamingHostRequestHeaders
                    }
                }
                getClientKey() {
                    return this._ctx.clientKey || ""
                }
                getPayload() {
                    return this._payload || {
                        features: this.getFeatures(),
                        experiments: this.getExperiments()
                    }
                }
                getDecryptedPayload() {
                    return this._decryptedPayload || this.getPayload()
                }
                isRemoteEval() {
                    return this._ctx.remoteEval || !1
                }
                getCacheKeyAttributes() {
                    return this._ctx.cacheKeyAttributes
                }
                async _refresh(e) {
                    var t;
                    let {
                        timeout: r,
                        skipCache: i,
                        allowStale: s,
                        streaming: n
                    } = e;
                    if (!this._ctx.clientKey) throw Error("Missing clientKey");
                    return ec({
                        instance: this,
                        timeout: r,
                        skipCache: i || this._ctx.disableCache,
                        allowStale: s,
                        backgroundSync: null === (t = null != n ? n : this._ctx.backgroundSync) || void 0 === t || t
                    })
                }
                _render() {
                    if (this._renderer) try {
                        this._renderer()
                    } catch (e) {
                        console.error("Failed to render", e)
                    }
                }
                setFeatures(e) {
                    this._ctx.features = e, this.ready = !0, this._render()
                }
                async setEncryptedFeatures(e, t, r) {
                    let i = await H(e, t || this._ctx.decryptionKey, r);
                    this.setFeatures(JSON.parse(i))
                }
                setExperiments(e) {
                    this._ctx.experiments = e, this.ready = !0, this._updateAllAutoExperiments()
                }
                async setEncryptedExperiments(e, t, r) {
                    let i = await H(e, t || this._ctx.decryptionKey, r);
                    this.setExperiments(JSON.parse(i))
                }
                async decryptPayload(e, t, r) {
                    if ((e = {
                            ...e
                        }).encryptedFeatures) {
                        try {
                            e.features = JSON.parse(await H(e.encryptedFeatures, t || this._ctx.decryptionKey, r))
                        } catch (e) {
                            console.error(e)
                        }
                        delete e.encryptedFeatures
                    }
                    if (e.encryptedExperiments) {
                        try {
                            e.experiments = JSON.parse(await H(e.encryptedExperiments, t || this._ctx.decryptionKey, r))
                        } catch (e) {
                            console.error(e)
                        }
                        delete e.encryptedExperiments
                    }
                    if (e.encryptedSavedGroups) {
                        try {
                            e.savedGroups = JSON.parse(await H(e.encryptedSavedGroups, t || this._ctx.decryptionKey, r))
                        } catch (e) {
                            console.error(e)
                        }
                        delete e.encryptedSavedGroups
                    }
                    return e
                }
                async setAttributes(e) {
                    if (this._ctx.attributes = e, this._ctx.stickyBucketService && await this.refreshStickyBuckets(), this._ctx.remoteEval) {
                        await this._refreshForRemoteEval();
                        return
                    }
                    this._render(), this._updateAllAutoExperiments()
                }
                async updateAttributes(e) {
                    return this.setAttributes({
                        ...this._ctx.attributes,
                        ...e
                    })
                }
                async setAttributeOverrides(e) {
                    if (this._attributeOverrides = e, this._ctx.stickyBucketService && await this.refreshStickyBuckets(), this._ctx.remoteEval) {
                        await this._refreshForRemoteEval();
                        return
                    }
                    this._render(), this._updateAllAutoExperiments()
                }
                async setForcedVariations(e) {
                    if (this._ctx.forcedVariations = e || {}, this._ctx.remoteEval) {
                        await this._refreshForRemoteEval();
                        return
                    }
                    this._render(), this._updateAllAutoExperiments()
                }
                setForcedFeatures(e) {
                    this._forcedFeatureValues = e, this._render()
                }
                async setURL(e) {
                    if (this._ctx.url = e, this._redirectedUrl = "", this._ctx.remoteEval) {
                        await this._refreshForRemoteEval(), this._updateAllAutoExperiments(!0);
                        return
                    }
                    this._updateAllAutoExperiments(!0)
                }
                getAttributes() {
                    return {
                        ...this._ctx.attributes,
                        ...this._attributeOverrides
                    }
                }
                getForcedVariations() {
                    return this._ctx.forcedVariations || {}
                }
                getForcedFeatures() {
                    return this._forcedFeatureValues || new Map
                }
                getStickyBucketAssignmentDocs() {
                    return this._ctx.stickyBucketAssignmentDocs || {}
                }
                getUrl() {
                    return this._ctx.url || ""
                }
                getFeatures() {
                    return this._ctx.features || {}
                }
                getExperiments() {
                    return this._ctx.experiments || []
                }
                getCompletedChangeIds() {
                    return Array.from(this._completedChangeIds)
                }
                subscribe(e) {
                    return this._subscriptions.add(e), () => {
                        this._subscriptions.delete(e)
                    }
                }
                _canSubscribe() {
                    var e;
                    return (null === (e = this._ctx.backgroundSync) || void 0 === e || e) && this._ctx.subscribeToChanges
                }
                async _refreshForRemoteEval() {
                    if (!this._ctx.remoteEval || !this._initialized) return;
                    let e = await this._refresh({
                        allowStale: !1
                    });
                    e.data && await this.setPayload(e.data)
                }
                getAllResults() {
                    return new Map(this._assigned)
                }
                destroy() {
                    var e;
                    this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._completedChangeIds.clear(), this._deferredTrackingCalls.clear(), this._trackedFeatures = {}, this._rtQueue = [], this._payload = void 0, this._rtTimer && clearTimeout(this._rtTimer), e = this, et.forEach(t => t.delete(e)), eA && window._growthbook === this && delete window._growthbook, this._activeAutoExperiments.forEach(e => {
                        e.undo()
                    }), this._activeAutoExperiments.clear(), this._triggeredExpKeys.clear()
                }
                setRenderer(e) {
                    this._renderer = e
                }
                forceVariation(e, t) {
                    if (this._ctx.forcedVariations = this._ctx.forcedVariations || {}, this._ctx.forcedVariations[e] = t, this._ctx.remoteEval) {
                        this._refreshForRemoteEval();
                        return
                    }
                    this._updateAllAutoExperiments(), this._render()
                }
                run(e) {
                    let t = this._run(e, null);
                    return this._fireSubscriptions(e, t), t
                }
                triggerExperiment(e) {
                    return (this._triggeredExpKeys.add(e), this._ctx.experiments) ? this._ctx.experiments.filter(t => t.key === e).map(e => this._runAutoExperiment(e)).filter(e => null !== e) : null
                }
                triggerAutoExperiments() {
                    this._autoExperimentsAllowed = !0, this._updateAllAutoExperiments(!0)
                }
                _runAutoExperiment(e, t) {
                    let r = this._activeAutoExperiments.get(e);
                    if (e.manual && !this._triggeredExpKeys.has(e.key) && !r) return null;
                    let i = this._isAutoExperimentBlockedByContext(e) ? this._getResult(e, -1, !1, "") : this.run(e),
                        s = JSON.stringify(i.value);
                    if (!t && i.inExperiment && r && r.valueHash === s) return i;
                    if (r && this._undoActiveAutoExperiment(e), i.inExperiment) {
                        let t = G(e);
                        if ("redirect" === t && i.value.urlRedirect && e.urlPatterns) {
                            let t = e.persistQueryString ? function(e, t) {
                                let r, i;
                                try {
                                    r = new URL(e), i = new URL(t)
                                } catch (e) {
                                    return console.error("Unable to merge query strings: ".concat(e)), t
                                }
                                return r.searchParams.forEach((e, t) => {
                                    i.searchParams.has(t) || i.searchParams.set(t, e)
                                }), i.toString()
                            }(this._getContextUrl(), i.value.urlRedirect) : i.value.urlRedirect;
                            if (U(t, e.urlPatterns)) return this.log("Skipping redirect because original URL matches redirect URL", {
                                id: e.key
                            }), i;
                            this._redirectedUrl = t;
                            let r = this._getNavigateFunction();
                            if (r) {
                                if (eA) {
                                    var n;
                                    this._setAntiFlicker(), window.setTimeout(() => {
                                        try {
                                            r(t)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }, null !== (n = this._ctx.navigateDelay) && void 0 !== n ? n : 100)
                                } else try {
                                    r(t)
                                } catch (e) {
                                    console.error(e)
                                }
                            }
                        } else if ("visual" === t) {
                            let t = this._ctx.applyDomChangesCallback ? this._ctx.applyDomChangesCallback(i.value) : this._applyDOMChanges(i.value);
                            t && this._activeAutoExperiments.set(e, {
                                undo: t,
                                valueHash: s
                            })
                        }
                    }
                    return i
                }
                _undoActiveAutoExperiment(e) {
                    let t = this._activeAutoExperiments.get(e);
                    t && (t.undo(), this._activeAutoExperiments.delete(e))
                }
                _updateAllAutoExperiments(e) {
                    if (!this._autoExperimentsAllowed) return;
                    let t = this._ctx.experiments || [],
                        r = new Set(t);
                    for (let i of (this._activeAutoExperiments.forEach((e, t) => {
                            r.has(t) || (e.undo(), this._activeAutoExperiments.delete(t))
                        }), t)) {
                        let t = this._runAutoExperiment(i, e);
                        if (null != t && t.inExperiment && "redirect" === G(i)) break
                    }
                }
                _fireSubscriptions(e, t) {
                    let r = e.key,
                        i = this._assigned.get(r);
                    i && i.result.inExperiment === t.inExperiment && i.result.variationId === t.variationId || (this._assigned.set(r, {
                        experiment: e,
                        result: t
                    }), this._subscriptions.forEach(r => {
                        try {
                            r(e, t)
                        } catch (e) {
                            console.error(e)
                        }
                    }))
                }
                _trackFeatureUsage(e, t) {
                    if ("override" === t.source) return;
                    let r = JSON.stringify(t.value);
                    if (this._trackedFeatures[e] !== r) {
                        if (this._trackedFeatures[e] = r, this._ctx.onFeatureUsage) try {
                            this._ctx.onFeatureUsage(e, t)
                        } catch (e) {}
                        eA && window.fetch && (this._rtQueue.push({
                            key: e,
                            on: t.on
                        }), this._rtTimer || (this._rtTimer = window.setTimeout(() => {
                            this._rtTimer = 0;
                            let e = [...this._rtQueue];
                            this._rtQueue = [], this._ctx.realtimeKey && window.fetch("https://rt.growthbook.io/?key=".concat(this._ctx.realtimeKey, "&events=").concat(encodeURIComponent(JSON.stringify(e))), {
                                cache: "no-cache",
                                mode: "no-cors"
                            }).catch(() => {})
                        }, this._ctx.realtimeInterval || 2e3)))
                    }
                }
                _getFeatureResult(e, t, r, i, s, n) {
                    let a = {
                        value: t,
                        on: !!t,
                        off: !t,
                        source: r,
                        ruleId: i || ""
                    };
                    return s && (a.experiment = s), n && (a.experimentResult = n), this._trackFeatureUsage(e, a), a
                }
                isOn(e) {
                    return this.evalFeature(e).on
                }
                isOff(e) {
                    return this.evalFeature(e).off
                }
                getFeatureValue(e, t) {
                    let r = this.evalFeature(e).value;
                    return null === r ? t : r
                }
                feature(e) {
                    return this.evalFeature(e)
                }
                evalFeature(e) {
                    return this._evalFeature(e)
                }
                _evalFeature(e, t) {
                    if ((t = t || {
                            evaluatedFeatures: new Set
                        }).evaluatedFeatures.has(e)) return this._getFeatureResult(e, null, "cyclicPrerequisite");
                    if (t.evaluatedFeatures.add(e), t.id = e, this._forcedFeatureValues.has(e)) return this._getFeatureResult(e, this._forcedFeatureValues.get(e), "override");
                    if (!this._ctx.features || !this._ctx.features[e]) return this._getFeatureResult(e, null, "unknownFeature");
                    let r = this._ctx.features[e];
                    if (r.rules) e: for (let i of r.rules) {
                        if (i.parentConditions)
                            for (let r of i.parentConditions) {
                                let i = this._evalFeature(r.id, t);
                                if ("cyclicPrerequisite" === i.source) return this._getFeatureResult(e, null, "cyclicPrerequisite");
                                if (!Q({
                                        value: i.value
                                    }, r.condition || {})) {
                                    if (r.gate) return this._getFeatureResult(e, null, "prerequisite");
                                    continue e
                                }
                            }
                        if (i.filters && this._isFilteredOut(i.filters)) continue;
                        if ("force" in i) {
                            if (i.condition && !this._conditionPasses(i.condition) || !this._isIncludedInRollout(i.seed || e, i.hashAttribute, this._ctx.stickyBucketService && !i.disableStickyBucketing ? i.fallbackAttribute : void 0, i.range, i.coverage, i.hashVersion)) continue;
                            return i.tracks && i.tracks.forEach(e => {
                                this._track(e.experiment, e.result)
                            }), this._getFeatureResult(e, i.force, "force", i.id)
                        }
                        if (!i.variations) continue;
                        let r = {
                            variations: i.variations,
                            key: i.key || e
                        };
                        "coverage" in i && (r.coverage = i.coverage), i.weights && (r.weights = i.weights), i.hashAttribute && (r.hashAttribute = i.hashAttribute), i.fallbackAttribute && (r.fallbackAttribute = i.fallbackAttribute), i.disableStickyBucketing && (r.disableStickyBucketing = i.disableStickyBucketing), void 0 !== i.bucketVersion && (r.bucketVersion = i.bucketVersion), void 0 !== i.minBucketVersion && (r.minBucketVersion = i.minBucketVersion), i.namespace && (r.namespace = i.namespace), i.meta && (r.meta = i.meta), i.ranges && (r.ranges = i.ranges), i.name && (r.name = i.name), i.phase && (r.phase = i.phase), i.seed && (r.seed = i.seed), i.hashVersion && (r.hashVersion = i.hashVersion), i.filters && (r.filters = i.filters), i.condition && (r.condition = i.condition);
                        let s = this._run(r, e);
                        if (this._fireSubscriptions(r, s), s.inExperiment && !s.passthrough) return this._getFeatureResult(e, s.value, "experiment", i.id, r, s)
                    }
                    return this._getFeatureResult(e, void 0 === r.defaultValue ? null : r.defaultValue, "defaultValue")
                }
                _isIncludedInRollout(e, t, r, i, s, n) {
                    if (!i && void 0 === s) return !0;
                    if (!i && 0 === s) return !1;
                    let {
                        hashValue: a
                    } = this._getHashAttribute(t, r);
                    if (!a) return !1;
                    let c = M(e, a, n || 1);
                    return null !== c && (i ? $(c, i) : void 0 === s || c <= s)
                }
                _conditionPasses(e) {
                    return Q(this.getAttributes(), e, this._ctx.savedGroups || {})
                }
                _isFilteredOut(e) {
                    return e.some(e => {
                        let {
                            hashValue: t
                        } = this._getHashAttribute(e.attribute);
                        if (!t) return !0;
                        let r = M(e.seed, t, e.hashVersion || 2);
                        return null === r || !e.ranges.some(e => $(r, e))
                    })
                }
                _run(e, t) {
                    let r = e.key,
                        i = e.variations.length;
                    if (i < 2 || !1 === this._ctx.enabled || (e = this._mergeOverrides(e)).urlPatterns && !U(this._getContextUrl(), e.urlPatterns)) return this._getResult(e, -1, !1, t);
                    let s = function(e, t, r) {
                        if (!t) return null;
                        let i = t.split("?")[1];
                        if (!i) return null;
                        let s = i.replace(/#.*/, "").split("&").map(e => e.split("=", 2)).filter(t => {
                            let [r] = t;
                            return r === e
                        }).map(e => {
                            let [, t] = e;
                            return parseInt(t)
                        });
                        return s.length > 0 && s[0] >= 0 && s[0] < r ? s[0] : null
                    }(r, this._getContextUrl(), i);
                    if (null !== s) return this._getResult(e, s, !1, t);
                    if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
                        let i = this._ctx.forcedVariations[r];
                        return this._getResult(e, i, !1, t)
                    }
                    if ("draft" === e.status || !1 === e.active) return this._getResult(e, -1, !1, t);
                    let {
                        hashAttribute: n,
                        hashValue: a
                    } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0);
                    if (!a) return this._getResult(e, -1, !1, t);
                    let c = -1,
                        u = !1,
                        o = !1;
                    if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                        let {
                            variation: t,
                            versionIsBlocked: r
                        } = this._getStickyBucketVariation({
                            expKey: e.key,
                            expBucketVersion: e.bucketVersion,
                            expHashAttribute: e.hashAttribute,
                            expFallbackAttribute: e.fallbackAttribute,
                            expMinBucketVersion: e.minBucketVersion,
                            expMeta: e.meta
                        });
                        u = t >= 0, c = t, o = !!r
                    }
                    if (!u) {
                        if (e.filters) {
                            if (this._isFilteredOut(e.filters)) return this._getResult(e, -1, !1, t)
                        } else if (e.namespace && ! function(e, t) {
                                let r = M("__" + t[0], e, 1);
                                return null !== r && r >= t[1] && r < t[2]
                            }(a, e.namespace)) return this._getResult(e, -1, !1, t);
                        if (e.include && ! function(e) {
                                try {
                                    return e()
                                } catch (e) {
                                    return console.error(e), !1
                                }
                            }(e.include) || e.condition && !this._conditionPasses(e.condition)) return this._getResult(e, -1, !1, t);
                        if (e.parentConditions)
                            for (let r of e.parentConditions) {
                                let i = this._evalFeature(r.id);
                                if ("cyclicPrerequisite" === i.source || !Q({
                                        value: i.value
                                    }, r.condition || {})) return this._getResult(e, -1, !1, t)
                            }
                        if (e.groups && !this._hasGroupOverlap(e.groups)) return this._getResult(e, -1, !1, t)
                    }
                    if (e.url && !this._urlIsValid(e.url)) return this._getResult(e, -1, !1, t);
                    let l = M(e.seed || r, a, e.hashVersion || 1);
                    if (null === l) return this._getResult(e, -1, !1, t);
                    if (u || (c = function(e, t) {
                            for (let r = 0; r < t.length; r++)
                                if ($(e, t[r])) return r;
                            return -1
                        }(l, e.ranges || function(e, t, r) {
                            (t = void 0 === t ? 1 : t) < 0 ? t = 0 : t > 1 && (t = 1);
                            let i = e <= 0 ? [] : Array(e).fill(1 / e);
                            (r = r || i).length !== e && (r = i);
                            let s = r.reduce((e, t) => t + e, 0);
                            (s < .99 || s > 1.01) && (r = i);
                            let n = 0;
                            return r.map(e => {
                                let r = n;
                                return n += e, [r, r + t * e]
                            })
                        }(i, void 0 === e.coverage ? 1 : e.coverage, e.weights))), o) return this._getResult(e, -1, !1, t, void 0, !0);
                    if (c < 0) return this._getResult(e, -1, !1, t);
                    if ("force" in e) return this._getResult(e, void 0 === e.force ? -1 : e.force, !1, t);
                    if (this._ctx.qaMode || "stopped" === e.status) return this._getResult(e, -1, !1, t);
                    let h = this._getResult(e, c, !0, t, l, u);
                    if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                        let {
                            changed: t,
                            key: r,
                            doc: i
                        } = this._generateStickyBucketAssignmentDoc(n, j(a), {
                            [this._getStickyBucketExperimentKey(e.key, e.bucketVersion)]: h.key
                        });
                        t && (this._ctx.stickyBucketAssignmentDocs = this._ctx.stickyBucketAssignmentDocs || {}, this._ctx.stickyBucketAssignmentDocs[r] = i, this._ctx.stickyBucketService.saveAssignments(i))
                    }
                    return this._track(e, h), "changeId" in e && e.changeId && this._completedChangeIds.add(e.changeId), h
                }
                log(e, t) {
                    this.debug && (this._ctx.log ? this._ctx.log(e, t) : console.log(e, t))
                }
                getDeferredTrackingCalls() {
                    return Array.from(this._deferredTrackingCalls.values())
                }
                setDeferredTrackingCalls(e) {
                    this._deferredTrackingCalls = new Map(e.filter(e => e && e.experiment && e.result).map(e => [this._getTrackKey(e.experiment, e.result), e]))
                }
                fireDeferredTrackingCalls() {
                    this._ctx.trackingCallback && (this._deferredTrackingCalls.forEach(e => {
                        e && e.experiment && e.result ? this._track(e.experiment, e.result) : console.error("Invalid deferred tracking call", {
                            call: e
                        })
                    }), this._deferredTrackingCalls.clear())
                }
                setTrackingCallback(e) {
                    this._ctx.trackingCallback = e, this.fireDeferredTrackingCalls()
                }
                _getTrackKey(e, t) {
                    return t.hashAttribute + t.hashValue + e.key + t.variationId
                }
                _track(e, t) {
                    let r = this._getTrackKey(e, t);
                    if (!this._ctx.trackingCallback) {
                        this._deferredTrackingCalls.has(r) || this._deferredTrackingCalls.set(r, {
                            experiment: e,
                            result: t
                        });
                        return
                    }
                    if (!this._trackedExperiments.has(r)) {
                        this._trackedExperiments.add(r);
                        try {
                            this._ctx.trackingCallback(e, t)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
                _mergeOverrides(e) {
                    let t = e.key,
                        r = this._ctx.overrides;
                    return r && r[t] && "string" == typeof(e = Object.assign({}, e, r[t])).url && (e.url = P(e.url)), e
                }
                _getHashAttribute(e, t) {
                    let r = e || "id",
                        i = "";
                    return this._attributeOverrides[r] ? i = this._attributeOverrides[r] : this._ctx.attributes ? i = this._ctx.attributes[r] || "" : this._ctx.user && (i = this._ctx.user[r] || ""), !i && t && (this._attributeOverrides[t] ? i = this._attributeOverrides[t] : this._ctx.attributes ? i = this._ctx.attributes[t] || "" : this._ctx.user && (i = this._ctx.user[t] || ""), i && (r = t)), {
                        hashAttribute: r,
                        hashValue: i
                    }
                }
                _getResult(e, t, r, i, s, n) {
                    let a = !0;
                    (t < 0 || t >= e.variations.length) && (t = 0, a = !1);
                    let {
                        hashAttribute: c,
                        hashValue: u
                    } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0), o = e.meta ? e.meta[t] : {}, l = {
                        key: o.key || "" + t,
                        featureId: i,
                        inExperiment: a,
                        hashUsed: r,
                        variationId: t,
                        value: e.variations[t],
                        hashAttribute: c,
                        hashValue: u,
                        stickyBucketUsed: !!n
                    };
                    return o.name && (l.name = o.name), void 0 !== s && (l.bucket = s), o.passthrough && (l.passthrough = o.passthrough), l
                }
                _getContextUrl() {
                    return this._ctx.url || (eA ? window.location.href : "")
                }
                _urlIsValid(e) {
                    let t = this._getContextUrl();
                    if (!t) return !1;
                    let r = t.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
                    return !!(e.test(t) || e.test(r))
                }
                _hasGroupOverlap(e) {
                    let t = this._ctx.groups || {};
                    for (let r = 0; r < e.length; r++)
                        if (t[e[r]]) return !0;
                    return !1
                }
                _isAutoExperimentBlockedByContext(e) {
                    let t = G(e);
                    if ("visual" === t) {
                        if (this._ctx.disableVisualExperiments || this._ctx.disableJsInjection && e.variations.some(e => e.js)) return !0
                    } else {
                        if ("redirect" !== t || this._ctx.disableUrlRedirectExperiments) return !0;
                        try {
                            let t = new URL(this._getContextUrl());
                            for (let r of e.variations) {
                                if (!r || !r.urlRedirect) continue;
                                let e = new URL(r.urlRedirect);
                                if (this._ctx.disableCrossOriginUrlRedirectExperiments && (e.protocol !== t.protocol || e.host !== t.host)) return !0
                            }
                        } catch (t) {
                            return this.log("Error parsing current or redirect URL", {
                                id: e.key,
                                error: t
                            }), !0
                        }
                    }
                    return !!(e.changeId && (this._ctx.blockedChangeIds || []).includes(e.changeId))
                }
                getRedirectUrl() {
                    return this._redirectedUrl
                }
                _getNavigateFunction() {
                    return this._ctx.navigate ? this._ctx.navigate : eA ? e => {
                        window.location.replace(e)
                    } : null
                }
                _setAntiFlicker() {
                    if (this._ctx.antiFlicker && eA) try {
                        var e;
                        let t = document.createElement("style");
                        t.innerHTML = ".gb-anti-flicker { opacity: 0 !important; pointer-events: none; }", document.head.appendChild(t), document.documentElement.classList.add("gb-anti-flicker"), setTimeout(() => {
                            document.documentElement.classList.remove("gb-anti-flicker")
                        }, null !== (e = this._ctx.antiFlickerTimeout) && void 0 !== e ? e : 3500)
                    } catch (e) {
                        console.error(e)
                    }
                }
                _applyDOMChanges(e) {
                    if (!eA) return;
                    let t = [];
                    if (e.css) {
                        let r = document.createElement("style");
                        r.innerHTML = e.css, document.head.appendChild(r), t.push(() => r.remove())
                    }
                    if (e.js) {
                        let r = document.createElement("script");
                        r.innerHTML = e.js, this._ctx.jsInjectionNonce && (r.nonce = this._ctx.jsInjectionNonce), document.head.appendChild(r), t.push(() => r.remove())
                    }
                    return e.domMutations && e.domMutations.forEach(e => {
                        t.push(N.declarative(e).revert)
                    }), () => {
                        t.forEach(e => e())
                    }
                }
                _deriveStickyBucketIdentifierAttributes(e) {
                    let t = new Set,
                        r = e && e.features ? e.features : this.getFeatures(),
                        i = e && e.experiments ? e.experiments : this.getExperiments();
                    return Object.keys(r).forEach(e => {
                        let i = r[e];
                        if (i.rules)
                            for (let e of i.rules) e.variations && (t.add(e.hashAttribute || "id"), e.fallbackAttribute && t.add(e.fallbackAttribute))
                    }), i.map(e => {
                        t.add(e.hashAttribute || "id"), e.fallbackAttribute && t.add(e.fallbackAttribute)
                    }), Array.from(t)
                }
                async refreshStickyBuckets(e) {
                    if (this._ctx.stickyBucketService) {
                        let t = this._getStickyBucketAttributes(e);
                        this._ctx.stickyBucketAssignmentDocs = await this._ctx.stickyBucketService.getAllAssignments(t)
                    }
                }
                _getStickyBucketAssignments(e, t) {
                    if (!this._ctx.stickyBucketAssignmentDocs) return {};
                    let {
                        hashAttribute: r,
                        hashValue: i
                    } = this._getHashAttribute(e), s = "".concat(r, "||").concat(j(i)), {
                        hashAttribute: n,
                        hashValue: a
                    } = this._getHashAttribute(t), c = a ? "".concat(n, "||").concat(j(a)) : null, u = {};
                    return c && this._ctx.stickyBucketAssignmentDocs[c] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[c].assignments || {}), this._ctx.stickyBucketAssignmentDocs[s] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[s].assignments || {}), u
                }
                _getStickyBucketVariation(e) {
                    let {
                        expKey: t,
                        expBucketVersion: r,
                        expHashAttribute: i,
                        expFallbackAttribute: s,
                        expMinBucketVersion: n,
                        expMeta: a
                    } = e;
                    r = r || 0, n = n || 0, i = i || "id", a = a || [];
                    let c = this._getStickyBucketExperimentKey(t, r),
                        u = this._getStickyBucketAssignments(i, s);
                    if (n > 0) {
                        for (let e = 0; e <= n; e++)
                            if (void 0 !== u[this._getStickyBucketExperimentKey(t, e)]) return {
                                variation: -1,
                                versionIsBlocked: !0
                            }
                    }
                    let o = u[c];
                    if (void 0 === o) return {
                        variation: -1
                    };
                    let l = a.findIndex(e => e.key === o);
                    return l < 0 ? {
                        variation: -1
                    } : {
                        variation: l
                    }
                }
                _getStickyBucketExperimentKey(e, t) {
                    return t = t || 0, "".concat(e, "__").concat(t)
                }
                _getStickyBucketAttributes(e) {
                    let t = {};
                    return this._ctx.stickyBucketIdentifierAttributes = this._ctx.stickyBucketIdentifierAttributes ? this._ctx.stickyBucketIdentifierAttributes : this._deriveStickyBucketIdentifierAttributes(e), this._ctx.stickyBucketIdentifierAttributes.forEach(e => {
                        let {
                            hashValue: r
                        } = this._getHashAttribute(e);
                        t[e] = j(r)
                    }), t
                }
                _generateStickyBucketAssignmentDoc(e, t, r) {
                    let i = "".concat(e, "||").concat(t),
                        s = this._ctx.stickyBucketAssignmentDocs && this._ctx.stickyBucketAssignmentDocs[i] && this._ctx.stickyBucketAssignmentDocs[i].assignments || {},
                        n = {
                            ...s,
                            ...r
                        },
                        a = JSON.stringify(s) !== JSON.stringify(n);
                    return {
                        key: i,
                        doc: {
                            attributeName: e,
                            attributeValue: t,
                            assignments: n
                        },
                        changed: a
                    }
                }
            }
            var eS = r(2265);
            let eB = eS.createContext({});

            function eC(e) {
                return eR().evalFeature(e)
            }

            function eF(e, t) {
                return eR().getFeatureValue(e, t)
            }

            function eR() {
                let {
                    growthbook: e
                } = eS.useContext(eB);
                if (!e) throw Error("Missing or invalid GrowthBookProvider");
                return e
            }
            let eT = ({
                children: e,
                growthbook: t
            }) => {
                let [r, i] = eS.useState(0);
                return eS.useEffect(() => {
                    if (t && t.setRenderer) return t.setRenderer(() => {
                        i(e => e + 1)
                    }), () => {
                        t.setRenderer(() => {})
                    }
                }, [t]), eS.createElement(eB.Provider, {
                    value: {
                        growthbook: t
                    }
                }, e)
            }
        }
    }
]);