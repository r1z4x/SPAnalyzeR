/*! For license information please see nr-spa-1.293.0.min.js.LICENSE.txt */
"use strict";
(self["webpackChunk:NRBA-1.293.0.PROD"] = self["webpackChunk:NRBA-1.293.0.PROD"] || []).push([
    [478], {
        7699: (e, t, i) => {
            i.d(t, {
                It: () => s,
                No: () => r,
                uh: () => n
            });
            const r = 64e3,
                s = 1e6,
                n = "NR_CONTAINER_AGENT"
        },
        2123: (e, t, i) => {
            function r(e) {
                return !!e && e.self !== e.top
            }
            i.d(t, {
                v: () => r
            })
        },
        5519: (e, t, i) => {
            i.d(t, {
                AQ: () => h,
                me: () => a,
                sH: () => o,
                uJ: () => c
            });
            var r = i(3304),
                s = Object.prototype.hasOwnProperty,
                n = 64;

            function a(e, t, i) {
                return e || 0 === e || "" === e ? t(e) + (i ? "," : "") : "!"
            }

            function o(e, t) {
                return t ? Math.floor(e).toString(36) : void 0 === e || 0 === e ? "" : Math.floor(e).toString(36)
            }

            function c(e) {
                let t = 0;
                const i = Object.prototype.hasOwnProperty.call(Object, "create") ? Object.create(null) : {};
                return function(r) {
                    if (void 0 === r || "" === r) return "";
                    return r = e.obfuscateString(String(r)), s.call(i, r) ? o(i[r], !0) : (i[r] = t++, function(e) {
                        return "'" + e.replace(u, "\\$1")
                    }(r))
                }
            }

            function h(e, t) {
                var i = [];
                return Object.entries(e || {}).forEach((([e, s]) => {
                    if (!(i.length >= n)) {
                        var a, o = 5;
                        switch (e = t(e), typeof s) {
                            case "object":
                                s ? a = t((0, r.A)(s)) : o = 9;
                                break;
                            case "number":
                                o = 6, a = s % 1 ? s : s + ".";
                                break;
                            case "boolean":
                                o = s ? 7 : 8;
                                break;
                            case "undefined":
                                o = 9;
                                break;
                            default:
                                a = t(s)
                        }
                        i.push([o, e + (a ? "," + a : "")])
                    }
                })), i
            }
            var u = /([,\\;])/g
        },
        2733: (e, t, i) => {
            i.d(t, {
                eM: () => f,
                si: () => m,
                ss: () => p
            });
            var r = "Start",
                s = "End",
                n = "unloadEvent",
                a = "redirect",
                o = "domainLookup",
                c = "onnect",
                h = "request",
                u = "response",
                d = "loadEvent",
                l = "domContentLoadedEvent";
            const p = [];

            function f(e, t, i = {}, p = !1) {
                if (t) return i.of = e, g(i.of, i, "n", !0), g(t[n + r], i, "u", p), g(t[a + r], i, "r", p), g(t[n + s], i, "ue", p), g(t[a + s], i, "re", p), g(t["fetch" + r], i, "f", p), g(t[o + r], i, "dn", p), g(t[o + s], i, "dne", p), g(t["c" + c + r], i, "c", p), g(t["secureC" + c + "ion" + r], i, "s", p), g(t["c" + c + s], i, "ce", p), g(t[h + r], i, "rq", p), g(t[u + r], i, "rp", p), g(t[u + s], i, "rpe", p), g(t.domLoading, i, "dl", p), g(t.domInteractive, i, "di", p), g(t[l + r], i, "ds", p), g(t[l + s], i, "de", p), g(t.domComplete, i, "dc", p), g(t[d + r], i, "l", p), g(t[d + s], i, "le", p), i
            }

            function m(e, t) {
                var i;
                return g("number" == typeof(i = e.type) ? i : {
                    navigate: void 0,
                    reload: 1,
                    back_forward: 2,
                    prerender: 3
                } [i], t, "ty"), g(e.redirectCount, t, "rc"), t
            }

            function g(e, t, i, r) {
                if ("number" == typeof e && e > 0) {
                    if (r) {
                        const i = t?.of > 0 ? t.of : 0;
                        e = Math.max(e - i, 0)
                    }
                    e = Math.round(e), t[i] = e, p.push(e)
                } else p.push(void 0)
            }
        },
        9119: (e, t, i) => {
            i.d(t, {
                L: () => n
            });
            var r = /([^?#]*)[^#]*(#[^?]*|$).*/,
                s = /([^?#]*)().*/;

            function n(e, t) {
                return e.replace(t ? r : s, "$1$2")
            }
        },
        3762: (e, t, i) => {
            i.d(t, {
                WL: () => h,
                uR: () => u
            });
            var r = i(3304),
                s = {
                    "%2C": ",",
                    "%3A": ":",
                    "%2F": "/",
                    "%40": "@",
                    "%24": "$",
                    "%3B": ";"
                },
                n = Object.keys(s),
                a = new RegExp(n.join("|"), "g");

            function o(e) {
                return s[e]
            }

            function c(e) {
                return null == e ? "null" : encodeURIComponent(e).replace(a, o)
            }

            function h(e, t) {
                var i = 0,
                    s = "";
                return Object.entries(e || {}).forEach((([e, n]) => {
                    var a, o, h = [];
                    if ("string" == typeof n || !Array.isArray(n) && null != n && n.toString().length) a = "&" + e + "=" + c(n), i += a.length, s += a;
                    else if (Array.isArray(n) && n.length) {
                        for (i += 9, o = 0; o < n.length && (a = c((0, r.A)(n[o])), i += a.length, !(void 0 !== t && i >= t)); o++) h.push(a);
                        s += "&" + e + "=%5B" + h.join(",") + "%5D"
                    }
                })), s
            }

            function u(e, t, i = {}) {
                return Object.keys(i).includes(e) ? "" : t && "string" == typeof t ? "&" + e + "=" + c(t) : ""
            }
        },
        4284: (e, t, i) => {
            i.d(t, {
                p: () => s
            });
            var r = i(6154);

            function s() {
                return Boolean("file:" === r.gm?.location?.protocol)
            }
        },
        1528: (e, t, i) => {
            function r(e, t, i) {
                let r = "unknown";
                if (e && e instanceof XMLHttpRequest) {
                    const t = i.context(e).params;
                    if (!(t && t.status && t.method && t.host && t.pathname)) return "xhrOriginMissing";
                    r = t.status + " " + t.method + ": " + t.host + t.pathname
                } else if (e && "string" == typeof e.tagName && (r = e.tagName.toLowerCase(), e.id && (r += "#" + e.id), e.className))
                    for (let t = 0; t < e.classList.length; t++) r += "." + e.classList[t];
                return "unknown" === r && ("string" == typeof t ? r = t : t === document ? r = "document" : t === window ? r = "window" : t instanceof FileReader && (r = "FileReader")), r
            }
            i.d(t, {
                t: () => r
            })
        },
        3311: (e, t, i) => {
            function r(e, t, i = "string", s = []) {
                return e && "object" == typeof e ? (Object.keys(e).forEach((n => {
                    "object" == typeof e[n] ? r(e[n], t, i, s) : typeof e[n] !== i || s.includes(n) || (e[n] = t(e[n]))
                })), e) : e
            }
            i.d(t, {
                G: () => r
            })
        },
        5436: (e, t, i) => {
            function r(e) {
                return e?.constructor === {}.constructor
            }
            i.d(t, {
                a: () => r
            })
        },
        1083: (e, t, i) => {
            i.d(t, {
                w: () => r
            });
            const r = {
                FIRST_PAINT: "fp",
                FIRST_CONTENTFUL_PAINT: "fcp",
                FIRST_INTERACTION: "fi",
                LARGEST_CONTENTFUL_PAINT: "lcp",
                CUMULATIVE_LAYOUT_SHIFT: "cls",
                INTERACTION_TO_NEXT_PAINT: "inp",
                TIME_TO_FIRST_BYTE: "ttfb"
            }
        },
        5344: (e, t, i) => {
            i.d(t, {
                j: () => a
            });
            var r = i(7226),
                s = i(6154),
                n = i(1083);
            const a = new(i(6773).x)(n.w.FIRST_CONTENTFUL_PAINT);
            if (s.RI)
                if (s.sb) try {
                    if (!s.mw) {
                        performance.getEntriesByType("paint").forEach((e => {
                            "first-contentful-paint" === e.name && a.update({
                                value: Math.floor(e.startTime)
                            })
                        }))
                    }
                } catch (e) {} else(0, r.zB)((({
                    value: e,
                    attribution: t
                }) => {
                    if (s.mw || a.isValid) return;
                    const i = {
                        timeToFirstByte: t.timeToFirstByte,
                        firstByteToFCP: t.firstByteToFCP,
                        loadState: t.loadState
                    };
                    a.update({
                        value: e,
                        attrs: i
                    })
                }))
        },
        5181: (e, t, i) => {
            i.d(t, {
                J: () => n
            });
            var r = i(6154),
                s = i(1083);
            const n = new(i(6773).x)(s.w.FIRST_PAINT);
            if (r.RI) {
                const e = e => {
                    e.forEach((e => {
                        "first-paint" !== e.name || n.isValid || (t.disconnect(), n.update({
                            value: e.startTime
                        }))
                    }))
                };
                let t;
                try {
                    PerformanceObserver.supportedEntryTypes.includes("paint") && !r.mw && (t = new PerformanceObserver((t => {
                        Promise.resolve().then((() => {
                            e(t.getEntries())
                        }))
                    })), t.observe({
                        type: "paint",
                        buffered: !0
                    }))
                } catch (e) {}
            }
        },
        8779: (e, t, i) => {
            i.d(t, {
                j: () => o
            });
            var r = i(6154),
                s = i(1083),
                n = i(6773),
                a = i(7226);
            const o = new n.x(s.w.TIME_TO_FIRST_BYTE);
            if (r.RI && "undefined" != typeof PerformanceNavigationTiming && !r.OF && window === window.parent)(0, a.Ck)((({
                value: e,
                attribution: t
            }) => {
                o.isValid || o.update({
                    value: e,
                    attrs: {
                        navigationEntry: t.navigationEntry
                    }
                })
            }));
            else if (!o.isValid) {
                const e = {};
                for (let t in r.gm?.performance?.timing || {}) e[t] = Math.max(r.gm?.performance?.timing[t] - r.WN, 0);
                o.update({
                    value: e.responseStart,
                    attrs: {
                        navigationEntry: e
                    }
                })
            }
        },
        6773: (e, t, i) => {
            i.d(t, {
                x: () => r
            });
            class r {
                #e = new Set;
                history = [];
                constructor(e, t) {
                    this.name = e, this.attrs = {}, this.roundingMethod = "function" == typeof t ? t : Math.floor
                }
                update({
                    value: e,
                    attrs: t = {}
                }) {
                    if (null == e || e < 0) return;
                    const i = {
                        value: this.roundingMethod(e),
                        name: this.name,
                        attrs: t
                    };
                    this.history.push(i), this.#e.forEach((e => {
                        try {
                            e(i)
                        } catch (e) {}
                    }))
                }
                get current() {
                    return this.history[this.history.length - 1] || {
                        value: void 0,
                        name: this.name,
                        attrs: {}
                    }
                }
                get isValid() {
                    return this.current.value >= 0
                }
                subscribe(e, t = !0) {
                    if ("function" == typeof e) return this.#e.add(e), this.isValid && t && this.history.forEach((t => {
                        e(t)
                    })), () => {
                        this.#e.delete(e)
                    }
                }
            }
        },
        3845: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => g
            });
            var r = i(3606),
                s = i(3304),
                n = i(9908),
                a = i(7295),
                o = i(9300),
                c = i(860),
                h = i(1630),
                u = i(5436);

            function d({
                body: e,
                query: t
            } = {}) {
                if (e || t) try {
                    const i = function(e) {
                        if (!e) return;
                        Array.isArray(e) || (e = [e]);
                        const t = [],
                            i = [];
                        for (let r of e) {
                            const e = l(r);
                            e && (t.push(e.operationName), i.push(e.operationType))
                        }
                        if (!i.length) return;
                        return {
                            operationName: t.join(","),
                            operationType: i.join(","),
                            operationFramework: "GraphQL"
                        }
                    }(p(e));
                    if (i) return i;
                    const r = l(function(e) {
                        if (!e || "string" != typeof e) return;
                        const t = new URLSearchParams(e);
                        return p(Object.fromEntries(t))
                    }(t));
                    if (r) return r
                } catch (e) {}
            }

            function l(e) {
                if ("object" != typeof e || !e.query || "string" != typeof e.query) return;
                const t = e.query.trim().match(/^(query|mutation|subscription)\s?(\w*)/),
                    i = t?.[1];
                if (!i) return;
                return {
                    operationName: e.operationName || t?.[2] || "Anonymous",
                    operationType: i,
                    operationFramework: "GraphQL"
                }
            }

            function p(e) {
                let t;
                if (!e || "string" != typeof e && "object" != typeof e) return;
                if (t = "string" == typeof e ? JSON.parse(e) : e, !(0, u.a)(t) && !Array.isArray(t)) return;
                let i = !1;
                return i = Array.isArray(t) ? t.some((e => f(e))) : f(t), i ? t : void 0
            }

            function f(e) {
                return !("object" != typeof e || !e.query || "string" != typeof e.query)
            }
            var m = i(5519);
            class g extends h.r {
                static featureName = o.T;
                constructor(e) {
                    super(e, o.T), (0, a.Xv)(e.runtime.denyList), this.underSpaEvents = {};
                    const t = this;
                    this.ee.on("interactionDone", ((e, t) => {
                        this.underSpaEvents[e.id] && (t || this.underSpaEvents[e.id].forEach((e => this.events.add(e))), delete this.underSpaEvents[e.id])
                    })), (0, r.i)("returnAjax", (e => this.events.add(e)), this.featureName, this.ee), (0, r.i)("xhr", (function() {
                        t.storeXhr(...arguments, this)
                    }), this.featureName, this.ee), this.waitForFlags([]).then((() => this.drain()))
                }
                storeXhr(e, t, i, r, o, h) {
                    let u;
                    t.time = i, u = e.cat ? (0, s.A)([e.status, e.cat]) : (0, s.A)([e.status, e.host, e.pathname]);
                    const l = (0, a.gX)(e),
                        p = this.agentRef.init.feature_flags?.includes("ajax_metrics_deny_list");
                    if (!Boolean(this.agentRef.features?.[c.K7.jserrors]) || !l && p || this.agentRef.sharedAggregator?.add(["xhr", u, e, t]), !l) return void(e.hostname === this.agentRef.info.errorBeacon || this.agentRef.init.proxy?.beacon && e.hostname === this.agentRef.init.proxy.beacon ? (this.reportSupportabilityMetric("Ajax/Events/Excluded/Agent"), p && this.reportSupportabilityMetric("Ajax/Metrics/Excluded/Agent")) : (this.reportSupportabilityMetric("Ajax/Events/Excluded/App"), p && this.reportSupportabilityMetric("Ajax/Metrics/Excluded/App")));
                    (0, n.p)("bstXhrAgg", ["xhr", u, e, t], void 0, c.K7.sessionTrace, this.ee);
                    const f = {
                        method: e.method,
                        status: e.status,
                        domain: e.host,
                        path: e.pathname,
                        requestSize: t.txSize,
                        responseSize: t.rxSize,
                        type: o,
                        startTime: i,
                        endTime: r,
                        callbackDuration: t.cbTime
                    };
                    h.dt && (f.spanId = h.dt.spanId, f.traceId = h.dt.traceId, f.spanTimestamp = Math.floor(this.agentRef.runtime.timeKeeper.correctAbsoluteTimestamp(h.dt.timestamp))), f.gql = e.gql = d({
                        body: h.body,
                        query: h.parsedOrigin?.search
                    }), f.gql && this.reportSupportabilityMetric("Ajax/Events/GraphQL/Bytes-Added", (0, s.A)(f.gql).length);
                    if (Boolean(this.agentRef.features?.[c.K7.softNav]))(0, n.p)("ajax", [f], void 0, c.K7.softNav, this.ee);
                    else if (h.spaNode) {
                        const e = h.spaNode.interaction.id;
                        this.underSpaEvents[e] ??= [], this.underSpaEvents[e].push(f)
                    } else this.events.add(f)
                }
                serializer(e) {
                    if (!e.length) return;
                    const t = (0, m.uJ)(this.agentRef.runtime.obfuscator);
                    let i = "bel.7;";
                    for (let r = 0; r < e.length; r++) {
                        const s = e[r],
                            n = [(0, m.sH)(s.startTime), (0, m.sH)(s.endTime - s.startTime), (0, m.sH)(0), (0, m.sH)(0), t(s.method), (0, m.sH)(s.status), t(s.domain), t(s.path), (0, m.sH)(s.requestSize), (0, m.sH)(s.responseSize), "fetch" === s.type ? 1 : "", t(0), (0, m.me)(s.spanId, t, !0) + (0, m.me)(s.traceId, t, !0) + (0, m.me)(s.spanTimestamp, m.sH, !1)];
                        let a = "2,";
                        const o = this.agentRef.info.jsAttributes,
                            c = (0, m.AQ)({
                                ...o || {},
                                ...s.gql || {}
                            }, t);
                        n.unshift((0, m.sH)(c.length)), a += n.join(","), c && c.length > 0 && (a += ";" + c.join(";")), r + 1 < e.length && (a += ";"), i += a
                    }
                    return i
                }
            }
        },
        8019: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => v
            });
            var r = i(3304),
                s = i(9119),
                n = i(3333),
                a = i(6154),
                o = i(1630),
                c = i(944),
                h = i(1863),
                u = i(3606),
                d = i(8154),
                l = i(3311);
            class p {
                constructor(e, t, i) {
                    this.event = e, this.count = 1, this.originMs = Math.floor(e.timeStamp), this.relativeMs = [0], this.selectorPath = t, this.rageClick = void 0, this.nearestTargetFields = i, this.currentUrl = (0, s.L)("" + location)
                }
                aggregate(e) {
                    this.count++, this.relativeMs.push(Math.floor(e.timeStamp - this.originMs)), this.isRageClick() && (this.rageClick = !0)
                }
                isRageClick() {
                    const e = this.relativeMs.length;
                    return "click" === this.event.type && e >= n.nf && this.relativeMs[e - 1] - this.relativeMs[e - n.nf] < n.mq
                }
            }
            class f {
                #t = void 0;
                #i = "";
                get aggregationEvent() {
                    const e = this.#t;
                    return this.#i = "", this.#t = void 0, e
                }
                process(e, t) {
                    if (!e) return;
                    const {
                        selectorPath: i,
                        nearestTargetFields: r
                    } = function(e, t) {
                        let i, r = {};
                        if (n.qN.includes(e.type) || e.target === window) i = "window";
                        else if (e.target === document) i = "document";
                        else {
                            const {
                                path: s,
                                nearestFields: n
                            } = ((e, t = []) => {
                                if (!e) return {
                                    path: void 0,
                                    nearestFields: {}
                                };
                                let i = "",
                                    r = (e => {
                                        try {
                                            let t = 1;
                                            const {
                                                tagName: i
                                            } = e;
                                            for (; e.previousElementSibling;) e.previousElementSibling.tagName === i && t++, e = e.previousElementSibling;
                                            return t
                                        } catch (e) {}
                                    })(e);
                                const s = {};
                                try {
                                    for (; e?.tagName;) {
                                        const {
                                            id: r,
                                            localName: a
                                        } = e;
                                        t.forEach((t => {
                                            s[n(t)] ||= e[t]?.baseVal || e[t]
                                        })), i = [a, r ? "#".concat(r) : "", i ? ">".concat(i) : ""].join(""), e = e.parentNode
                                    }
                                } catch (e) {}
                                return {
                                    path: i ? r ? "".concat(i, ":nth-of-type(").concat(r, ")") : i : void 0,
                                    nearestFields: s
                                };

                                function n(e) {
                                    return "tagName" === e && (e = "tag"), "className" === e && (e = "class"), "nearest".concat(e.charAt(0).toUpperCase() + e.slice(1))
                                }
                            })(e.target, t);
                            i = s, r = n
                        }
                        return {
                            selectorPath: i,
                            nearestTargetFields: r
                        }
                    }(e, t), s = function(e, t) {
                        let i = e.type;
                        "scrollend" !== e.type && (i += "-" + t);
                        return i
                    }(e, i);
                    if (!s || s !== this.#i) {
                        const t = this.#t;
                        return this.#i = s, this.#t = new p(e, i, r), t
                    }
                    this.#t.aggregate(e)
                }
            }
            var m = i(2123),
                g = i(5436);
            class v extends o.r {
                static featureName = n.TZ;
                constructor(e) {
                    super(e, n.TZ), this.eventsPerHarvest = 1e3, this.referrerUrl = a.RI && document.referrer ? (0, s.L)(document.referrer) : void 0, this.waitForFlags(["ins"]).then((([t]) => {
                        if (!t) return this.blocked = !0, void this.deregisterDrain();
                        this.trackSupportabilityMetrics(), (0, u.i)("api-recordCustomEvent", ((e, t, i) => {
                            if (n.kd.includes(t)) return (0, c.R)(46);
                            this.addEvent({
                                eventType: t,
                                timestamp: this.toEpoch(e),
                                ...i
                            })
                        }), this.featureName, this.ee), e.init.page_action.enabled && (0, u.i)("api-addPageAction", ((e, t, i, r) => {
                            if (!this.agentRef.runtime.entityManager.get(r)) return (0, c.R)(56, this.featureName);
                            this.addEvent({
                                ...i,
                                eventType: "PageAction",
                                timestamp: this.toEpoch(e),
                                timeSinceLoad: e / 1e3,
                                actionName: t,
                                referrerUrl: this.referrerUrl,
                                ...a.RI && {
                                    browserWidth: window.document.documentElement?.clientWidth,
                                    browserHeight: window.document.documentElement?.clientHeight
                                }
                            }, r)
                        }), this.featureName, this.ee);
                        let i = () => {};
                        a.RI && e.init.user_actions.enabled && (this.userActionAggregator = new f, this.harvestOpts.beforeUnload = () => i?.(this.userActionAggregator.aggregationEvent), i = e => {
                            try {
                                if (e?.event) {
                                    const {
                                        target: t,
                                        timeStamp: i,
                                        type: r
                                    } = e.event;

                                    function s(e) {
                                        return "tagName" === e && (e = "tag"), "className" === e && (e = "class"), "target".concat(e.charAt(0).toUpperCase() + e.slice(1))
                                    }
                                    this.addEvent({
                                        eventType: "UserAction",
                                        timestamp: this.toEpoch(i),
                                        action: r,
                                        actionCount: e.count,
                                        actionDuration: e.relativeMs[e.relativeMs.length - 1],
                                        actionMs: e.relativeMs,
                                        rageClick: e.rageClick,
                                        target: e.selectorPath,
                                        currentUrl: e.currentUrl,
                                        ...(0, m.v)(window) && {
                                            iframe: !0
                                        },
                                        ...this.agentRef.init.user_actions.elementAttributes.reduce(((i, r) => {
                                            var n;
                                            return n = r, "window" !== e.selectorPath && "document" !== e.selectorPath && t instanceof HTMLElement && t?.[n] && (i[s(r)] = String(t[r]).trim().slice(0, 128)), i
                                        }), {}),
                                        ...e.nearestTargetFields
                                    })
                                }
                            } catch (n) {}
                        }, (0, u.i)("ua", (e => {
                            i(this.userActionAggregator.process(e, this.agentRef.init.user_actions.elementAttributes))
                        }), this.featureName, this.ee));
                        const r = [...e.init.performance.capture_marks ? ["mark"] : [], ...e.init.performance.capture_measures ? ["measure"] : []];
                        if (r.length) try {
                            r.forEach((t => {
                                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                                    new PerformanceObserver((i => {
                                        i.getEntries().forEach((i => {
                                            try {
                                                this.reportSupportabilityMetric("Generic/Performance/" + t + "/Seen");
                                                const r = e.init.performance.capture_detail ? s(i.detail) : {};

                                                function s(e) {
                                                    return null == e ? {} : (0, g.a)(e) ? function e(t, i = "entryDetail") {
                                                        let r = {};
                                                        return null == t || Object.keys(t).forEach((s => {
                                                            let n = i + "." + s;
                                                            (0, g.a)(t[s]) ? Object.assign(r, e(t[s], n)): null !== t[s] && void 0 !== t[s] && (r[n] = t[s])
                                                        })), r
                                                    }(e) : {
                                                        entryDetail: e
                                                    }
                                                }
                                                this.addEvent({
                                                    ...r,
                                                    eventType: "BrowserPerformance",
                                                    timestamp: this.toEpoch(i.startTime),
                                                    entryName: i.name,
                                                    entryDuration: i.duration,
                                                    entryType: t
                                                })
                                            } catch (n) {}
                                        }))
                                    })).observe({
                                        buffered: !0,
                                        type: t
                                    })
                                }
                            }))
                        } catch (e) {}
                        a.RI && e.init.performance.resources.enabled && (0, u.i)("browserPerformance.resource", (t => {
                            try {
                                const {
                                    name: i,
                                    duration: r,
                                    ...n
                                } = t.toJSON();
                                let o = !1;
                                try {
                                    const t = new URL(i).hostname,
                                        r = t.includes("newrelic.com") || t.includes("nr-data.net") || t.includes("nr-local.net");
                                    if (this.agentRef.init.performance.resources.ignore_newrelic && r) return;
                                    if (this.agentRef.init.performance.resources.asset_types.length && !this.agentRef.init.performance.resources.asset_types.includes(n.initiatorType)) return;
                                    o = t === a.gm?.location.hostname || e.init.performance.resources.first_party_domains.includes(t), o && this.reportSupportabilityMetric("Generic/Performance/FirstPartyResource/Seen"), r && this.reportSupportabilityMetric("Generic/Performance/NrResource/Seen")
                                } catch (e) {}
                                this.reportSupportabilityMetric("Generic/Performance/Resource/Seen");
                                const c = {
                                    ...n,
                                    eventType: "BrowserPerformance",
                                    timestamp: Math.floor(e.runtime.timeKeeper.correctRelativeTimestamp(n.startTime)),
                                    entryName: (0, s.L)(i),
                                    entryDuration: r,
                                    firstParty: o
                                };
                                this.addEvent(c)
                            } catch (e) {
                                this.ee.emit("internal-error", [e, "GenericEvents-Resource"])
                            }
                        }), this.featureName, this.ee), (0, u.i)("api-measure", ((t, i) => {
                            const {
                                start: r,
                                duration: s,
                                customAttributes: n
                            } = t, a = {
                                ...n,
                                eventType: "BrowserPerformance",
                                timestamp: Math.floor(e.runtime.timeKeeper.correctRelativeTimestamp(r)),
                                entryName: i,
                                entryDuration: s,
                                entryType: "measure"
                            };
                            this.addEvent(a)
                        }), this.featureName, this.ee), e.runtime.harvester.triggerHarvestFor(this), this.drain()
                    }))
                }
                addEvent(e = {}, t) {
                    if (!e || !Object.keys(e).length) return;
                    if (!e.eventType) return void(0, c.R)(44);
                    for (let t in e) {
                        let i = e[t];
                        e[t] = i && "object" == typeof i ? (0, r.A)(i) : i
                    }
                    const i = {
                            timestamp: Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp((0, h.t)())),
                            pageUrl: (0, s.L)("" + a.m),
                            currentUrl: (0, s.L)("" + location)
                        },
                        n = {
                            ...this.agentRef.info.jsAttributes || {},
                            ...i,
                            ...e
                        };
                    this.events.add(n, t) || this.events.isEmpty(void 0, t) || (this.ee.emit(d.xV, ["GenericEvents/Harvest/Max/Seen"]), this.agentRef.runtime.harvester.triggerHarvestFor(this, {
                        targetEntityGuid: t
                    }), this.events.add(n))
                }
                serializer(e) {
                    return (0, l.G)({
                        ins: e
                    }, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                }
                queryStringsBuilder() {
                    return {
                        ua: this.agentRef.info.userAttributes,
                        at: this.agentRef.info.atts
                    }
                }
                toEpoch(e) {
                    return Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(e))
                }
                trackSupportabilityMetrics() {
                    const e = "Config/Performance/";
                    this.agentRef.init.performance.capture_marks && this.reportSupportabilityMetric(e + "CaptureMarks/Enabled"), this.agentRef.init.performance.capture_measures && this.reportSupportabilityMetric(e + "CaptureMeasures/Enabled"), this.agentRef.init.performance.resources.enabled && this.reportSupportabilityMetric(e + "Resources/Enabled"), 0 !== this.agentRef.init.performance.resources.asset_types?.length && this.reportSupportabilityMetric(e + "Resources/AssetTypes/Changed"), 0 !== this.agentRef.init.performance.resources.first_party_domains?.length && this.reportSupportabilityMetric(e + "Resources/FirstPartyDomains/Changed"), !1 === this.agentRef.init.performance.resources.ignore_newrelic && this.reportSupportabilityMetric(e + "Resources/IgnoreNewrelic/Changed")
                }
            }
        },
        5928: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => F
            });
            const r = /([a-z0-9]+)$/i;

            function s(e) {
                if (!e) return;
                const t = e.match(r);
                return t ? t[1] : void 0
            }
            var n = /^\n+|\n+$/g;

            function a(e) {
                return function(e) {
                    var t;
                    if (e.length > 100) {
                        var i = e.length - 100;
                        t = e.slice(0, 50).join("\n"), t += "\n< ...truncated " + i + " lines... >\n", t += e.slice(-50).join("\n")
                    } else t = e.join("\n");
                    return t
                }(e).replace(n, "")
            }
            var o = i(6154),
                c = i(9119);

            function h(e) {
                if ("string" != typeof e) return "";
                const t = (0, c.L)(e);
                return t === (0, c.L)(o.m) ? "<inline>" : t
            }
            var u = !1,
                d = /function (.+?)\s*\(/,
                l = /^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,
                p = /^\s*(?:(\S*|global code)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i,
                f = /^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,
                m = /^\s*at Function code \(Function code:\d+:\d+\)\s*/i;

            function g(e) {
                var t = null;
                try {
                    if (t = function(e) {
                            if (!e.stack) return null;
                            var t = e.stack.split("\n").reduce(v, {
                                frames: [],
                                stackLines: [],
                                wrapperSeen: !1
                            });
                            return t.frames.length ? {
                                mode: "stack",
                                name: e.name || y(e),
                                message: e.message,
                                stackString: a(t.stackLines),
                                frames: t.frames
                            } : null
                        }(e), t) return t
                } catch (e) {
                    u
                }
                try {
                    if (t = function(e) {
                            if (!("line" in e)) return null;
                            var t = e.name || y(e);
                            if (!e.sourceURL) return {
                                mode: "sourceline",
                                name: t,
                                message: e.message,
                                stackString: t + ": " + e.message + "\n    in evaluated code",
                                frames: [{
                                    func: "evaluated code"
                                }]
                            };
                            var i = h(e.sourceURL),
                                r = t + ": " + e.message + "\n    at " + i;
                            e.line && (r += ":" + e.line, e.column && (r += ":" + e.column));
                            return {
                                mode: "sourceline",
                                name: t,
                                message: e.message,
                                stackString: r,
                                frames: [{
                                    url: i,
                                    line: e.line,
                                    column: e.column
                                }]
                            }
                        }(e), t) return t
                } catch (e) {
                    u
                }
                try {
                    if (t = function(e) {
                            var t = e.name || y(e);
                            return t ? {
                                mode: "nameonly",
                                name: t,
                                message: e.message,
                                stackString: t + ": " + e.message,
                                frames: []
                            } : null
                        }(e), t) return t
                } catch (e) {
                    u
                }
                return {
                    mode: "failed",
                    stackString: "",
                    frames: []
                }
            }

            function v(e, t) {
                let i = function(e) {
                    var t = e.match(p);
                    t || (t = e.match(l));
                    if (t) return {
                        url: t[2],
                        func: "Anonymous function" !== t[1] && "global code" !== t[1] && t[1] || null,
                        line: +t[3],
                        column: t[4] ? +t[4] : null
                    };
                    if (e.match(f) || e.match(m) || "anonymous" === e) return {
                        func: "evaluated code"
                    }
                }(t);
                if (!i) return e.stackLines.push(t), e;
                var r;
                if ((r = i.func) && r.indexOf("nrWrapper") >= 0 && (e.wrapperSeen = !0), !e.wrapperSeen) {
                    let r = h(i.url);
                    r !== i.url && (t = t.replace(i.url, r), i.url = r), e.stackLines.push(t), e.frames.push(i)
                }
                return e
            }

            function y(e) {
                var t = d.exec(String(e.constructor));
                return t && t.length > 1 ? t[1] : "unknown"
            }

            function b(e) {
                var t = 0;
                if (!e || !e.length) return t;
                for (var i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i), t |= 0;
                return t
            }
            var T = i(3606),
                S = i(3304),
                R = i(9908),
                w = i(6774),
                N = i(860),
                E = i(1630),
                M = i(1863),
                A = i(3311);
            const I = "Rrweb",
                k = "Security-Policy";
            var x = i(3496),
                O = i(944);
            class F extends E.r {
                static featureName = w.T;
                constructor(e) {
                    super(e, w.T), this.stackReported = {}, this.observedAt = {}, this.pageviewReported = {}, this.bufferedErrorsUnderSpa = {}, this.errorOnPage = !1, this.ee.on("interactionDone", ((e, t) => this.onInteractionDone(e, t))), (0, T.i)("err", ((...e) => this.storeError(...e)), this.featureName, this.ee), (0, T.i)("ierr", ((...e) => this.storeError(...e)), this.featureName, this.ee), (0, T.i)("softNavFlush", ((e, t, i) => this.onSoftNavNotification(e, t, i)), this.featureName, this.ee), this.harvestOpts.aggregatorTypes = ["err", "ierr", "xhr"], this.waitForFlags(["err"]).then((([e]) => {
                        e ? this.drain() : (this.blocked = !0, this.deregisterDrain())
                    }))
                }
                serializer(e) {
                    return (0, A.G)(e, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                }
                queryStringsBuilder(e) {
                    const t = {},
                        i = (0, S.A)(this.agentRef.runtime.releaseIds);
                    return "{}" !== i && (t.ri = i), e?.err?.length && (this.errorOnPage || (t.pve = "1", this.errorOnPage = !0), this.agentRef.features?.[N.K7.sessionReplay]?.featAggregate?.replayIsActive() || e.err.forEach((e => delete e.params.hasReplay))), t
                }
                buildCanonicalStackString(e) {
                    for (var t = "", i = 0; i < e.frames.length; i++) {
                        var r = e.frames[i],
                            n = s(r.func);
                        t && (t += "\n"), n && (t += n + "@"), "string" == typeof r.url && (t += r.url), r.line && (t += ":" + r.line)
                    }
                    return t
                }
                storeError(e, t, i, r, s, n, a) {
                    if (!e) return;
                    const c = this.agentRef.runtime.entityManager.get(a);
                    if (!c) return (0, O.R)(56, this.featureName);
                    let h;
                    if (t = t || (0, M.t)(), !i && this.agentRef.runtime.onerror && (h = this.agentRef.runtime.onerror(e), h && ("string" != typeof h.group || !h.group.length))) return;
                    var u = g(e);
                    const {
                        shouldSwallow: d,
                        reason: l
                    } = function(e, t, i) {
                        const r = {
                                shouldSwallow: t || !1,
                                reason: i || "Other"
                            },
                            s = e.frames?.[0];
                        if (!s || "string" != typeof e?.message) return r;
                        const n = s?.url?.match(/nr-(.*)-recorder.min.js/),
                            a = s?.url?.match(/rrweb/),
                            o = s?.url?.match(/recorder/),
                            c = e.message.toLowerCase().match(/an attempt was made to break through the security policy of the user agent/);
                        return n || a ? (r.shouldSwallow = !0, r.reason = I, c && (r.reason += "-" + k)) : o && c && (r.shouldSwallow = !0, r.reason = I + "-" + k), r
                    }(u, i, n);
                    if (d) return void this.reportSupportabilityMetric("Internal/Error/" + l);
                    const p = {
                        stackHash: b(this.buildCanonicalStackString(u)),
                        exceptionClass: u.name,
                        request_uri: o.gm?.location.pathname
                    };
                    u.message && (p.message = "" + u.message), h?.group && (p.errorGroup = h.group), s && (0, x.A)(c, this.agentRef) && (p.hasReplay = s);
                    var f, m = b("".concat(u.name, "_").concat(u.message, "_").concat(u.stackString, "_").concat(p.hasReplay ? 1 : 0));
                    this.stackReported[m] ? p.browser_stack_hash = b(u.stackString) : (this.stackReported[m] = !0, p.stack_trace = (f = u.stackString).length > 65530 ? f.substr(0, 65530) : f, this.observedAt[m] = Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(t))), p.releaseIds = (0, S.A)(this.agentRef.runtime.releaseIds), this.pageviewReported[m] || (p.pageview = 1, this.pageviewReported[m] = !0), p.firstOccurrenceTimestamp = this.observedAt[m], p.timestamp = Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(t));
                    const v = ["err", m, p, {
                        time: t
                    }, r];
                    if (this.shouldAllowMainAgentToCapture(a) && (0, R.p)("trace-jserror", v, void 0, N.K7.sessionTrace, this.ee), !this.blocked) {
                        if (e?.__newrelic?.[this.agentIdentifier] && (p._interactionId = e.__newrelic[this.agentIdentifier].interactionId, p._interactionNodeId = e.__newrelic[this.agentIdentifier].interactionNodeId), this.shouldAllowMainAgentToCapture(a)) {
                            Boolean(this.agentRef.features?.[N.K7.softNav]) ? (0, R.p)("jserror", [p, t], void 0, N.K7.softNav, this.ee) : (0, R.p)("spa-jserror", v, void 0, N.K7.spa, this.ee), p.browserInteractionId && !p._softNavFinished ? (this.bufferedErrorsUnderSpa[p.browserInteractionId] ??= [], this.bufferedErrorsUnderSpa[p.browserInteractionId].push(v)) : null != p._interactionId ? (this.bufferedErrorsUnderSpa[p._interactionId] = this.bufferedErrorsUnderSpa[p._interactionId] || [], this.bufferedErrorsUnderSpa[p._interactionId].push(v)) : this.#r(v, void 0 !== p.browserInteractionId, p._softNavAttributes)
                        }
                        a && this.#r([...v, a], !1, p._softNavAttributes)
                    }
                }
                #r(e, t, i = {}) {
                    let [r, s, n, a, o, c] = e;
                    const h = {};
                    t ? (Object.entries(i).forEach((([e, t]) => d(e, t))), s += n.browserInteractionId, delete n._softNavAttributes, delete n._softNavFinished) : (Object.entries(this.agentRef.info.jsAttributes).forEach((([e, t]) => d(e, t))), delete n.browserInteractionId), o && Object.entries(o).forEach((([e, t]) => d(e, t)));
                    const u = s + ":" + b((0, S.A)(h));

                    function d(e, t) {
                        h[e] = t && "object" == typeof t ? (0, S.A)(t) : t
                    }
                    this.events.add([r, u, n, a, h], c)
                }
                shouldAllowMainAgentToCapture(e) {
                    return !e || this.agentRef.init.api.duplicate_registered_data
                }
                onInteractionDone(e, t) {
                    this.bufferedErrorsUnderSpa[e.id] && !this.blocked && (this.bufferedErrorsUnderSpa[e.id].forEach((i => {
                        var r = {};
                        const s = i[4];
                        Object.entries(e.root.attrs.custom || {}).forEach(o), Object.entries(s || {}).forEach(o);
                        var n = i[2];
                        t && (n.browserInteractionId = e.root.attrs.id, n._interactionNodeId && (n.parentNodeId = n._interactionNodeId.toString())), delete n._interactionId, delete n._interactionNodeId;
                        var a = (t ? i[1] + e.root.attrs.id : i[1]) + ":" + b((0, S.A)(r));

                        function o([e, t]) {
                            r[e] = t && "object" == typeof t ? (0, S.A)(t) : t
                        }
                        this.events.add([i[0], a, n, i[3], r], i[5])
                    })), delete this.bufferedErrorsUnderSpa[e.id])
                }
                onSoftNavNotification(e, t, i) {
                    this.blocked || (this.bufferedErrorsUnderSpa[e]?.forEach((e => this.#r(e, t, i))), delete this.bufferedErrorsUnderSpa[e])
                }
            }
        },
        5288: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => y
            });
            var r = i(3606),
                s = i(944),
                n = i(3304),
                a = i(1630),
                o = i(993),
                c = i(6154),
                h = i(9119);
            class u {
                timestamp;
                message;
                attributes;
                level;
                constructor(e, t, i = {}, r = o.p_.INFO) {
                    this.timestamp = e, this.message = t, this.attributes = {
                        ...i,
                        pageUrl: (0, h.L)("" + c.m)
                    }, this.level = r.toUpperCase()
                }
            }
            var d = i(3785),
                l = i(3311),
                p = i(7699),
                f = i(3496),
                m = i(2614),
                g = i(6344),
                v = i(7767);
            class y extends a.r {
                static featureName = o.TZ;
                constructor(e) {
                    super(e, o.TZ), this.isSessionTrackingEnabled = (0, v.V)(e.init) && e.runtime.session, this.ee.on(m.tS.RESET, (() => {
                        this.abort(g.bc.RESET)
                    })), this.ee.on(m.tS.UPDATE, ((e, t) => {
                        this.blocked || e !== m.iL.CROSS_TAB || (this.loggingMode !== o.A$.OFF && t.loggingMode === o.A$.OFF ? this.abort(g.bc.CROSS_TAB) : this.loggingMode = t.loggingMode)
                    })), this.harvestOpts.raw = !0, this.waitForFlags(["log"]).then((([t]) => {
                        const i = this.agentRef.runtime.session ?? {};
                        if (this.loggingMode === o.A$.OFF || i.isNew && t === o.A$.OFF) return this.blocked = !0, void this.deregisterDrain();
                        i.isNew || !this.isSessionTrackingEnabled ? this.updateLoggingMode(t) : this.loggingMode = i.state.loggingMode, (0, r.i)(o.ET, this.handleLog.bind(this), this.featureName, this.ee), this.drain(), e.runtime.harvester.triggerHarvestFor(this)
                    }))
                }
                updateLoggingMode(e) {
                    this.loggingMode = e, this.syncWithSessionManager({
                        loggingMode: this.loggingMode
                    })
                }
                handleLog(e, t, i = {}, r = o.p_.INFO, a) {
                    if (!this.agentRef.runtime.entityManager.get(a)) return (0, s.R)(56, this.featureName);
                    if (this.blocked || !this.loggingMode) return;
                    if (i && "object" == typeof i || (i = {}), "string" == typeof r && (r = r.toUpperCase()), !(0, d.b)(r)) return (0, s.R)(30, r);
                    if (this.loggingMode < (o.A$[r] || 1 / 0)) return void this.reportSupportabilityMetric("Logging/Event/Dropped/Sampling");
                    try {
                        if ("string" != typeof t) {
                            const e = (0, n.A)(t);
                            t = e && "{}" !== e ? e : String(t)
                        }
                    } catch (e) {
                        return (0, s.R)(16, t), void this.reportSupportabilityMetric("Logging/Event/Dropped/Casting")
                    }
                    if ("string" != typeof t || !t) return (0, s.R)(32);
                    const c = new u(Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(e)), t, i, r),
                        h = c.message.length + (0, n.A)(c.attributes).length + c.level.length + 10,
                        l = "Logging/Harvest/Failed/Seen";
                    if (h > p.It) return this.reportSupportabilityMetric(l, h), void(0, s.R)(31, c.message.slice(0, 25) + "...");
                    this.events.wouldExceedMaxSize(h, a) && (this.reportSupportabilityMetric("Logging/Harvest/Early/Seen", this.events.byteSize() + h), this.agentRef.runtime.harvester.triggerHarvestFor(this, {
                        targetEntityGuid: a
                    })), this.events.add(c, a) ? this.reportSupportabilityMetric("Logging/Event/Added/Seen") : (this.reportSupportabilityMetric(l, h), (0, s.R)(31, c.message.slice(0, 25) + "..."))
                }
                serializer(e, t) {
                    const i = this.agentRef.runtime.entityManager.get(t),
                        r = this.agentRef.runtime.session;
                    return [{
                        common: {
                            attributes: {
                                "entity.guid": i.entityGuid,
                                ...r && {
                                    session: r.state.value || "0",
                                    hasReplay: 1 === r.state.sessionReplayMode && (0, f.A)(i, this.agentRef),
                                    hasTrace: 1 === r.state.sessionTraceMode
                                },
                                ptid: this.agentRef.runtime.ptid,
                                appId: i.applicationID || this.agentRef.info.applicationID,
                                standalone: Boolean(this.agentRef.info.sa),
                                agentVersion: this.agentRef.runtime.version,
                                "instrumentation.provider": "browser",
                                "instrumentation.version": this.agentRef.runtime.version,
                                "instrumentation.name": this.agentRef.runtime.loaderType,
                                ...this.agentRef.info.jsAttributes
                            }
                        },
                        logs: (0, l.G)(e, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                    }]
                }
                queryStringsBuilder(e, t) {
                    return {
                        browser_monitoring_key: this.agentRef.runtime.entityManager.get(t).licenseKey
                    }
                }
                abort(e = {}) {
                    this.reportSupportabilityMetric("Logging/Abort/".concat(e.sm)), this.blocked = !0, this.events && (this.events.clear(), this.events.clearSave()), this.updateLoggingMode(o.A$.OFF), this.deregisterDrain()
                }
                syncWithSessionManager(e = {}) {
                    this.isSessionTrackingEnabled && this.agentRef.runtime.session.write(e)
                }
            }
        },
        8351: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => O
            });
            var r = i(3606),
                s = i(8154),
                n = i(6154);
            const a = "React",
                o = "NextJS",
                c = "Vue",
                h = "NuxtJS",
                u = "Angular",
                d = "AngularUniversal",
                l = "Svelte",
                p = "SvelteKit",
                f = "Preact",
                m = "PreactSSR",
                g = "AngularJS",
                v = "Backbone",
                y = "Ember",
                b = "Meteor",
                T = "Zepto",
                S = "Jquery",
                R = "MooTools",
                w = "Qwik",
                N = "Electron";

            function E() {
                if (!n.RI) return [];
                const e = [];
                try {
                    (function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "React") || Object.prototype.hasOwnProperty.call(window, "ReactDOM") || Object.prototype.hasOwnProperty.call(window, "ReactRedux") || document.querySelector("[data-reactroot], [data-reactid]") || (() => {
                                const e = document.querySelectorAll("body > div");
                                for (let t = 0; t < e.length; t++)
                                    if (Object.prototype.hasOwnProperty.call(e[t], "_reactRootContainer")) return !0
                            })()
                        } catch (e) {
                            return !1
                        }
                    })() && (e.push(a), function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "next") && Object.prototype.hasOwnProperty.call(window.next, "version")
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(o)),
                    function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "Vue")
                        } catch (e) {
                            return !1
                        }
                    }() && (e.push(c), function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "$nuxt") && Object.prototype.hasOwnProperty.call(window.$nuxt, "nuxt")
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(h)),
                    function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "ng") || document.querySelector("[ng-version]")
                        } catch (e) {
                            return !1
                        }
                    }() && (e.push(u), function() {
                        try {
                            return document.querySelector("[ng-server-context]")
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(d)),
                    function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "__svelte")
                        } catch (e) {
                            return !1
                        }
                    }() && (e.push(l), function() {
                        try {
                            return !!Object.keys(window).find((e => e.startsWith("__sveltekit")))
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(p)),
                    function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "preact")
                        } catch (e) {
                            return !1
                        }
                    }() && (e.push(f), function() {
                        try {
                            return document.querySelector('script[type="__PREACT_CLI_DATA__"]')
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(m)),
                    function() {
                        try {
                            return Object.prototype.hasOwnProperty.call(window, "angular") || document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]") || document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(g), Object.prototype.hasOwnProperty.call(window, "Backbone") && e.push(v), Object.prototype.hasOwnProperty.call(window, "Ember") && e.push(y), Object.prototype.hasOwnProperty.call(window, "Meteor") && e.push(b), Object.prototype.hasOwnProperty.call(window, "Zepto") && e.push(T), Object.prototype.hasOwnProperty.call(window, "jQuery") && e.push(S), Object.prototype.hasOwnProperty.call(window, "MooTools") && e.push(R), Object.prototype.hasOwnProperty.call(window, "qwikevents") && e.push(w),
                        function() {
                            try {
                                return "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0
                            } catch (e) {
                                return !1
                            }
                        }() && e.push(N)
                } catch (e) {}
                return e
            }
            var M = i(4284),
                A = i(5289),
                I = i(3878),
                k = i(1630),
                x = i(2123);
            class O extends k.r {
                static featureName = s.TZ;
                constructor(e) {
                    super(e, s.TZ), this.harvestOpts.aggregatorTypes = ["cm", "sm"], this.agentNonce = n.RI && document.currentScript?.nonce, this.waitForFlags(["err"]).then((([e]) => {
                        e ? (this.singleChecks(), this.eachSessionChecks(), this.drain()) : (this.blocked = !0, this.deregisterDrain())
                    })), (0, r.i)(s.xV, this.storeSupportabilityMetrics.bind(this), this.featureName, this.ee), (0, r.i)(s.XG, this.storeEventMetrics.bind(this), this.featureName, this.ee)
                }
                preHarvestChecks(e) {
                    return this.drained && e.isFinalHarvest
                }
                storeSupportabilityMetrics(e, t) {
                    if (this.blocked) return;
                    const i = s.rs,
                        r = {
                            name: e
                        };
                    this.events.addMetric(i, e, r, t)
                }
                storeEventMetrics(e, t) {
                    if (this.blocked) return;
                    const i = s.z_,
                        r = {
                            name: e
                        };
                    this.events.add([i, e, r, t])
                }
                singleChecks() {
                    const {
                        distMethod: e,
                        loaderType: t
                    } = this.agentRef.runtime, {
                        proxy: i,
                        privacy: r
                    } = this.agentRef.init;
                    if (t && this.storeSupportabilityMetrics("Generic/LoaderType/".concat(t, "/Detected")), e && this.storeSupportabilityMetrics("Generic/DistMethod/".concat(e, "/Detected")), n.RI ? (this.storeSupportabilityMetrics("Generic/Runtime/Browser/Detected"), this.agentNonce && "" !== this.agentNonce && this.storeSupportabilityMetrics("Generic/Runtime/Nonce/Detected"), (0, A.sB)((() => {
                            E().forEach((e => {
                                this.storeSupportabilityMetrics("Framework/" + e + "/Detected")
                            }))
                        })), r.cookies_enabled || this.storeSupportabilityMetrics("Config/SessionTracking/Disabled")) : n.bv ? this.storeSupportabilityMetrics("Generic/Runtime/Worker/Detected") : this.storeSupportabilityMetrics("Generic/Runtime/Unknown/Detected"), (0, M.p)() && this.storeSupportabilityMetrics("Generic/FileProtocol/Detected"), this.obfuscator.obfuscateConfigRules.length > 0 && this.storeSupportabilityMetrics("Generic/Obfuscate/Detected"), i.assets && this.storeSupportabilityMetrics("Config/AssetsUrl/Changed"), i.beacon && this.storeSupportabilityMetrics("Config/BeaconUrl/Changed"), n.RI && window.MutationObserver) {
                        (0, x.v)(window) && this.storeSupportabilityMetrics("Generic/Runtime/IFrame/Detected");
                        const e = window.document.querySelectorAll("video").length;
                        e && this.storeSupportabilityMetrics("Generic/VideoElement/Added", e);
                        const t = window.document.querySelectorAll("iframe").length;
                        t && this.storeSupportabilityMetrics("Generic/IFrame/Added", t);
                        new MutationObserver((e => {
                            e.forEach((e => {
                                e.addedNodes.forEach((e => {
                                    e instanceof HTMLVideoElement && this.storeSupportabilityMetrics("Generic/VideoElement/Added", 1), e instanceof HTMLIFrameElement && this.storeSupportabilityMetrics("Generic/IFrame/Added", 1)
                                }))
                            }))
                        })).observe(window.document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    navigator.webdriver && this.storeSupportabilityMetrics("Generic/WebDriver/Detected")
                }
                eachSessionChecks() {
                    n.RI && (0, I.sp)("pageshow", (e => {
                        e?.persisted && this.storeSupportabilityMetrics("Generic/BFCache/PageRestored")
                    }))
                }
            }
        },
        1983: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => R
            });
            var r = i(6154),
                s = i(2733),
                n = i(3304),
                a = i(2555),
                o = i(6630),
                c = i(860),
                h = i(384);

            function u(e) {
                const t = [],
                    i = (0, h.Zm)();
                try {
                    Object.keys(i.initializedAgents[e].features).forEach((e => {
                        switch (e) {
                            case c.K7.ajax:
                                t.push("xhr");
                                break;
                            case c.K7.jserrors:
                                t.push("err");
                                break;
                            case c.K7.genericEvents:
                                t.push("ins");
                                break;
                            case c.K7.sessionTrace:
                                t.push("stn");
                                break;
                            case c.K7.softNav:
                            case c.K7.spa:
                                t.push("spa")
                        }
                    }))
                } catch (e) {}
                return t
            }
            var d = i(5701),
                l = i(944),
                p = i(1630),
                f = i(5344),
                m = i(5181),
                g = i(8779),
                v = i(1863);
            class y {
                #s;
                #n;
                #a;
                #o = !1;
                constructor(e) {
                    this.#s = e, this.processStoredDiff()
                }
                get ready() {
                    return this.#o
                }
                get correctedOriginTime() {
                    return this.#n
                }
                get localTimeDiff() {
                    return this.#a
                }
                processRumRequest(e, t, i, s) {
                    if (this.processStoredDiff(), this.#o) return;
                    if (!s) throw new Error("nrServerTime not found");
                    const n = t + (i - t) / 2;
                    if (this.#n = Math.floor(s - n), this.#a = r.WN - this.#n, isNaN(this.#n)) throw new Error("Failed to correct browser time to server time");
                    this.#s?.write({
                        serverTimeDiff: this.#a
                    }), this.#o = !0
                }
                convertRelativeTimestamp(e) {
                    return r.WN + e
                }
                convertAbsoluteTimestamp(e) {
                    return e - r.WN
                }
                correctAbsoluteTimestamp(e) {
                    return e - this.#a
                }
                correctRelativeTimestamp(e) {
                    return this.correctAbsoluteTimestamp(this.convertRelativeTimestamp(e))
                }
                processStoredDiff() {
                    if (this.#o) return;
                    const e = this.#s?.read()?.serverTimeDiff;
                    "number" != typeof e || isNaN(e) || (this.#a = e, this.#n = r.WN - this.#a, this.#o = !0)
                }
            }
            var b = i(3311),
                T = i(3606),
                S = i(3496);
            class R extends p.r {
                static featureName = o.T;
                constructor(e) {
                    if (super(e, o.T), this.timeToFirstByte = 0, this.firstByteToWindowLoad = 0, this.firstByteToDomContent = 0, (0, T.i)("send-rum", ((e, t) => {
                            this.sendRum(e, t)
                        }), this.featureName, this.ee), !(0, a.f)(e.info)) return this.ee.abort(), (0, l.R)(43);
                    e.runtime.timeKeeper = new y(e.runtime.session), r.RI ? g.j.subscribe((({
                        value: e,
                        attrs: t
                    }) => {
                        const i = t.navigationEntry;
                        this.timeToFirstByte = Math.max(e, this.timeToFirstByte), this.firstByteToWindowLoad = Math.max(Math.round(i.loadEventEnd - this.timeToFirstByte), this.firstByteToWindowLoad), this.firstByteToDomContent = Math.max(Math.round(i.domContentLoadedEventEnd - this.timeToFirstByte), this.firstByteToDomContent), this.sendRum()
                    })) : this.sendRum()
                }
                sendRum(e = this.agentRef.info.jsAttributes, t = {
                    licenseKey: this.agentRef.info.licenseKey,
                    applicationID: this.agentRef.info.applicationID
                }) {
                    const i = this.agentRef.info,
                        a = {};
                    i.queueTime && (a.qt = i.queueTime), i.applicationTime && (a.ap = i.applicationTime), a.be = this.timeToFirstByte, a.fe = this.firstByteToWindowLoad, a.dc = this.firstByteToDomContent;
                    const o = {
                        tt: i.ttGuid,
                        us: i.user,
                        ac: i.account,
                        pr: i.product,
                        af: u(this.agentIdentifier).join(","),
                        ...a,
                        xx: i.extra,
                        ua: i.userAttributes,
                        at: i.atts
                    };
                    let c;
                    if (this.agentRef.runtime.session && (o.fsh = Number(this.agentRef.runtime.session.isNew)), "object" == typeof e && Object.keys(e).length > 0 && (c = (0, b.G)({
                            ja: e
                        }, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")), r.gm.performance)
                        if ("undefined" != typeof PerformanceNavigationTiming) {
                            const e = r.gm?.performance?.getEntriesByType("navigation")?.[0],
                                t = {
                                    timing: (0, s.eM)(r.WN, e, {}),
                                    navigation: (0, s.si)(e, {})
                                };
                            o.perf = (0, n.A)(t)
                        } else if ("undefined" != typeof PerformanceTiming) {
                        const e = {
                            timing: (0, s.eM)(r.WN, r.gm.performance.timing, {}, !0),
                            navigation: (0, s.si)(r.gm.performance.navigation, {})
                        };
                        o.perf = (0, n.A)(e)
                    }
                    o.fp = m.J.current.value, o.fcp = f.j.current.value;
                    const h = this.agentRef.runtime.timeKeeper;
                    h?.ready && (o.timestamp = Math.floor(h.correctRelativeTimestamp((0, v.t)()))), this.rumStartTime = (0, v.t)(), this.agentRef.runtime.harvester.triggerHarvestFor(this, {
                        directSend: {
                            targetApp: t,
                            payload: {
                                qs: o,
                                body: c
                            }
                        },
                        needResponse: !0,
                        sendEmptyBody: !0
                    })
                }
                postHarvestCleanup({
                    status: e,
                    responseText: t,
                    xhr: i,
                    targetApp: r
                }) {
                    const s = (0, v.t)();
                    let n, a;
                    try {
                        ({
                            app: n,
                            ...a
                        } = JSON.parse(t)), this.processEntities(n.agents, r)
                    } catch (e) {
                        (0, l.R)(53, e)
                    }
                    if ((0, S.A)(r, this.agentRef)) {
                        if (e >= 400 || 0 === e) return (0, l.R)(18, e), void this.ee.abort();
                        try {
                            const e = this.agentRef.runtime.timeKeeper.ready;
                            if (this.agentRef.runtime.timeKeeper.processRumRequest(i, this.rumStartTime, s, n.nrServerTime), !this.agentRef.runtime.timeKeeper.ready) throw new Error("TimeKeeper not ready");
                            const t = this.agentRef.runtime.timeKeeper.correctedOriginTime - n.nrServerTime;
                            e && t > 0 && this.reportSupportabilityMetric("Generic/TimeKeeper/InvalidTimestamp/Seen", t)
                        } catch (e) {
                            return this.ee.abort(), void(0, l.R)(17, e)
                        }
                        Object.keys(this.agentRef.runtime.appMetadata).length || (this.agentRef.runtime.appMetadata = n), this.drain(), this.agentRef.runtime.harvester.startTimer(), (0, d.t)(a, this.agentRef)
                    }
                }
                processEntities(e, t) {
                    e && t && e.forEach((e => {
                        const i = this.agentRef.runtime.entityManager,
                            r = e.entityGuid;
                        i.get(r) || ((0, S.A)(t, this.agentRef) && i.setDefaultEntity({
                            ...t,
                            entityGuid: r
                        }), i.set(e.entityGuid, {
                            ...t,
                            entityGuid: r
                        }))
                    }))
                }
            }
        },
        9917: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => R
            });
            var r = i(5519),
                s = i(3606),
                n = i(9908),
                a = i(782),
                o = i(860),
                c = i(1630),
                h = i(7226),
                u = i(1083),
                d = i(6773),
                l = i(6154);
            const p = new d.x(u.w.CUMULATIVE_LAYOUT_SHIFT, (e => e));
            l.RI && (0, h.IN)((({
                value: e,
                attribution: t,
                id: i
            }) => {
                const r = {
                    metricId: i,
                    largestShiftTarget: t.largestShiftTarget,
                    largestShiftTime: t.largestShiftTime,
                    largestShiftValue: t.largestShiftValue,
                    loadState: t.loadState
                };
                p.update({
                    value: e,
                    attrs: r
                })
            }), {
                reportAllChanges: !0
            });
            var f = i(5344),
                m = i(5181);
            const g = new d.x(u.w.INTERACTION_TO_NEXT_PAINT);
            l.RI && (0, h.rH)((({
                value: e,
                attribution: t,
                id: i
            }) => {
                const r = {
                    metricId: i,
                    eventTarget: t.interactionTarget,
                    eventTime: t.interactionTime,
                    interactionTarget: t.interactionTarget,
                    interactionTime: t.interactionTime,
                    interactionType: t.interactionType,
                    inputDelay: t.inputDelay,
                    nextPaintTime: t.nextPaintTime,
                    processingDuration: t.processingDuration,
                    presentationDelay: t.presentationDelay,
                    loadState: t.loadState
                };
                g.update({
                    value: e,
                    attrs: r
                })
            }));
            var v = i(9119);
            const y = new d.x(u.w.LARGEST_CONTENTFUL_PAINT);
            l.RI && (0, h.fK)((({
                value: e,
                attribution: t
            }) => {
                if (l.mw || y.isValid) return;
                let i;
                const r = t.lcpEntry;
                r && (i = {
                    size: r.size,
                    eid: r.id,
                    element: t.element,
                    timeToFirstByte: t.timeToFirstByte,
                    resourceLoadDelay: t.resourceLoadDelay,
                    resourceLoadDuration: t.resourceLoadDuration,
                    resourceLoadTime: t.resourceLoadDuration,
                    elementRenderDelay: t.elementRenderDelay
                }, t.url && (i.elUrl = (0, v.L)(t.url)), r.element?.tagName && (i.elTag = r.element.tagName)), y.update({
                    value: e,
                    attrs: i
                })
            }));
            var b = i(8779),
                T = i(2843),
                S = i(1528);
            class R extends c.r {
                static featureName = a.T;
                #c = ({
                    name: e,
                    value: t,
                    attrs: i
                }) => {
                    this.addTiming(e, t, i)
                };
                constructor(e) {
                    super(e, a.T), this.curSessEndRecorded = !1, this.firstIxnRecorded = !1, (0, s.i)("docHidden", (e => this.endCurrentSession(e)), this.featureName, this.ee), (0, s.i)("winPagehide", (e => this.addTiming("unload", e, null)), this.featureName, this.ee), this.waitForFlags([]).then((() => {
                        m.J.subscribe(this.#c), f.j.subscribe(this.#c), y.subscribe(this.#c), g.subscribe(this.#c), b.j.subscribe((({
                            attrs: e
                        }) => {
                            this.addTiming("load", Math.round(e.navigationEntry.loadEventEnd))
                        })), (0, T.u)((() => {
                            const {
                                name: e,
                                value: t,
                                attrs: i
                            } = p.current;
                            void 0 !== t && this.addTiming(e, 1e3 * t, i)
                        }), !0, !0), this.drain()
                    }))
                }
                endCurrentSession(e) {
                    this.curSessEndRecorded || (this.addTiming("pageHide", e, null), this.curSessEndRecorded = !0)
                }
                addTiming(e, t, i) {
                    (function(e) {
                        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        if (!t) return;
                        t.type && (e["net-type"] = t.type);
                        t.effectiveType && (e["net-etype"] = t.effectiveType);
                        t.rtt && (e["net-rtt"] = t.rtt);
                        t.downlink && (e["net-dlink"] = t.downlink)
                    })(i = i || {}), e !== u.w.CUMULATIVE_LAYOUT_SHIFT && p.current.value >= 0 && (i.cls = p.current.value);
                    const r = {
                        name: e,
                        value: t,
                        attrs: i
                    };
                    return this.events.add(r), (0, n.p)("pvtAdded", [e, t, i], void 0, o.K7.sessionTrace, this.ee), this.checkForFirstInteraction(), r
                }
                checkForFirstInteraction() {
                    if (this.firstIxnRecorded || l.mw || !performance) return;
                    const e = performance.getEntriesByType("first-input")[0];
                    e && (this.firstIxnRecorded = !0, this.addTiming("fi", e.startTime, {
                        type: e.name,
                        eventTarget: (0, S.t)(e.target),
                        loadState: document.readyState
                    }))
                }
                appendGlobalCustomAttributes(e) {
                    var t = e.attrs || {},
                        i = ["size", "eid", "cls", "type", "fid", "elTag", "elUrl", "net-type", "net-etype", "net-rtt", "net-dlink"];
                    Object.entries(this.agentRef.info.jsAttributes || {}).forEach((([e, r]) => {
                        i.indexOf(e) < 0 && (t[e] = r)
                    }))
                }
                preHarvestChecks() {
                    return this.checkForFirstInteraction(), super.preHarvestChecks()
                }
                serializer(e) {
                    for (var t = (0, r.uJ)(this.agentRef.runtime.obfuscator), i = "bel.6;", s = 0; s < e.length; s++) {
                        var n = e[s];
                        i += "e,", i += t(n.name) + ",", i += (0, r.me)(n.value, r.sH, !1) + ",", this.appendGlobalCustomAttributes(n);
                        var a = (0, r.AQ)(n.attrs, t);
                        a && a.length > 0 && (i += (0, r.sH)(a.length) + ";" + a.join(";")), s + 1 < e.length && (i += ";")
                    }
                    return i
                }
            }
        },
        6167: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => S
            });
            var r = i(3606),
                s = i(6344),
                n = i(1630);
            let a;
            const o = new Promise((e => {
                    a = e
                })),
                c = Object.freeze({
                    onReplayReady: a,
                    sessionReplayInitialized: o
                });
            var h = i(3762),
                u = i(944),
                d = i(6154),
                l = i(9324),
                p = i(2614),
                f = i(3304),
                m = i(5851),
                g = i(1863),
                v = i(5270),
                y = i(7699),
                b = i(9119),
                T = i(7767);
            class S extends n.r {
                static featureName = s.TZ;
                mode = p.g.OFF;
                constructor(e, t) {
                    super(e, s.TZ), this.initialized = !1, this.blocked = !1, this.gzipper = void 0, this.u8 = void 0, this.entitled = !1, this.timeKeeper = void 0, this.recorder = t?.recorder, this.errorNoticed = t?.errorNoticed || !1, this.harvestOpts.raw = !0, this.isSessionTrackingEnabled = (0, T.V)(e.init) && !!e.runtime.session, this.reportSupportabilityMetric("Config/SessionReplay/Enabled"), this.ee.on(p.tS.RESET, (() => {
                        this.abort(s.bc.RESET)
                    })), this.ee.on(p.tS.PAUSE, (() => {
                        this.recorder?.stopRecording()
                    })), this.ee.on(p.tS.RESUME, (() => {
                        this.recorder && (this.mode = e.runtime.session.state.sessionReplayMode, this.initialized && this.mode !== p.g.OFF && this.recorder?.startRecording())
                    })), this.ee.on(p.tS.UPDATE, ((e, t) => {
                        this.recorder && this.initialized && !this.blocked && e === p.iL.CROSS_TAB && (this.mode !== p.g.OFF && t.sessionReplayMode === p.g.OFF && this.abort(s.bc.CROSS_TAB), this.mode = t.sessionReplayMode)
                    })), (0, r.i)(s.G4.PAUSE, (() => {
                        this.forceStop(this.mode === p.g.FULL)
                    }), this.featureName, this.ee), (0, r.i)(s.G4.ERROR_DURING_REPLAY, (e => {
                        this.handleError(e)
                    }), this.featureName, this.ee);
                    const {
                        error_sampling_rate: i,
                        sampling_rate: n,
                        autoStart: a,
                        block_selector: o,
                        mask_text_selector: h,
                        mask_all_inputs: u,
                        inline_images: d,
                        collect_fonts: l
                    } = e.init.session_replay;
                    this.waitForFlags(["srs", "sr"]).then((([e, t]) => {
                        if (this.entitled = !!t, !this.entitled) return this.deregisterDrain(), void(this.agentRef.runtime.isRecording && (this.abort(s.bc.ENTITLEMENTS), this.reportSupportabilityMetric("SessionReplay/EnabledNotEntitled/Detected")));
                        this.drain(), this.initializeRecording(e)
                    })).then((() => {
                        if (this.mode === p.g.OFF)
                            for (this.recorder?.stopRecording(); this.recorder?.getEvents().events.length;) this.recorder?.clearBuffer?.();
                        c.onReplayReady(this.mode)
                    })), a || this.reportSupportabilityMetric("Config/SessionReplay/AutoStart/Modified"), !0 === l && this.reportSupportabilityMetric("Config/SessionReplay/CollectFonts/Modified"), !0 === d && this.reportSupportabilityMetric("Config/SessionReplay/InlineImages/Modifed"), !0 !== u && this.reportSupportabilityMetric("Config/SessionReplay/MaskAllInputs/Modified"), "[data-nr-block]" !== o && this.reportSupportabilityMetric("Config/SessionReplay/BlockSelector/Modified"), "*" !== h && this.reportSupportabilityMetric("Config/SessionReplay/MaskTextSelector/Modified"), this.reportSupportabilityMetric("Config/SessionReplay/SamplingRate/Value", n), this.reportSupportabilityMetric("Config/SessionReplay/ErrorSamplingRate/Value", i)
                }
                replayIsActive() {
                    return Boolean(this.recorder && this.mode === p.g.FULL && !this.blocked && this.entitled)
                }
                handleError(e) {
                    this.recorder && (this.recorder.currentBufferTarget.hasError = !0), this.mode === p.g.ERROR && "visible" === d.gm?.document.visibilityState && this.switchToFull()
                }
                switchToFull() {
                    this.entitled && !this.blocked && (this.mode = p.g.FULL, this.recorder && this.initialized ? (this.agentRef.runtime.isRecording || this.recorder.startRecording(), this.syncWithSessionManager({
                        sessionReplayMode: this.mode
                    })) : this.initializeRecording(p.g.FULL, !0))
                }
                async initializeRecording(e, t) {
                    if (this.initialized = !0, !this.entitled) return;
                    const {
                        session: r,
                        timeKeeper: n
                    } = this.agentRef.runtime;
                    if (this.timeKeeper = n, this.recorder?.parent.trigger === s.Qb.API && this.agentRef.runtime.isRecording ? this.mode = p.g.FULL : r.isNew || t ? this.mode = e : this.mode = r.state.sessionReplayMode, this.mode !== p.g.OFF) {
                        if (this.recorder) this.recorder.parent = this;
                        else try {
                            const {
                                Recorder: e
                            } = await Promise.all([i.e(478), i.e(249)]).then(i.bind(i, 8589));
                            this.recorder = new e(this), this.recorder.currentBufferTarget.hasError = this.errorNoticed
                        } catch (e) {
                            return this.abort(s.bc.IMPORT)
                        }
                        this.mode === p.g.ERROR && this.errorNoticed && (this.mode = p.g.FULL), this.mode === p.g.FULL && "preloaded" === this.recorder?.getEvents().type && this.prepUtils().then((() => this.agentRef.runtime.harvester.triggerHarvestFor(this))), await this.prepUtils(), this.agentRef.runtime.isRecording || this.recorder.startRecording(), this.syncWithSessionManager({
                            sessionReplayMode: this.mode
                        })
                    }
                }
                async prepUtils() {
                    try {
                        const {
                            gzipSync: e,
                            strToU8: t
                        } = await i.e(212).then(i.bind(i, 9861));
                        this.gzipper = e, this.u8 = t
                    } catch (e) {}
                }
                makeHarvestPayload(e) {
                    const t = {
                        targetApp: void 0,
                        payload: void 0
                    };
                    if (this.mode !== p.g.FULL || this.blocked) return;
                    if (!this.recorder || !this.timeKeeper?.ready || !this.recorder.hasSeenSnapshot) return;
                    const i = this.recorder.getEvents();
                    if (!i.events.length) return;
                    const r = this.getHarvestContents(i);
                    if (!r.body.length) return this.recorder.clearBuffer(), [t];
                    this.reportSupportabilityMetric("SessionReplay/Harvest/Attempts");
                    let n = 0;
                    return this.gzipper && this.u8 ? (r.body = this.gzipper(this.u8("[".concat(r.body.map((({
                        __serialized: e,
                        ...t
                    }) => {
                        if (t.__newrelic && e) return e;
                        const i = {
                            ...t
                        };
                        return i.__newrelic || (i.__newrelic = (0, v.CT)(t.timestamp, this.timeKeeper), i.timestamp = this.timeKeeper.correctAbsoluteTimestamp(t.timestamp)), (0, f.A)(i)
                    })).join(","), "]"))), n = r.body.length) : (r.body = r.body.map((({
                        __serialized: e,
                        ...t
                    }) => {
                        if (t.__newrelic) return t;
                        const i = {
                            ...t
                        };
                        return i.__newrelic = (0, v.CT)(t.timestamp, this.timeKeeper), i.timestamp = this.timeKeeper.correctAbsoluteTimestamp(t.timestamp), i
                    })), n = (0, f.A)(r.body).length), n > y.It ? (this.abort(s.bc.TOO_BIG, n), [t]) : (this.agentRef.runtime.session.state.sessionReplaySentFirstChunk || this.syncWithSessionManager({
                        sessionReplaySentFirstChunk: !0
                    }), this.recorder.clearBuffer(), "preloaded" === i.type && this.agentRef.runtime.harvester.triggerHarvestFor(this), t.payload = r, this.agentRef.runtime.session.state.traceHarvestStarted || (0, u.R)(59, JSON.stringify(this.agentRef.runtime.session.state)), [t])
                }
                getCorrectedTimestamp(e) {
                    if (e?.timestamp) return e.__newrelic ? e.timestamp : this.timeKeeper.correctAbsoluteTimestamp(e.timestamp)
                }
                getHarvestContents(e) {
                    e ??= this.recorder.getEvents();
                    let t = e.events;
                    const i = this.agentRef.runtime,
                        r = this.agentRef.info.jsAttributes?.["enduser.id"];
                    t?.[0]?.type === s._s.FullSnapshot && this.recorder.lastMeta && (e.hasMeta = !0, t.unshift(this.recorder.lastMeta), this.recorder.lastMeta = void 0);
                    t[t.length - 1]?.type === s._s.Meta && (this.recorder.lastMeta = t[t.length - 1], t = t.slice(0, t.length - 1), e.hasMeta = !!t.find((e => e.type === s._s.Meta)));
                    const n = (0, g.t)(),
                        a = this.getCorrectedTimestamp(t[0]),
                        o = this.getCorrectedTimestamp(t[t.length - 1]),
                        c = a || Math.floor(this.timeKeeper.correctAbsoluteTimestamp(e.cycleTimestamp)),
                        u = o || Math.floor(this.timeKeeper.correctRelativeTimestamp(n)),
                        d = i.appMetadata?.agents?.[0] || {};
                    return {
                        qs: {
                            browser_monitoring_key: this.agentRef.info.licenseKey,
                            type: "SessionReplay",
                            app_id: this.agentRef.info.applicationID,
                            protocol_version: "0",
                            timestamp: c,
                            attributes: (0, h.WL)({
                                ...!!this.gzipper && !!this.u8 && {
                                    content_encoding: "gzip"
                                },
                                ...d.entityGuid && {
                                    entityGuid: d.entityGuid
                                },
                                harvestId: [i.session?.state.value, i.ptid, i.harvestCount].filter((e => e)).join("_"),
                                "replay.firstTimestamp": c,
                                "replay.lastTimestamp": u,
                                "replay.nodes": t.length,
                                "session.durationMs": i.session.getDuration(),
                                agentVersion: i.version,
                                session: i.session.state.value,
                                rst: n,
                                hasMeta: e.hasMeta || !1,
                                hasSnapshot: e.hasSnapshot || !1,
                                hasError: e.hasError || !1,
                                isFirstChunk: !1 === i.session.state.sessionReplaySentFirstChunk,
                                decompressedBytes: e.payloadBytesEstimation,
                                invalidStylesheetsDetected: m.m.invalidStylesheetsDetected,
                                inlinedAllStylesheets: e.inlinedAllStylesheets,
                                "rrweb.version": l.Yq,
                                "payload.type": e.type,
                                ...r && {
                                    "enduser.id": this.obfuscator.obfuscateString(r)
                                },
                                currentUrl: this.obfuscator.obfuscateString((0, b.L)("" + location))
                            }, s.BB).substring(1)
                        },
                        body: t
                    }
                }
                postHarvestCleanup(e) {
                    429 === e.status && this.abort(s.bc.TOO_MANY)
                }
                forceStop(e) {
                    e && this.agentRef.runtime.harvester.triggerHarvestFor(this), this.mode = p.g.OFF, this.recorder?.stopRecording?.(), this.syncWithSessionManager({
                        sessionReplayMode: this.mode
                    })
                }
                abort(e = {}, t) {
                    for ((0, u.R)(33, e.message), this.reportSupportabilityMetric("SessionReplay/Abort/".concat(e.sm), t), this.blocked = !0, this.mode = p.g.OFF, this.recorder?.stopRecording?.(), this.syncWithSessionManager({
                            sessionReplayMode: this.mode
                        }), this.recorder?.clearTimestamps?.(); this.recorder?.getEvents().events.length;) this.recorder?.clearBuffer?.()
                }
                syncWithSessionManager(e = {}) {
                    this.isSessionTrackingEnabled && this.agentRef.runtime.session.write(e)
                }
            }
        },
        5851: (e, t, i) => {
            i.d(t, {
                m: () => n
            });
            var r = i(384),
                s = i(6154);
            const n = new class {
                #h = new WeakSet;
                #u = [];
                invalidStylesheetsDetected = !1;
                failedToFix = 0;
                evaluate() {
                    let e = 0;
                    if (this.#u = [], s.RI)
                        for (let t = 0; t < Object.keys(document.styleSheets).length; t++)
                            if (!this.#h.has(document.styleSheets[t]) && document.styleSheets[t] instanceof CSSStyleSheet) {
                                this.#h.add(document.styleSheets[t]);
                                try {
                                    document.styleSheets[t].cssRules
                                } catch (i) {
                                    if (!document.styleSheets[t].href) return;
                                    e++, this.#u.push(document.styleSheets[t])
                                }
                            } return e && (this.invalidStylesheetsDetected = !0), e
                }
                async fix() {
                    await Promise.all(this.#u.map((e => this.#d(e)))), this.#u = [];
                    const e = this.failedToFix;
                    return this.failedToFix = 0, e
                }
                async #d(e) {
                    if (e?.href) try {
                        const t = await (0, r.dV)().o.FETCH.bind(window)(e.href);
                        if (!t.ok) return void this.failedToFix++;
                        const i = await t.text();
                        try {
                            const t = new CSSStyleSheet;
                            await t.replace(i), Object.defineProperty(e, "cssRules", {
                                get: () => t.cssRules
                            }), Object.defineProperty(e, "rules", {
                                get: () => t.rules
                            })
                        } catch (t) {
                            Object.defineProperty(e, "cssText", {
                                get: () => i
                            }), this.failedToFix++
                        }
                    } catch (e) {
                        this.failedToFix++
                    }
                }
            }
        },
        575: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => T
            });
            var r = i(3606),
                s = i(3738),
                n = i(1630),
                a = i(6154),
                o = i(2614),
                c = i(1863),
                h = i(7485),
                u = i(1528);
            class d {
                constructor(e, t, i, r, s) {
                    this.n = e, this.s = t, this.e = i, this.o = r, this.t = s
                }
            }
            const l = "function" == typeof a.gm.PerformanceObserver,
                p = {
                    global: {
                        mouseup: !0,
                        mousedown: !0,
                        mousemove: !0
                    },
                    window: {
                        load: !0,
                        pagehide: !0
                    },
                    xhrOriginMissing: {
                        ignoreAll: !0
                    }
                },
                f = {
                    typing: [1e3, 2e3],
                    scrolling: [100, 1e3],
                    mousing: [1e3, 2e3],
                    touching: [1e3, 2e3]
                };
            class m {
                nodeCount = 0;
                trace = {};
                earliestTimeStamp = 1 / 0;
                latestTimeStamp = 0;
                prevStoredEvents = new Set;
                #l;
                constructor(e) {
                    this.parent = e
                }
                #p() {
                    if (this.parent.blocked) return !1;
                    if (this.nodeCount >= s.jx) {
                        if (this.parent.mode !== o.g.ERROR) return !1;
                        if (0 === this.trimSTNs(3e4)) return !1
                    }
                    return !0
                }
                #f(e) {
                    this.trace[e.n] ? this.trace[e.n].push(e) : this.trace[e.n] = [e], e.s < this.earliestTimeStamp && (this.earliestTimeStamp = e.s), e.s > this.latestTimeStamp && (this.latestTimeStamp = e.s), this.nodeCount++
                }
                trimSTNs(e) {
                    let t = 0;
                    const i = Math.max((0, c.t)() - e, 0);
                    return Object.keys(this.trace).forEach((e => {
                        const r = this.trace[e];
                        let s = r.findIndex((e => i <= e.e));
                        0 !== s && (s < 0 ? (s = r.length, delete this.trace[e]) : r.splice(0, s), this.nodeCount -= s, t += s)
                    })), t
                }
                takeSTNs() {
                    l || this.storeResources(a.gm.performance?.getEntriesByType?.("resource"));
                    return {
                        stns: Object.entries(this.trace).flatMap((([e, t]) => {
                            if (!(e in f)) return t;
                            const i = this.smearEvtsByOrigin(e),
                                r = t.sort(((e, t) => e.s - t.s)).reduce(i, {});
                            return Object.values(r).flat()
                        }), this),
                        earliestTimeStamp: this.earliestTimeStamp,
                        latestTimeStamp: this.latestTimeStamp
                    }
                }
                smearEvtsByOrigin(e) {
                    const t = f[e][0],
                        i = f[e][1],
                        r = {};
                    return (s, n) => {
                        let a = s[n.o];
                        a || (a = s[n.o] = []);
                        const o = r[n.o];
                        return "scrolling" !== e || function(e) {
                            const t = 4;
                            return !!(e && "number" == typeof e.e && "number" == typeof e.s && e.e - e.s < t)
                        }(n) ? o && n.s - o.s < i && o.e > n.s - t ? o.e = n.e : (r[n.o] = n, a.push(n)) : (r[n.o] = null, n.n = "scroll", a.push(n)), s
                    }
                }
                storeNode(e) {
                    this.#p() && this.#f(e)
                }
                processPVT(e, t, i) {
                    this.storeTiming({
                        [e]: t
                    })
                }
                storeTiming(e, t = !1) {
                    if (e)
                        for (let i in e) {
                            let r = e[i];
                            const s = i.toLowerCase();
                            if (!(s.indexOf("size") >= 0 || s.indexOf("status") >= 0) && ("number" == typeof r && r >= 0)) {
                                if (r = Math.round(r), this.parent.timeKeeper && this.parent.timeKeeper.ready && t && (r = this.parent.timeKeeper.convertAbsoluteTimestamp(Math.floor(this.parent.timeKeeper.correctAbsoluteTimestamp(r)))), !this.#p()) return;
                                this.#f(new d(i, r, r, "document", "timing"))
                            }
                        }
                }
                storeEvent(e, t, i, r) {
                    if (this.shouldIgnoreEvent(e, t)) return;
                    if (!this.#p()) return;
                    if (this.prevStoredEvents.has(e)) return;
                    this.prevStoredEvents.add(e);
                    const s = new d(this.evtName(e.type), i, r, void 0, "event");
                    try {
                        s.o = (0, u.t)(e.target, t, this.parent.ee)
                    } catch (e) {
                        s.o = (0, u.t)(null, t, this.parent.ee)
                    }
                    this.#f(s)
                }
                shouldIgnoreEvent(e, t) {
                    if (e.type in p.global) return !0;
                    const i = (0, u.t)(e.target, t, this.parent.ee);
                    return !(!p[i] || !p[i].ignoreAll) || !(!p[i] || !(e.type in p[i]))
                }
                evtName(e) {
                    switch (e) {
                        case "keydown":
                        case "keyup":
                        case "keypress":
                            return "typing";
                        case "mousemove":
                        case "mouseenter":
                        case "mouseleave":
                        case "mouseover":
                        case "mouseout":
                            return "mousing";
                        case "scroll":
                            return "scrolling";
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                        case "touchcancel":
                        case "touchenter":
                        case "touchleave":
                            return "touching";
                        default:
                            return e
                    }
                }
                storeHist(e, t, i) {
                    this.#p() && this.#f(new d("history.pushState", i, i, e, t))
                }
                #m = 0;
                storeResources(e) {
                    if (e && 0 !== e.length) {
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t];
                            if ((0 | i.fetchStart) <= this.#m) continue;
                            if (!this.#p()) break;
                            const {
                                initiatorType: r,
                                fetchStart: s,
                                responseEnd: n,
                                entryType: a
                            } = i, {
                                protocol: o,
                                hostname: c,
                                port: u,
                                pathname: l
                            } = (0, h.D)(i.name), p = new d(r, 0 | s, 0 | n, "".concat(o, "://").concat(c, ":").concat(u).concat(l), a);
                            this.#f(p)
                        }
                        this.#m = 0 | e[e.length - 1].fetchStart
                    }
                }
                storeErrorAgg(e, t, i, r) {
                    "err" === e && this.#p() && this.#f(new d("error", r.time, r.time, i.message, i.stackHash))
                }
                storeXhrAgg(e, t, i, r) {
                    "xhr" === e && this.#p() && this.#f(new d("Ajax", r.time, r.time + r.duration, "".concat(i.status, " ").concat(i.method, ": ").concat(i.host).concat(i.pathname), "ajax"))
                }
                isEmpty() {
                    return 0 === this.nodeCount
                }
                save() {
                    this.#l = this.trace
                }
                get() {
                    return [{
                        targetApp: this.parent.agentRef.runtime.entityManager.get(),
                        data: this.takeSTNs()
                    }]
                }
                clear() {
                    this.trace = {}, this.nodeCount = 0, this.prevStoredEvents.clear(), this.earliestTimeStamp = 1 / 0, this.latestTimeStamp = 0
                }
                reloadSave() {
                    for (const e of Object.values(this.#l))
                        for (const t of e) {
                            if (!this.#p()) return;
                            this.#f(t)
                        }
                }
                clearSave() {
                    this.#l = void 0
                }
            }
            var g = i(3762),
                v = i(3311),
                y = i(9119),
                b = i(944);
            class T extends n.r {
                static featureName = s.TZ;
                constructor(e) {
                    super(e, s.TZ), this.harvestOpts.raw = !0, this.entitled = void 0, this.everHarvested = !1, this.harvesting = !1, this.events = new m(this), this.waitForFlags(["sts", "st"]).then((([e, t]) => this.initialize(e, t)))
                }
                initialize(e, t, i) {
                    return this.entitled ??= t, this.entitled || (this.blocked = !0), this.blocked ? this.deregisterDrain() : (this.initialized || (this.initialized = !0, this.ptid = this.agentRef.runtime.ptid, this.sessionId = this.agentRef.runtime.session?.state.value, this.ee.on(o.tS.RESET, (() => {
                        this.blocked || this.abort(1)
                    })), this.ee.on(o.tS.UPDATE, ((e, t) => {
                        this.blocked || (this.mode === o.g.FULL || t.sessionReplayMode !== o.g.FULL && t.sessionTraceMode !== o.g.FULL || this.switchToFull(), (this.sessionId !== t.value || "cross-tab" === e && t.sessionTraceMode === o.g.OFF) && this.abort(2))
                    })), "undefined" != typeof PerformanceNavigationTiming ? this.events.storeTiming(a.gm.performance?.getEntriesByType?.("navigation")[0]) : this.events.storeTiming(a.gm.performance?.timing, !0)), this.agentRef.runtime.session.isNew || i ? this.mode = e : this.mode = this.agentRef.runtime.session.state.sessionTraceMode, this.mode === o.g.OFF ? this.deregisterDrain() : (this.timeKeeper ??= this.agentRef.runtime.timeKeeper, (0, r.i)("bst", ((...e) => this.events.storeEvent(...e)), this.featureName, this.ee), (0, r.i)("bstResource", ((...e) => this.events.storeResources(...e)), this.featureName, this.ee), (0, r.i)("bstHist", ((...e) => this.events.storeHist(...e)), this.featureName, this.ee), (0, r.i)("bstXhrAgg", ((...e) => this.events.storeXhrAgg(...e)), this.featureName, this.ee), (0, r.i)("bstApi", ((...e) => this.events.storeNode(...e)), this.featureName, this.ee), (0, r.i)("trace-jserror", ((...e) => this.events.storeErrorAgg(...e)), this.featureName, this.ee), (0, r.i)("pvtAdded", ((...e) => this.events.processPVT(...e)), this.featureName, this.ee), this.mode !== o.g.FULL && (0, r.i)("trace-jserror", (() => {
                        this.mode === o.g.ERROR && this.switchToFull()
                    }), this.featureName, this.ee), this.agentRef.runtime.session.write({
                        sessionTraceMode: this.mode
                    }), this.drain(), void this.agentRef.runtime.harvester.triggerHarvestFor(this)))
                }
                preHarvestChecks() {
                    if (!this.blocked && this.mode === o.g.FULL && this.timeKeeper?.ready && this.agentRef.runtime.session) {
                        if (this.sessionId === this.agentRef.runtime.session.state.value && this.ptid === this.agentRef.runtime.ptid) return !0;
                        this.abort(3)
                    }
                }
                serializer({
                    stns: e
                }) {
                    if (e.length) return this.everHarvested = !0, (0, v.G)(e, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                }
                queryStringsBuilder({
                    stns: e,
                    earliestTimeStamp: t,
                    latestTimeStamp: i
                }) {
                    const r = !this.agentRef.runtime.session.state.traceHarvestStarted;
                    r && this.agentRef.runtime.session.write({
                        traceHarvestStarted: !0
                    });
                    const s = 1 === this.agentRef.runtime.session.state.sessionReplayMode,
                        n = this.agentRef.info.jsAttributes["enduser.id"],
                        a = this.agentRef.runtime.appMetadata.agents?.[0]?.entityGuid;
                    return {
                        browser_monitoring_key: this.agentRef.info.licenseKey,
                        type: "BrowserSessionChunk",
                        app_id: this.agentRef.info.applicationID,
                        protocol_version: "0",
                        timestamp: Math.floor(this.timeKeeper.correctRelativeTimestamp(t)),
                        attributes: (0, g.WL)({
                            ...a && {
                                entityGuid: a
                            },
                            harvestId: "".concat(this.agentRef.runtime.session.state.value, "_").concat(this.agentRef.runtime.ptid, "_").concat(this.agentRef.runtime.harvestCount),
                            "trace.firstTimestamp": Math.floor(this.timeKeeper.correctRelativeTimestamp(t)),
                            "trace.lastTimestamp": Math.floor(this.timeKeeper.correctRelativeTimestamp(i)),
                            "trace.nodes": e.length,
                            "trace.originTimestamp": this.timeKeeper.correctedOriginTime,
                            agentVersion: this.agentRef.runtime.version,
                            ...r && {
                                firstSessionHarvest: r
                            },
                            ...s && {
                                hasReplay: s
                            },
                            ptid: "".concat(this.ptid),
                            session: "".concat(this.sessionId),
                            ...n && {
                                "enduser.id": this.obfuscator.obfuscateString(n)
                            },
                            currentUrl: this.obfuscator.obfuscateString((0, y.L)("" + location))
                        }, 5e3).substring(1)
                    }
                }
                switchToFull() {
                    if (this.mode === o.g.FULL || !this.entitled || this.blocked) return;
                    const e = this.mode;
                    if (this.mode = o.g.FULL, this.agentRef.runtime.session.write({
                            sessionTraceMode: this.mode
                        }), e === o.g.OFF || !this.initialized) return this.initialize(this.mode, this.entitled);
                    this.initialized && (this.events.trimSTNs(3e4), this.agentRef.runtime.harvester.triggerHarvestFor(this))
                }
                abort(e) {
                    (0, b.R)(60, e), this.blocked = !0, this.mode = o.g.OFF, this.agentRef.runtime.session.write({
                        sessionTraceMode: this.mode
                    }), this.events.clear()
                }
            }
        },
        4393: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => w
            });
            var r = i(9908),
                s = i(3606),
                n = i(6389),
                a = i(8779),
                o = i(860),
                c = i(1630),
                h = i(3962),
                u = i(5519);
            let d = 0;
            class l {
                belType;
                children = [];
                start;
                end;
                callbackEnd = 0;
                callbackDuration = 0;
                nodeId = ++d;
                constructor(e) {
                    this.obfuscator = e.runtime.obfuscator, this.info = e.info
                }
                addChild(e) {
                    this.children.push(e)
                }
                serialize() {}
            }
            class p extends l {
                constructor(e, t) {
                    super(e), this.belType = h.Qu.AJAX, this.method = t.method, this.status = t.status, this.domain = t.domain, this.path = t.path, this.txSize = t.requestSize, this.rxSize = t.responseSize, this.requestedWith = "fetch" === t.type ? 1 : "", this.spanId = t.spanId, this.traceId = t.traceId, this.spanTimestamp = t.spanTimestamp, this.gql = t.gql, this.start = t.startTime, this.end = t.endTime
                }
                serialize(e) {
                    const t = (0, u.uJ)(this.obfuscator),
                        i = [],
                        r = [(0, u.sH)(this.belType), 0, (0, u.sH)(this.start - e), (0, u.sH)(this.end - this.start), (0, u.sH)(this.callbackEnd), (0, u.sH)(this.callbackDuration), t(this.method), (0, u.sH)(this.status), t(this.domain), t(this.path), (0, u.sH)(this.txSize), (0, u.sH)(this.rxSize), this.requestedWith, t(this.nodeId), (0, u.me)(this.spanId, t, !0) + (0, u.me)(this.traceId, t, !0) + (0, u.me)(this.spanTimestamp, u.sH)];
                    let s = [];
                    return "object" == typeof this.gql && (s = (0, u.AQ)(this.gql, t)), this.children.forEach((e => s.push(e.serialize()))), r[1] = (0, u.sH)(s.length), i.push(r), s.length && i.push(s.join(";")), i.join(";")
                }
            }
            var f = i(2733),
                m = i(6154),
                g = i(9566),
                v = i(1863),
                y = i(9119);
            class b extends l {
                id = (0, g.bz)();
                initialPageURL = m.m;
                customName;
                customAttributes = {};
                customDataByApi = {};
                queueTime;
                appTime;
                newRoute;
                status = h.ih.IP;
                domTimestamp = 0;
                historyTimestamp = 0;
                createdByApi = !1;
                keepOpenUntilEndApi = !1;
                onDone = [];
                cancellationTimer;
                constructor(e, t, i, r, s) {
                    super(e), this.belType = h.Qu.INTERACTION, this.trigger = t, this.start = i, this.oldRoute = r, this.eventSubscription = new Map([
                        ["finished", []],
                        ["cancelled", []]
                    ]), this.forceSave = this.forceIgnore = !1, this.trigger === h.AM && (this.createdByApi = !0), this.newURL = this.oldURL = s || m.gm?.location.href
                }
                updateDom(e) {
                    this.domTimestamp = e || (0, v.t)()
                }
                updateHistory(e, t) {
                    this.newURL = t || "" + m.gm?.location, this.historyTimestamp = e || (0, v.t)()
                }
                seenHistoryAndDomChange() {
                    return this.historyTimestamp > 0 && this.domTimestamp > this.historyTimestamp
                }
                on(e, t) {
                    if (!this.eventSubscription.has(e)) throw new Error("Cannot subscribe to non pre-defined events.");
                    if ("function" != typeof t) throw new Error("Must supply function as callback.");
                    this.eventSubscription.get(e).push(t)
                }
                done(e) {
                    return (!this.keepOpenUntilEndApi || void 0 !== e) && (this.status !== h.ih.IP || (this.onDone.forEach((e => e(this.customDataByApi))), this.forceIgnore ? this.#g() : this.seenHistoryAndDomChange() ? this.#v(e) : this.forceSave ? this.#v(e || performance.now()) : this.#g()), !0)
                }
                #v(e = 0) {
                    clearTimeout(this.cancellationTimer), this.end = Math.max(this.domTimestamp, this.historyTimestamp, e), this.customAttributes = {
                        ...this.info.jsAttributes,
                        ...this.customAttributes
                    }, this.status = h.ih.FIN;
                    this.eventSubscription.get("finished").forEach((e => e()))
                }
                #g() {
                    clearTimeout(this.cancellationTimer), this.status = h.ih.CAN;
                    this.eventSubscription.get("cancelled").forEach((e => e()))
                }
                isActiveDuring(e) {
                    return this.status === h.ih.IP ? this.start <= e : this.status === h.ih.FIN && this.start <= e && this.end > e
                }
                get firstPaint() {}
                get firstContentfulPaint() {}
                get navTiming() {}
                serialize(e) {
                    const t = void 0 === e,
                        i = (0, u.uJ)(this.obfuscator),
                        r = [];
                    let s;
                    s = this.trigger === h.pP ? h.O2.INITIAL_PAGE_LOAD : this.newURL !== this.oldURL ? h.O2.ROUTE_CHANGE : h.O2.UNSPECIFIED;
                    const n = [(0, u.sH)(this.belType), 0, (0, u.sH)(this.start - (t ? 0 : e)), (0, u.sH)(this.end - this.start), (0, u.sH)(this.callbackEnd), (0, u.sH)(this.callbackDuration), i(this.trigger), i((0, y.L)(this.initialPageURL, !0)), i((0, y.L)(this.oldURL, !0)), i((0, y.L)(this.newURL, !0)), i(this.customName), s, (0, u.me)(this.queueTime, u.sH, !0) + (0, u.me)(this.appTime, u.sH, !0) + (0, u.me)(this.oldRoute, i, !0) + (0, u.me)(this.newRoute, i, !0) + i(this.id), i(this.nodeId), (0, u.me)(this.firstPaint, u.sH, !0) + (0, u.me)(this.firstContentfulPaint, u.sH)],
                        a = (0, u.AQ)(this.customAttributes || {}, i);
                    return this.info.atts && a.push("a," + i(this.info.atts)), this.children.forEach((i => a.push(i.serialize(t ? this.start : e)))), n[1] = (0, u.sH)(a.length), r.push(n), a.length && r.push(a.join(";")), this.navTiming ? r.push(this.navTiming) : r.push(""), r.join(";")
                }
            }
            var T = i(5181),
                S = i(5344);
            class R extends b {
                constructor(e) {
                    super(e, h.pP, 0, null), this.queueTime = e.info.queueTime, this.appTime = e.info.applicationTime, this.oldURL = document.referrer
                }
                get firstPaint() {
                    return T.J.current.value
                }
                get firstContentfulPaint() {
                    return S.j.current.value
                }
                get navTiming() {
                    if (!f.ss.length) return;
                    let e = ",",
                        t = "b",
                        i = 0;
                    return f.ss.slice(1, 21).forEach((r => {
                        void 0 !== r ? (t += e + (0, u.sH)(r - i), e = ",", i = r) : (t += e + "!", e = "")
                    })), t
                }
            }
            class w extends c.r {
                static featureName = h.TZ;
                constructor(e, {
                    domObserver: t
                }) {
                    super(e, h.TZ), this.interactionsToHarvest = this.events, this.domObserver = t, this.initialPageLoadInteraction = new R(e), this.initialPageLoadInteraction.onDone.push((() => {
                        e.runtime.session?.isNew && (this.initialPageLoadInteraction.customAttributes.isFirstOfSession = !0), this.initialPageLoadInteraction.forceSave = !0;
                        const t = this.initialPageLoadInteraction;
                        this.interactionsToHarvest.add(t), this.initialPageLoadInteraction = null
                    })), a.j.subscribe((({
                        attrs: e
                    }) => {
                        const t = e.navigationEntry.loadEventEnd;
                        this.initialPageLoadInteraction.done(t), this.reportSupportabilityMetric("SoftNav/Interaction/InitialPageLoad/Duration/Ms", Math.round(t))
                    })), this.latestRouteSetByApi = null, this.interactionInProgress = null, this.latestHistoryUrl = null, this.harvestOpts.beforeUnload = () => this.interactionInProgress?.done(), this.waitForFlags(["spa"]).then((([t]) => {
                        t ? (this.drain(), setTimeout((() => e.runtime.harvester.triggerHarvestFor(this)), 0)) : (this.blocked = !0, this.deregisterDrain())
                    })), (0, s.i)("newUIEvent", (e => this.startUIInteraction(e.type, Math.floor(e.timeStamp), e.target)), this.featureName, this.ee), (0, s.i)("newURL", ((e, t) => {
                        this.latestHistoryUrl = t, this.interactionInProgress?.updateHistory(e, t)
                    }), this.featureName, this.ee), (0, s.i)("newDom", (e => {
                        this.interactionInProgress?.updateDom(e), this.interactionInProgress?.seenHistoryAndDomChange() && this.interactionInProgress.done()
                    }), this.featureName, this.ee), this.#y(), (0, s.i)("ajax", this.#b.bind(this), this.featureName, this.ee), (0, s.i)("jserror", this.#T.bind(this), this.featureName, this.ee)
                }
                serializer(e) {
                    let t;
                    const i = [];
                    for (const r of e) i.push(r.serialize(t)), void 0 === t && (t = Math.floor(r.start));
                    return "bel.7;".concat(i.join(";"))
                }
                startUIInteraction(e, t, i) {
                    if (this.interactionInProgress?.createdByApi) return;
                    if (!1 === this.interactionInProgress?.done()) return;
                    const r = e === h.tC[3] ? this.latestHistoryUrl : void 0;
                    if (this.interactionInProgress = new b(this.agentRef, e, t, this.latestRouteSetByApi, r), e === h.tC[0]) {
                        const e = function(e) {
                            const t = e.tagName.toLowerCase();
                            if (["a", "button", "input"].includes(t)) return e.title || e.value || e.innerText
                        }(i);
                        e && (this.interactionInProgress.customAttributes.actionText = e)
                    }
                    this.interactionInProgress.cancellationTimer = setTimeout((() => {
                        this.interactionInProgress.done(), this.reportSupportabilityMetric("SoftNav/Interaction/TimeOut")
                    }), 3e4), this.setClosureHandlers()
                }
                setClosureHandlers() {
                    this.interactionInProgress.on("finished", (() => {
                        const e = this.interactionInProgress;
                        this.interactionsToHarvest.add(this.interactionInProgress), this.interactionInProgress = null, this.domObserver.disconnect(), this.reportSupportabilityMetric("SoftNav/Interaction/".concat(e.newURL !== e.oldURL ? "RouteChange" : "Custom", "/Duration/Ms"), Math.round(e.end - e.start))
                    })), this.interactionInProgress.on("cancelled", (() => {
                        this.interactionInProgress = null, this.domObserver.disconnect()
                    }))
                }
                getInteractionFor(e) {
                    if (this.interactionInProgress?.isActiveDuring(e)) return this.interactionInProgress;
                    let t;
                    const [{
                        data: i
                    }] = this.interactionsToHarvest.get();
                    for (let r = i.length - 1; r >= 0; r--) {
                        const s = i[r];
                        if (s.isActiveDuring(e)) {
                            if (s.trigger !== h.pP) return s;
                            t = s
                        }
                    }
                    return t || (this.initialPageLoadInteraction?.isActiveDuring(e) ? this.initialPageLoadInteraction : void 0)
                }
                #b(e) {
                    const t = this.getInteractionFor(e.startTime);

                    function i(e, t, i) {
                        const r = new p(e, t);
                        i.addChild(r)
                    }
                    t ? t.status === h.ih.FIN ? i(this.agentRef, e, t) : (t.on("finished", (() => i(this.agentRef, e, t))), t.on("cancelled", (() => (0, r.p)("returnAjax", [e], void 0, o.K7.ajax, this.ee)))) : (0, r.p)("returnAjax", [e], void 0, o.K7.ajax, this.ee)
                }
                #T(e, t) {
                    const i = this.getInteractionFor(t);
                    i && (e.browserInteractionId = i.id, i.status === h.ih.FIN ? (e._softNavFinished = !0, e._softNavAttributes = i.customAttributes) : (i.on("finished", (0, n.J)((() => (0, r.p)("softNavFlush", [i.id, !0, i.customAttributes], void 0, o.K7.jserrors, this.ee)))), i.on("cancelled", (0, n.J)((() => (0, r.p)("softNavFlush", [i.id, !1, void 0], void 0, o.K7.jserrors, this.ee))))))
                }
                #y() {
                    const e = "api-ixn-",
                        t = this;
                    (0, s.i)(e + "get", (function(e, {
                        waitForEnd: i
                    } = {}) {
                        this.associatedInteraction = t.getInteractionFor(e), this.associatedInteraction?.trigger === h.pP && (this.associatedInteraction = null), this.associatedInteraction || (this.associatedInteraction = t.interactionInProgress = new b(t.agentRef, h.AM, e, t.latestRouteSetByApi), t.domObserver.observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        }), t.setClosureHandlers()), !0 === i && (this.associatedInteraction.keepOpenUntilEndApi = !0)
                    }), t.featureName, t.ee), (0, s.i)(e + "end", (function(e) {
                        this.associatedInteraction.done(e)
                    }), t.featureName, t.ee), (0, s.i)(e + "save", (function() {
                        this.associatedInteraction.forceSave = !0
                    }), t.featureName, t.ee), (0, s.i)(e + "ignore", (function() {
                        this.associatedInteraction.forceIgnore = !0
                    }), t.featureName, t.ee), (0, s.i)(e + "getContext", (function(e, t) {
                        "function" == typeof t && setTimeout((() => t(this.associatedInteraction.customDataByApi)), 0)
                    }), t.featureName, t.ee), (0, s.i)(e + "onEnd", (function(e, t) {
                        "function" == typeof t && this.associatedInteraction.onDone.push(t)
                    }), t.featureName, t.ee), (0, s.i)(e + "actionText", (function(e, t) {
                        t && (this.associatedInteraction.customAttributes.actionText = t)
                    }), t.featureName, t.ee), (0, s.i)(e + "setName", (function(e, t, i) {
                        t && (this.associatedInteraction.customName = t), i && (this.associatedInteraction.trigger = i)
                    }), t.featureName, t.ee), (0, s.i)(e + "setAttribute", (function(e, t, i) {
                        this.associatedInteraction.customAttributes[t] = i
                    }), t.featureName, t.ee), (0, s.i)(e + "routeName", (function(e, i) {
                        t.latestRouteSetByApi = i, t.interactionInProgress && (t.interactionInProgress.newRoute = i)
                    }), t.featureName, t.ee)
                }
            }
        },
        5592: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => J
            });
            var r = i(3606),
                s = i(7485),
                n = i(7295),
                a = i(2733),
                o = i(9566),
                c = i(6154),
                h = i(384),
                u = 0;

            function d(e, t, i, r) {
                Object.defineProperty(this, "interaction", {
                    value: e,
                    writable: !0
                }), this.parent = t, this.id = ++u, this.type = i, this.children = [], this.end = null, this.jsEnd = this.start = r, this.jsTime = 0, this.attrs = {}, this.cancelled = !1
            }
            var l = d.prototype;
            l.child = function(e, t, i, r) {
                var s = this.interaction;
                if (s.end || s.nodes >= 128) return null;
                s.onNodeAdded(this);
                var n = new d(s, this, e, t);
                return n.attrs.name = i, s.nodes++, r || s.remaining++, n
            }, l.callback = function(e, t) {
                var i = this;
                i.jsTime += e, t > i.jsEnd && (i.jsEnd = t, i.interaction.lastCb = t)
            }, l.cancel = function() {
                this.cancelled = !0, this.interaction.remaining--
            }, l.finish = function(e) {
                var t = this;
                if (t.end) return;
                t.end = e;
                let i = t.parent;
                for (; i?.cancelled;) i = i.parent;
                i && i.children.push(t), t.parent = null;
                var r = this.interaction;
                r.remaining--, r.lastFinish = e, r.checkFinish()
            };
            var p = (0, h.dV)().o.ST,
                f = (0, h.dV)().o.CT,
                m = {};

            function g(e, t, i, r, s, n) {
                this.agentRef = n, m[n.agentIdentifier] = 0, this.id = ++m[n.agentIdentifier], this.eventName = e, this.nodes = 0, this.remaining = 0, this.finishTimer = null, this.checkingFinish = !1, this.lastCb = this.lastFinish = t, this.handlers = [], this.onFinished = s, this.done = !1;
                var a = (this.root = new d(this, null, "interaction", t)).attrs;
                a.trigger = e, a.initialPageURL = c.m, a.oldRoute = r, a.newURL = i, a.oldURL = "initialPageLoad" === e ? document.referrer : i, a.custom = {}, a.store = {}
            }
            var v = g.prototype;
            v.checkFinish = function() {
                var e = this;
                e.remaining > 0 ? e._resetFinishCheck() : e.checkingFinish || null === e.root.end && (e._resetFinishCheck(), e.checkingFinish = !0, e.finishTimer = p((() => {
                    e.checkingFinish = !1, e.finishTimer = p((() => {
                        e.finishTimer = null, e.remaining <= 0 && e.finish()
                    }), 1)
                }), 0))
            }, v.setNewURL = function(e) {
                this.root.attrs.newURL = e
            }, v.setNewRoute = function(e) {
                this.root.attrs.newRoute = e
            }, v.onNodeAdded = function() {
                this._resetFinishCheck()
            }, v._resetFinishCheck = function() {
                this.finishTimer && (f(this.finishTimer), this.finishTimer = null, this.checkingFinish = !1)
            }, v.finish = function() {
                var e = this,
                    t = e.root;
                if (null === t.end) {
                    var i = Math.max(e.lastCb, e.lastFinish),
                        r = t.attrs.custom;
                    this.onFinished && this.onFinished(this), Object.entries(e.agentRef.info.jsAttributes || {}).forEach((([e, t]) => {
                        e in r || (r[e] = t)
                    })), t.end = i, e.agentRef.ee.emit("interaction", [this])
                }
            };
            var y = i(3878),
                b = i(9119),
                T = i(5519);
            class S {
                constructor(e) {
                    this.obfuscator = e.runtime.obfuscator, this.info = e.info, this.firstTimestamp = void 0
                }
                serializeMultiple(e, t, i) {
                    var r = (0, T.uJ)(this.obfuscator),
                        s = "bel.7";
                    return e.forEach((e => {
                        s += ";" + this.serializeInteraction(e.root, t, i, e.routeChange, r, this.info)
                    })), this.firstTimestamp = void 0, s
                }
                serializeSingle(e, t, i, r) {
                    var s = (0, T.uJ)(this.obfuscator),
                        n = "bel.7;" + this.serializeInteraction(e, t, i, r, s, this.info);
                    return this.firstTimestamp = void 0, n
                }
                serializeInteraction(e, t, i, r, s, n) {
                    t = t || 0;
                    var a = "initialPageLoad" === e.attrs.trigger,
                        o = {
                            interaction: 1,
                            ajax: 2,
                            customTracer: 4
                        },
                        c = !0;
                    const h = (e, u) => {
                        if ("customEnd" === e.type) return u.push([3, (0, T.sH)(e.end - this.firstTimestamp)]);
                        var d = e.type,
                            l = o[d],
                            p = e.start,
                            f = e.children.length,
                            m = 0,
                            g = n.atts,
                            v = a && i.length && 1 === l,
                            y = [],
                            S = e.attrs,
                            R = S.metrics,
                            w = S.params,
                            N = n.queueTime,
                            E = n.applicationTime;
                        void 0 === this.firstTimestamp ? (p += t, this.firstTimestamp = p) : p -= this.firstTimestamp;
                        var M = [(0, T.sH)(p), (0, T.sH)(e.end - e.start), (0, T.sH)(e.jsEnd - e.end), (0, T.sH)(e.jsTime)];
                        switch (l) {
                            case 1:
                                M[2] = (0, T.sH)(e.jsEnd - this.firstTimestamp), M.push(s(S.trigger), s((0, b.L)(S.initialPageURL, c)), s((0, b.L)(S.oldURL, c)), s((0, b.L)(S.newURL, c)), s(S.customName), a ? "" : r ? 1 : 2, (0, T.me)(a && N, T.sH, !0) + (0, T.me)(a && E, T.sH, !0) + (0, T.me)(S.oldRoute, s, !0) + (0, T.me)(S.newRoute, s, !0) + s(S.id), s(e.id), (0, T.me)(S.firstPaint, T.sH, !0) + (0, T.me)(S.firstContentfulPaint, T.sH, !1));
                                var A = (0, T.AQ)(S.custom, s);
                                y = y.concat(A), m = A.length, g && (f++, y.push("a," + s(g)));
                                break;
                            case 2:
                                if (M.push(s(w.method), (0, T.sH)(w.status), s(w.host), s(w.pathname), (0, T.sH)(R.txSize), (0, T.sH)(R.rxSize), S.isFetch ? 1 : S.isJSONP ? 2 : "", s(e.id), (0, T.me)(e.dt && e.dt.spanId, s, !0) + (0, T.me)(e.dt && e.dt.traceId, s, !0) + (0, T.me)(e.dt && e.dt.timestamp, T.sH, !1)), Object.keys(w?.gql || {}).length) {
                                    var I = (0, T.AQ)(w.gql, s);
                                    y = y.concat(I), m = I.length
                                }
                                break;
                            case 4:
                                var k = S.tracedTime;
                                M.push(s(S.name), (0, T.me)(k, T.sH, !0) + s(e.id))
                        }
                        for (var x = 0; x < e.children.length; x++) h(e.children[x], y);
                        if (M.unshift((0, T.sH)(l), (0, T.sH)(f += m)), u.push(M), f && u.push(y.join(";")), v) {
                            var O = ",",
                                F = "b",
                                L = 0;
                            Object.values(i.slice(1, 21) || {}).forEach((e => {
                                void 0 !== e ? (F += O + (0, T.sH)(e - L), O = ",", L = e) : (F += O + "!", O = "")
                            })), u.push(F)
                        } else 1 === l && u.push("");
                        return u
                    };
                    return h(e, []).join(";")
                }
            }
            var R = i(7836),
                w = i(7378),
                N = i(860),
                E = i(1630),
                M = i(5344),
                A = i(5181),
                I = i(5607),
                k = i(9908),
                x = i(8154),
                O = i(944);
            const {
                TZ: F,
                NC: L,
                xq: C,
                uP: P,
                Lc: j,
                rw: D,
                SG: _,
                l9: H,
                dT: B,
                oW: U,
                U6: z,
                op: K,
                UT: q,
                gx: G,
                BR: V,
                L3: W
            } = w;
            class J extends E.r {
                static featureName = F;
                constructor(e) {
                    super(e, F);
                    const t = this.state = {
                        initialPageURL: c.m,
                        lastSeenUrl: c.m,
                        lastSeenRouteName: null,
                        timerMap: {},
                        timerBudget: C,
                        currentNode: null,
                        prevNode: null,
                        nodeOnLastHashUpdate: null,
                        initialPageLoad: null,
                        pageLoaded: !1,
                        childTime: 0,
                        depth: 0,
                        disableSpaFix: (e.init.feature_flags || []).indexOf("disable-spa-fix") > -1
                    };
                    this.spaSerializerClass = new S(e);
                    const i = this,
                        a = R.ee.get(e.agentIdentifier),
                        h = a.get("mutation"),
                        u = a.get("promise"),
                        d = a.get("history"),
                        l = a.get("events"),
                        p = a.get("timer"),
                        f = a.get("fetch"),
                        m = a.get("jsonp"),
                        v = a.get("xhr"),
                        b = a.get("tracer");
                    let T;
                    if (this.waitForFlags(["spa"]).then((([t]) => {
                            t ? (T = e.runtime.harvester, this.drain()) : (this.blocked = !0, this.deregisterDrain())
                        })), !0 === e.init.spa.enabled) {
                        t.initialPageLoad = new g("initialPageLoad", 0, t.lastSeenUrl, t.lastSeenRouteName, ee, e), t.initialPageLoad.save = !0, e.runtime.session?.isNew && (t.initialPageLoad.root.attrs.custom.isFirstOfSession = !0), t.prevInteraction = t.initialPageLoad, t.currentNode = t.initialPageLoad.root, t.initialPageLoad[H]++, (0, r.i)(P, E, this.featureName, a), (0, r.i)(D, E, this.featureName, u);
                        var w = {
                            getCurrentNode: function() {
                                return t.currentNode
                            },
                            setCurrentNode: Y
                        };
                        (0, r.i)("spa-register", (function(e) {
                            "function" == typeof e && e(w)
                        }), N.K7.spa, a), (0, r.i)(j, J, this.featureName, a), (0, r.i)("cb-end", J, this.featureName, u), (0, r.i)(P, (function(i, r) {
                            var s = i[0],
                                n = s.type,
                                o = s["__nrNode:".concat(I.W)];
                            if (!t.pageLoaded && ("load" === n && r === window || c.A4) && (t.pageLoaded = !0, this.prevNode = t.currentNode = null, t.initialPageLoad && (o = t.initialPageLoad.root, t.initialPageLoad[H] = 0, W((function() {
                                    L.push("popstate")
                                })))), o) Y(o);
                            else if ("hashchange" === n) Y(t.nodeOnLastHashUpdate), t.nodeOnLastHashUpdate = null;
                            else if (r instanceof XMLHttpRequest) Y(a.context(r).spaNode);
                            else if (!t.currentNode && -1 !== L.indexOf(n)) {
                                var h = new g(n, this[P], t.lastSeenUrl, t.lastSeenRouteName, ee, e);
                                if (t.prevInteraction = h, Y(h.root), "click" === n) {
                                    var u = function(e) {
                                        var t = e.tagName.toLowerCase();
                                        if (-1 !== ["a", "button", "input"].indexOf(t)) return e.title || e.value || e.innerText
                                    }(s.target);
                                    u && (t.currentNode.attrs.custom.actionText = u)
                                }
                            }
                            s["__nrNode:".concat(I.W)] = t.currentNode
                        }), this.featureName, l), (0, r.i)("setTimeout-end", (function(e, i, r) {
                            !t.currentNode || t.timerBudget - this.timerDuration < 0 || (!e || e[0] instanceof Function) && (t.currentNode[B][H]++, this.timerId = r, t.timerMap[r] = t.currentNode, this.timerBudget = t.timerBudget - 50)
                        }), this.featureName, p), (0, r.i)("clearTimeout-start", (function(e) {
                            var i = e[0],
                                r = t.timerMap[i];
                            if (r) {
                                var s = r[B];
                                s[H]--, s.checkFinish(), delete t.timerMap[i]
                            }
                        }), this.featureName, p), (0, r.i)(P, (function() {
                            t.timerBudget = this.timerBudget || C;
                            var e = this.timerId,
                                i = t.timerMap[e];
                            Y(i), delete t.timerMap[e], i && i[B][H]--
                        }), this.featureName, p), (0, r.i)(P, (function() {
                            Y(this[U])
                        }), this.featureName, v), (0, r.i)("new-xhr", (function() {
                            if (!t.disableSpaFix && !t.currentNode && t.prevInteraction && !t.prevInteraction.ignored) {
                                const e = t.prevInteraction;
                                t.currentNode = e.root, e.root.end = null
                            }
                            t.currentNode && (this[U] = t.currentNode.child("ajax", null, null, !0))
                        }), this.featureName, v), (0, r.i)("send-xhr-start", (function() {
                            var t = this[U];
                            t && !this.sent && (this.sent = !0, t.dt = this.dt, t.dt?.timestamp && (t.dt.timestamp = e.runtime.timeKeeper.correctAbsoluteTimestamp(t.dt.timestamp)), t.jsEnd = t.start = this.startTime, t[B][H]++)
                        }), this.featureName, v), (0, r.i)("xhr-resolved", (function() {
                            var e = this[U];
                            if (e) {
                                if (!(0, n.gX)(this.params)) return void e.cancel();
                                var t = e.attrs;
                                t.params = this.params, t.metrics = this.metrics, e.finish(this.endTime), this.currentNode && this.currentNode.interaction && this.currentNode.interaction.checkFinish()
                            }
                        }), this.featureName, a), (0, r.i)("new-jsonp", (function(e) {
                            t.currentNode && ((this[z] = t.currentNode.child("ajax", this[K])).start = this["new-jsonp"], this.url = e, this.status = null)
                        }), this.featureName, m), (0, r.i)("cb-start", (function(e) {
                            var t = this[z];
                            t && (Y(t), this.status = 200)
                        }), this.featureName, m), (0, r.i)("jsonp-error", (function() {
                            var e = this[z];
                            e && (Y(e), this.status = 0)
                        }), this.featureName, m), (0, r.i)(V, (function() {
                            var e = this[z];
                            if (e) {
                                if (null === this.status) return void e.cancel();
                                var t = e.attrs,
                                    i = t.params = {},
                                    r = (0, s.D)(this.url);
                                i.method = "GET", i.pathname = r.pathname, i.host = r.hostname + ":" + r.port, i.status = this.status, t.metrics = {
                                    txSize: 0,
                                    rxSize: 0
                                }, t.isJSONP = !0, e.jsEnd = this[V], e.jsTime = this[D] ? this[V] - this[D] : 0, e.finish(e.jsEnd)
                            }
                        }), this.featureName, m), (0, r.i)(K, (function(i, r) {
                            if (i) {
                                if (!t.disableSpaFix && !t.currentNode && t.prevInteraction && !t.prevInteraction.ignored) {
                                    const e = t.prevInteraction;
                                    t.currentNode = e.root, e.root.end = null
                                }
                                t.currentNode && (this[U] = t.currentNode.child("ajax", this[K]), r && this[U] && (this[U].dt = r, this[U].dt?.timestamp && (this[U].dt.timestamp = e.runtime.timeKeeper.correctAbsoluteTimestamp(this[U].dt.timestamp))))
                            }
                        }), this.featureName, f), (0, r.i)(G + "start", (function(e) {
                            t.currentNode && (this[U] = t.currentNode, t.currentNode[B][H]++)
                        }), this.featureName, f), (0, r.i)(G + "end", (function(e, t, i) {
                            var r = this[U];
                            r && r[B][H]--
                        }), this.featureName, f), (0, r.i)(q, (function(e, t) {
                            var i = this[U];
                            if (i) {
                                if (e || !(0, n.gX)(this.params)) return void i.cancel();
                                var r = i.attrs;
                                r.params = this.params, r.metrics = {
                                    txSize: this.txSize,
                                    rxSize: this.rxSize
                                }, r.isFetch = !0, i.finish(this[q])
                            }
                        }), this.featureName, f), (0, r.i)("newURL", (function(e, i) {
                            if (t.currentNode) t.currentNode[B].setNewURL(e);
                            else if (t.prevInteraction && !t.prevInteraction.ignored) {
                                const i = t.prevInteraction;
                                i.setNewURL(e), i.root.end = null, Y(i.root)
                            }
                            t.currentNode && (t.lastSeenUrl !== e && (t.currentNode[B].routeChange = !0), i && (t.nodeOnLastHashUpdate = t.currentNode)), t.lastSeenUrl = e
                        }), this.featureName, d), m.on("dom-start", (function(e) {
                            if (t.currentNode) {
                                var i = e[0],
                                    r = i && "SCRIPT" === i.nodeName && "" !== i.src,
                                    s = t.currentNode.interaction;
                                r && (s[H]++, i.addEventListener("load", (function() {
                                    s[H]--, s.checkFinish()
                                }), (0, y.jT)(!1)), i.addEventListener("error", (function() {
                                    s[H]--, s.checkFinish()
                                }), (0, y.jT)(!1)))
                            }
                        })), (0, r.i)(P, (function() {
                            Y(t.prevNode)
                        }), this.featureName, h), (0, r.i)("resolve-start", Q, this.featureName, u), (0, r.i)("executor-err", Q, this.featureName, u), (0, r.i)("propagate", (function(e, i) {
                            !i && this[U] || (this[U] = t.currentNode)
                        }), this.featureName, u), (0, r.i)(D, (function() {
                            Y((this.getCtx ? this.getCtx() : this)[U])
                        }), this.featureName, u), (0, r.i)(_ + "get", (function(i) {
                            var r;
                            r = this.ixn = t?.currentNode?.[B] ? t.currentNode[B] : null === t?.prevNode?.end && "initialPageLoad" !== t?.prevNode?.[B]?.root?.[B]?.eventName ? t.prevNode[B] : new g("api", i, t.lastSeenUrl, t.lastSeenRouteName, ee, e), t.currentNode || (r.checkFinish(), t.depth && Y(r.root))
                        }), this.featureName, a), (0, r.i)(_ + "actionText", (function(e, t) {
                            var i = this.ixn.root.attrs.custom;
                            t && (i.actionText = t)
                        }), this.featureName, a), (0, r.i)(_ + "setName", (function(e, t, i) {
                            var r = this.ixn.root.attrs;
                            t && (r.customName = t), i && (r.trigger = i)
                        }), this.featureName, a), (0, r.i)(_ + "setAttribute", (function(e, t, i) {
                            this.ixn.root.attrs.custom[t] = i
                        }), this.featureName, a), (0, r.i)(_ + "end", (function(e) {
                            var t = this.ixn,
                                i = X(t);
                            Y(null), i.child("customEnd", e)?.finish(e), t.finish()
                        }), this.featureName, a), (0, r.i)(_ + "ignore", (function(e) {
                            this.ixn.ignored = !0
                        }), this.featureName, a), (0, r.i)(_ + "save", (function(e) {
                            this.ixn.save = !0
                        }), this.featureName, a), (0, r.i)(_ + "tracer", (function(e, t, i) {
                            var r = this.ixn,
                                s = X(r),
                                n = a.context(i);
                            if (!t) return n.inc = ++r[H], n[U] = s;
                            n[U] = s.child("customTracer", e, t)
                        }), this.featureName, a), (0, r.i)(P, Z, this.featureName, b), (0, r.i)("no-" + P, Z, this.featureName, b), (0, r.i)(_ + "getContext", (function(e, t) {
                            var i = this.ixn.root.attrs.store;
                            setTimeout((function() {
                                t(i)
                            }), 0)
                        }), this.featureName, a), (0, r.i)(_ + "onEnd", (function(e, t) {
                            this.ixn.handlers.push(t)
                        }), this.featureName, a), (0, r.i)("api-routeName", (function(e, i) {
                            t.lastSeenRouteName = i, t.currentNode && t.currentNode[B].setNewRoute(i)
                        }), this.featureName, a), a.on("spa-jserror", (function(e, i, r, s) {
                            t.currentNode && (r._interactionId = t.currentNode.interaction.id, t.currentNode.type && "interaction" !== t.currentNode.type && (r._interactionNodeId = t.currentNode.id))
                        })), (0, r.i)("function-err", (function(i, r, s) {
                            t.currentNode && (s.__newrelic ??= {}, s.__newrelic[e.agentIdentifier] = {
                                interactionId: t.currentNode.interaction.id
                            }, t.currentNode.type && "interaction" !== t.currentNode.type && (s.__newrelic[e.agentIdentifier].interactionNodeId = t.currentNode.id))
                        }), this.featureName, a), a.on("interaction", (function(e) {
                            if (e.ignored || !e.save && !e.routeChange) return void a.emit("interactionDone", [e, !1]);
                            t.prevInteraction === e && (t.prevInteraction = null);
                            e.root.attrs.id = (0, o.bz)(), "initialPageLoad" === e.root.attrs.trigger && (e.root.attrs.firstPaint = A.J.current.value, e.root.attrs.firstContentfulPaint = M.j.current.value);
                            let r;
                            a.emit("interactionDone", [e, !0]), i.events.add(e), r = "initialPageLoad" === e.root?.attrs?.trigger ? "InitialPageLoad" : e.routeChange ? "RouteChange" : "Custom";
                            if ((0, k.p)(x.xV, ["Spa/Interaction/".concat(r, "/Duration/Ms"), Math.max((e.root?.end || 0) - (e.root?.start || 0), 0)], void 0, N.K7.metrics, a), !T) return void(0, O.R)(19);
                            T.triggerHarvestFor(i)
                        }))
                    }

                    function E() {
                        t.depth++, this.prevNode = t.currentNode, this.ct = t.childTime, t.childTime = 0, t.timerBudget = C
                    }

                    function J() {
                        t.depth--;
                        var e = this.jsTime || 0,
                            i = e - t.childTime;
                        t.childTime = this.ct + e, t.currentNode && (t.currentNode.callback(i, this[j]), this.isTraced && (t.currentNode.attrs.tracedTime = i)), this.jsTime = t.currentNode ? 0 : i, Y(this.prevNode), this.prevNode = null, t.timerBudget = C
                    }

                    function Z(e, t, i) {
                        var r = this[U];
                        if (r) {
                            var s = r[B],
                                n = this.inc;
                            this.isTraced = !0, n ? s[H]-- : r && r.finish(e), i ? Y(r) : s.checkFinish()
                        }
                    }

                    function X(e) {
                        return t.currentNode && t.currentNode[B] === e ? t.currentNode : e.root
                    }

                    function Q() {
                        this.resolved || (this.resolved = !0, this[U] = t.currentNode)
                    }

                    function Y(e) {
                        t.pageLoaded || e || !t.initialPageLoad || (e = t.initialPageLoad.root), t.currentNode && t.currentNode[B].checkFinish(), t.prevNode = t.currentNode, t.currentNode = e && !e[B].root.end ? e : null
                    }

                    function ee(e) {
                        e === t.initialPageLoad && (t.initialPageLoad = null);
                        var i = e.root,
                            r = i.attrs;
                        t.currentNode = i, Object.values(e.handlers || {}).forEach((function(e) {
                            e(r.store)
                        })), Y(null)
                    }
                }
                serializer(e) {
                    return this.spaSerializerClass.serializeMultiple(e, 0, a.ss)
                }
            }
        },
        6526: (e, t, i) => {
            i.d(t, {
                setupAgentSession: () => E
            });
            var r = i(1687),
                s = i(7836),
                n = i(3606),
                a = i(9566),
                o = i(944),
                c = i(3304);
            class h {
                constructor(e, t) {
                    if (!e.onEnd) throw new Error("onEnd handler is required");
                    if (!t) throw new Error("ms duration is required");
                    this.onEnd = e.onEnd, this.initialMs = t, this.startTimestamp = Date.now(), this.timer = this.create(this.onEnd, t)
                }
                create(e, t) {
                    return this.timer && this.clear(), setTimeout((() => e ? e() : this.onEnd()), t || this.initialMs)
                }
                clear() {
                    clearTimeout(this.timer), this.timer = null
                }
                end() {
                    this.clear(), this.onEnd()
                }
                isValid() {
                    return this.initialMs - (Date.now() - this.startTimestamp) > 0
                }
            }
            var u = i(6154),
                d = i(2614),
                l = i(2843),
                p = i(6389);
            class f extends h {
                constructor(e, t) {
                    super(e, t), this.onPause = "function" == typeof e.onPause ? e.onPause : () => {}, this.onRefresh = "function" == typeof e.onRefresh ? e.onRefresh : () => {}, this.onResume = "function" == typeof e.onResume ? e.onResume : () => {}, this.readStorage = e.readStorage, this.remainingMs = void 0, e.refreshEvents || (e.refreshEvents = ["click", "keydown", "scroll"]);
                    try {
                        this.abortController = new AbortController
                    } catch (e) {}
                    if (u.RI && e.ee) {
                        if (e.ee) {
                            this.ee = e.ee;
                            const t = (0, p.s)(this.refresh.bind(this), 500, {
                                leading: !0
                            });
                            this.refreshHandler = i => {
                                e.refreshEvents.includes(i?.[0]?.type) && t()
                            }, e.ee.on("fn-end", this.refreshHandler)
                        }(0, l.u)((e => {
                            "hidden" === e ? this.pause() : this.resume()
                        }), !1, !1, this.abortController?.signal)
                    }
                }
                abort() {
                    this.clear(), this.abortController?.abort(), this.refreshHandler && (this.ee.removeEventListener("fn-end", this.refreshHandler), this.refreshHandler = this.ee = null)
                }
                pause() {
                    this.onPause(), clearTimeout(this.timer), this.remainingMs = this.initialMs - (Date.now() - this.startTimestamp)
                }
                resume() {
                    try {
                        const t = this.readStorage(),
                            i = "string" == typeof t ? JSON.parse(t) : t;
                        e(i.expiresAt) || e(i.inactiveAt) ? this.end() : (this.refresh(), this.onResume())
                    } catch (e) {
                        this.end()
                    }

                    function e(e) {
                        return Date.now() > e
                    }
                }
                refresh(e, t) {
                    this.clear(), this.timer = this.create(e, t), this.startTimestamp = Date.now(), this.remainingMs = void 0, this.onRefresh()
                }
            }
            var m = i(8139),
                g = i(8122),
                v = i(9908),
                y = i(8154),
                b = i(860),
                T = i(3878),
                S = i(993);
            const R = {
                value: "",
                inactiveAt: 0,
                expiresAt: 0,
                updatedAt: Date.now(),
                sessionReplayMode: d.g.OFF,
                sessionReplaySentFirstChunk: !1,
                sessionTraceMode: d.g.OFF,
                traceHarvestStarted: !1,
                loggingMode: S.A$.OFF,
                serverTimeDiff: null,
                custom: {},
                numOfResets: 0
            };
            class w {
                constructor(e) {
                    const {
                        agentIdentifier: t,
                        key: i,
                        storage: r
                    } = e;
                    if (!t || !i || !r) throw new Error("Missing required field(s):".concat(t ? "" : " agentID").concat(i ? "" : " key").concat(r ? "" : " storage"));
                    this.agentIdentifier = t, this.storage = r, this.state = {}, this.key = i, this.ee = s.ee.get(t), (0, m.u)(this.ee), this.setup(e), u.RI && (0, T.sp)("storage", (e => {
                        if (e.key === this.lookupKey) {
                            const t = "string" == typeof e.newValue ? JSON.parse(e.newValue) : e.newValue;
                            this.sync(t), this.ee.emit(d.tS.UPDATE, [d.iL.CROSS_TAB, this.state])
                        }
                    }))
                }
                setup({
                    value: e = (0, a.LA)(16),
                    expiresMs: t = d.wk,
                    inactiveMs: i = d.BB,
                    numOfResets: r = 0
                }) {
                    const s = {
                        serverTimeDiff: this.state.serverTimeDiff || R.serverTimeDiff
                    };
                    this.state = {}, this.sync({
                        ...R,
                        ...s
                    }), this.state.value = e, this.expiresMs = t, this.inactiveMs = i;
                    const n = this.read();
                    t ? (this.state.expiresAt = n?.expiresAt || this.getFutureTimestamp(t), this.state.numOfResets = n?.numOfResets || r, this.expiresTimer = new h({
                        onEnd: () => {
                            this.collectSM("expired"), this.collectSM("duration"), this.reset()
                        }
                    }, this.state.expiresAt - Date.now())) : this.state.expiresAt = 1 / 0, i ? (this.state.inactiveAt = n?.inactiveAt || this.getFutureTimestamp(i), this.inactiveTimer = new f({
                        onEnd: () => {
                            this.collectSM("inactive"), this.collectSM("duration"), this.reset()
                        },
                        onRefresh: this.refresh.bind(this),
                        onResume: () => {
                            this.ee.emit(d.tS.RESUME)
                        },
                        onPause: () => {
                            this.initialized && this.ee.emit(d.tS.PAUSE), this.write((0, g.a)(this.state, R))
                        },
                        ee: this.ee,
                        refreshEvents: ["click", "keydown", "scroll"],
                        readStorage: () => this.storage.get(this.lookupKey)
                    }, this.state.inactiveAt - Date.now())) : this.state.inactiveAt = 1 / 0, this.isNew ||= !Object.keys(n).length, this.isNew ? this.write((0, g.a)(this.state, R), !0) : this.sync(n), this.initialized = !0, this.ee.emit(d.tS.STARTED, [this.isNew])
                }
                get lookupKey() {
                    return "".concat(d.H3, "_").concat(this.key)
                }
                sync(e) {
                    Object.assign(this.state, e)
                }
                read() {
                    try {
                        const e = this.storage.get(this.lookupKey);
                        if (!e) return {};
                        const t = "string" == typeof e ? JSON.parse(e) : e;
                        return this.isInvalid(t) ? {} : this.isExpired(t.expiresAt) ? (this.collectSM("expired"), this.collectSM("duration", t, !0), this.reset()) : this.isExpired(t.inactiveAt) ? (this.collectSM("inactive"), this.collectSM("duration", t, !0), this.reset()) : t
                    } catch (e) {
                        return (0, o.R)(10, e), {}
                    }
                }
                write(e) {
                    try {
                        if (!e || "object" != typeof e) return;
                        return e.updatedAt = Date.now(), this.sync(e), this.storage.set(this.lookupKey, (0, c.A)(this.state)), this.ee.emit(d.tS.UPDATE, [d.iL.SAME_TAB, this.state]), e
                    } catch (e) {
                        return (0, o.R)(11, e), null
                    }
                }
                reset() {
                    try {
                        return this.initialized && (this.ee.emit(d.tS.RESET), this.state.numOfResets++), this.storage.remove(this.lookupKey), this.inactiveTimer?.abort?.(), this.expiresTimer?.clear?.(), delete this.isNew, this.setup({
                            agentIdentifier: this.agentIdentifier,
                            key: this.key,
                            storage: this.storage,
                            expiresMs: this.expiresMs,
                            inactiveMs: this.inactiveMs,
                            numOfResets: this.state.numOfResets
                        }), this.read()
                    } catch (e) {
                        return {}
                    }
                }
                refresh() {
                    const e = this.read();
                    this.write({
                        ...e,
                        inactiveAt: this.getFutureTimestamp(this.inactiveMs)
                    })
                }
                isExpired(e) {
                    return Date.now() > e
                }
                isInvalid(e) {
                    return !Object.keys(R).every((t => Object.keys(e).includes(t)))
                }
                collectSM(e, t, i) {
                    let r, s;
                    "duration" === e && (r = this.getDuration(t, i), s = "Session/Duration/Ms"), "expired" === e && (s = "Session/Expired/Seen"), "inactive" === e && (s = "Session/Inactive/Seen"), s && (0, v.p)(y.xV, [s, r], void 0, b.K7.metrics, this.ee)
                }
                getDuration(e = this.state, t) {
                    const i = e.expiresAt - this.expiresMs;
                    return (t ? Date.now() : e.updatedAt) - i
                }
                getFutureTimestamp(e) {
                    return Date.now() + e
                }
                syncCustomAttribute(e, t) {
                    if (u.RI)
                        if (null === t) {
                            const t = this.read();
                            t.custom && (delete t.custom[e], this.write({
                                ...t
                            }))
                        } else {
                            const i = this.read();
                            this.custom = {
                                ...i?.custom || {},
                                [e]: t
                            }, this.write({
                                ...i,
                                custom: this.custom
                            })
                        }
                }
            }
            class N {
                get(e) {
                    try {
                        return localStorage.getItem(e) || void 0
                    } catch (e) {
                        return ""
                    }
                }
                set(e, t) {
                    try {
                        return null == t ? this.remove(e) : localStorage.setItem(e, t)
                    } catch (e) {}
                }
                remove(e) {
                    try {
                        localStorage.removeItem(e)
                    } catch (e) {}
                }
            }

            function E(e) {
                if (e.runtime.session) return e.runtime.session;
                const t = e.init.session;
                e.runtime.session = new w({
                    agentIdentifier: e.agentIdentifier,
                    key: d.uh,
                    storage: new N,
                    expiresMs: t?.expiresMs,
                    inactiveMs: t?.inactiveMs
                });
                const i = e.runtime.session.state.custom;
                i && (e.info.jsAttributes = {
                    ...i,
                    ...e.info.jsAttributes
                });
                const a = s.ee.get(e.agentIdentifier);
                return (0, n.i)("api-setCustomAttribute", ((t, i, r) => {
                    e.runtime.session.syncCustomAttribute(i, r)
                }), "session", a), (0, n.i)("api-setUserId", ((t, i, r) => {
                    e.runtime.session.syncCustomAttribute(i, r)
                }), "session", a), (0, r.Ze)(e.agentIdentifier, "session"), e.runtime.session
            }
        },
        1630: (e, t, i) => {
            i.d(t, {
                r: () => _
            });
            var r = i(4234),
                s = i(2555),
                n = i(5205),
                a = i(384),
                o = i(1687),
                c = i(5701),
                h = i(4284),
                u = i(944);
            class d {
                constructor(e) {
                    this.agentRef = e, this.warnedRegexMissing = !1, this.warnedInvalidRegex = !1, this.warnedInvalidReplacement = !1
                }
                get obfuscateConfigRules() {
                    return this.agentRef.init.obfuscate || []
                }
                obfuscateString(e) {
                    if ("string" != typeof e || 0 === e.trim().length) return e;
                    const t = this.obfuscateConfigRules.map((e => this.validateObfuscationRule(e)));
                    return (0, h.p)() && t.push({
                        regex: /^file:\/\/(.*)/,
                        replacement: atob("ZmlsZTovL09CRlVTQ0FURUQ=")
                    }), t.filter((e => e.isValid)).reduce(((e, t) => {
                        const {
                            rule: i
                        } = t;
                        return e.replace(i.regex, i.replacement || "*")
                    }), e)
                }
                validateObfuscationRule(e) {
                    const t = Boolean(void 0 === e.regex),
                        i = Boolean(void 0 !== e.regex && "string" != typeof e.regex && !(e.regex instanceof RegExp)),
                        r = Boolean(e.replacement && "string" != typeof e.replacement);
                    return t && !this.warnedRegexMissing ? ((0, u.R)(12, e), this.warnedRegexMissing = !0) : i && !this.warnedInvalidRegex && ((0, u.R)(13, e), this.warnedInvalidRegex = !0), r && !this.warnedInvalidReplacement && ((0, u.R)(14, e), this.warnedInvalidReplacement = !0), {
                        rule: e,
                        isValid: !t && !i && !r,
                        errors: {
                            regexMissingDetected: t,
                            invalidRegexDetected: i,
                            invalidReplacementDetected: r
                        }
                    }
                }
            }
            var l = i(860),
                p = i(7699),
                f = i(3241),
                m = i(3496);
            class g {
                constructor(e, t, i, r) {
                    this.agentRef = e, this.entityManager = e.runtime.entityManager, this.StorageClass = t, this.appStorageMap = new Map([
                        [p.uh, new this.StorageClass]
                    ]), this.featureName = r, this.setEventStore(i)
                }
                #S(e = p.uh) {
                    return this.appStorageMap.has(e) || this.setEventStore(e), this.appStorageMap.get(e)
                }
                setEventStore(e) {
                    if (!e) return;
                    const t = (0, m.A)(this.entityManager.get(e), this.agentRef) ? this.appStorageMap.get(p.uh) : new this.StorageClass;
                    this.appStorageMap.set(e, t)
                }
                isEmpty(e, t) {
                    if (t) return this.#S(t).isEmpty(e);
                    for (const t of this.appStorageMap.values())
                        if (!t.isEmpty(e)) return !1;
                    return !0
                }
                add(e, t) {
                    return (0, f.W)({
                        agentIdentifier: this.agentRef.agentIdentifier,
                        drained: !!c.B?.[this.agentRef.agentIdentifier],
                        type: "data",
                        name: "buffer",
                        feature: this.featureName,
                        data: e
                    }), this.#S(t).add(e)
                }
                addMetric(e, t, i, r) {
                    return this.#S().addMetric(e, t, i, r)
                }
                get(e, t) {
                    if (t) return [{
                        targetApp: this.entityManager.get(t),
                        data: this.#S(t).get(e)
                    }];
                    const i = [];
                    return this.appStorageMap.forEach(((t, r) => {
                        if (r === p.uh) return;
                        const s = this.entityManager.get(r);
                        s && i.push({
                            targetApp: s,
                            data: t.get(e)
                        })
                    })), i
                }
                byteSize(e) {
                    return this.#S(e).byteSize()
                }
                wouldExceedMaxSize(e, t) {
                    return this.#S(t).wouldExceedMaxSize(e)
                }
                save(e, t) {
                    if (t) return this.#S(t).save(e);
                    this.appStorageMap.forEach((t => t.save(e)))
                }
                clear(e, t) {
                    if (t) return this.#S(t).clear(e);
                    this.appStorageMap.forEach((t => t.clear(e)))
                }
                reloadSave(e, t) {
                    return this.#S(t).reloadSave(e)
                }
                clearSave(e, t) {
                    return this.#S(t).clearSave(e)
                }
            }
            var v = i(8154),
                y = i(9324),
                b = i(6154),
                T = i(9908),
                S = i(3878),
                R = i(1863),
                w = i(2843);
            if (b.bv) {
                b.gm.cleanupTasks = [];
                const e = b.gm.close;
                b.gm.close = () => {
                    for (let e of b.gm.cleanupTasks) e();
                    e()
                }
            }
            var N = i(9119),
                E = i(3762),
                M = i(3304);

            function A({
                url: e,
                body: t = null,
                method: i = "POST",
                headers: r = [{
                    key: "content-type",
                    value: "text/plain"
                }]
            }) {
                const s = {};
                for (const e of r) s[e.key] = e.value;
                return fetch(e, {
                    headers: s,
                    method: i,
                    body: t,
                    credentials: "include"
                })
            }

            function I({
                url: e,
                body: t = null,
                sync: i,
                method: r = "POST",
                headers: s = [{
                    key: "content-type",
                    value: "text/plain"
                }]
            }) {
                const n = new XMLHttpRequest;
                n.open(r, e, !i);
                try {
                    "withCredentials" in n && (n.withCredentials = !0)
                } catch (e) {}
                return s.forEach((e => {
                    n.setRequestHeader(e.key, e.value)
                })), n.send(t), n
            }

            function k({
                url: e,
                body: t
            }) {
                try {
                    return window.navigator.sendBeacon.bind(window.navigator)(e, t)
                } catch (e) {
                    return !1
                }
            }
            class x {
                #R = !1;
                initializedAggregates = [];
                constructor(e) {
                    var t, i;
                    this.agentRef = e, t = () => {
                        this.initializedAggregates.forEach((e => {
                            "function" == typeof e.harvestOpts.beforeUnload && e.harvestOpts.beforeUnload()
                        })), this.initializedAggregates.forEach((e => this.triggerHarvestFor(e, {
                            isFinalHarvest: !0
                        })))
                    }, i = !1, b.RI ? (0, w.u)(t, !0, i) : b.bv && b.gm.cleanupTasks.push(t)
                }
                startTimer(e = this.agentRef.init.harvest.interval) {
                    if (this.#R) return;
                    this.#R = !0;
                    const t = () => {
                        this.initializedAggregates.forEach((e => this.triggerHarvestFor(e))), setTimeout(t, 1e3 * e)
                    };
                    setTimeout(t, 1e3 * e)
                }
                triggerHarvestFor(e, t = {}) {
                    if (e.blocked) return !1;
                    const i = function({
                        isFinalHarvest: e = !1
                    } = {}) {
                        return e && b.RI ? k : "undefined" != typeof XMLHttpRequest ? I : A
                    }(t);
                    if (!i) return !1;
                    const r = !t.isFinalHarvest && i === I;
                    let s, n = !1;
                    if (t.directSend) s = [t.directSend];
                    else if (s = e.makeHarvestPayload(r, t), !s) return !1;
                    return s.forEach((({
                        targetApp: r,
                        payload: s
                    }) => {
                        s && (! function(e, {
                            endpoint: t,
                            targetApp: i,
                            payload: r,
                            localOpts: s = {},
                            submitMethod: n,
                            cbFinished: a,
                            raw: o,
                            featureName: h
                        }) {
                            if (!e.info.errorBeacon) return !1;
                            let {
                                body: d,
                                qs: p
                            } = function(e = {}) {
                                const t = e => "undefined" != typeof Uint8Array && e instanceof Uint8Array || Array.isArray(e) ? e : "string" == typeof e ? e.length > 0 ? e : null : Object.entries(e || {}).reduce(((e, [t, i]) => (("number" == typeof i || "string" == typeof i && i.length > 0 || "object" == typeof i && Object.keys(i || {}).length > 0) && (e[t] = i), e)), {});
                                return {
                                    body: t(e.body),
                                    qs: t(e.qs)
                                }
                            }(r);
                            if (0 === Object.keys(d).length && !s.sendEmptyBody) return a && a({
                                sent: !1,
                                targetApp: i
                            }), !1;
                            const m = !1 === e.init.ssl ? "http" : "https",
                                g = e.init.proxy.beacon || e.info.errorBeacon,
                                v = o ? "".concat(m, "://").concat(g, "/").concat(t) : "".concat(m, "://").concat(g).concat(t !== l.v4 ? "/" + t : "", "/1/").concat(i.licenseKey),
                                T = o ? "" : function(e, t, i, r) {
                                    const s = e.runtime.obfuscator.obfuscateString((0, N.L)("" + b.gm.location)),
                                        n = 1 === e.runtime.session?.state.sessionReplayMode && i !== l.XX,
                                        a = 1 === e.runtime.session?.state.sessionTraceMode && ![l.Yy, l.df].includes(i),
                                        o = ["a=" + r, (0, E.uR)("sa", e.info.sa ? "" + e.info.sa : ""), (0, E.uR)("v", y.xv), c(), (0, E.uR)("ct", e.runtime.customTransaction), "&rst=" + (0, R.t)(), "&ck=0", "&s=" + (e.runtime.session?.state.value || "0"), (0, E.uR)("ref", s), (0, E.uR)("ptid", e.runtime.ptid ? "" + e.runtime.ptid : "")];
                                    n && o.push((0, E.uR)("hr", "1", t));
                                    a && o.push((0, E.uR)("ht", "1", t));
                                    return o.join("");

                                    function c() {
                                        return e.info.transactionName ? (0, E.uR)("to", e.info.transactionName) : (0, E.uR)("t", e.info.tNamePlain || "Unnamed Transaction")
                                    }
                                }(e, p, t, i.applicationID);
                            let w = (0, E.WL)(p, e.runtime.maxBytes);
                            "" === T && w.startsWith("&") && (w = w.substring(1));
                            const k = "".concat(v, "?").concat(T).concat(w);
                            p?.attributes?.includes("gzip") || (t !== l.qY && (d = (0, M.A)(d)), d.length > 75e4 && 1 === (O[t] = (O[t] || 0) + 1) && (0, u.R)(28, t));
                            d && 0 !== d.length && "{}" !== d && "[]" !== d || (d = "");
                            const x = [{
                                key: "content-type",
                                value: "text/plain"
                            }];
                            let F = n({
                                url: k,
                                body: d,
                                sync: s.isFinalHarvest && b.bv,
                                headers: x
                            });
                            !s.isFinalHarvest && a && (n === I ? F.addEventListener("loadend", (function() {
                                const e = {
                                    sent: 0 !== this.status,
                                    status: this.status,
                                    retry: L(this.status),
                                    fullUrl: k,
                                    xhr: this,
                                    targetApp: i
                                };
                                s.needResponse && (e.responseText = this.responseText), a(e)
                            }), (0, S.jT)(!1)) : n === A && F.then((async function(e) {
                                const t = e.status,
                                    r = {
                                        sent: !0,
                                        status: t,
                                        retry: L(t),
                                        fullUrl: k,
                                        fetchResponse: e,
                                        targetApp: i
                                    };
                                s.needResponse && (r.responseText = await e.text()), a(r)
                            })));
                            return (0, f.W)({
                                agentIdentifier: e.agentIdentifier,
                                drained: !!c.B?.[e.agentIdentifier],
                                type: "data",
                                name: "harvest",
                                feature: h,
                                data: {
                                    endpoint: t,
                                    headers: x,
                                    targetApp: i,
                                    payload: r,
                                    submitMethod: C(),
                                    raw: o,
                                    synchronousXhr: !(!s.isFinalHarvest || !b.bv)
                                }
                            }), !0;

                            function L(e) {
                                switch (e) {
                                    case 408:
                                    case 429:
                                    case 500:
                                        return !0
                                }
                                return e >= 502 && e <= 504 || e >= 512 && e <= 530
                            }

                            function C() {
                                return n === I ? "xhr" : n === A ? "fetch" : "beacon"
                            }
                        }(this.agentRef, {
                            endpoint: l.$J[e.featureName],
                            targetApp: r,
                            payload: s,
                            localOpts: t,
                            submitMethod: i,
                            cbFinished: a,
                            raw: e.harvestOpts.raw,
                            featureName: e.featureName
                        }), n = !0)
                    })), n;

                    function a(i) {
                        e.harvestOpts.prevAttemptCode && ((0, T.p)(v.xV, [(i.retry ? "Harvester/Retry/Failed/" : "Harvester/Retry/Succeeded/") + e.harvestOpts.prevAttemptCode], void 0, l.K7.metrics, e.ee), delete e.harvestOpts.prevAttemptCode), i.retry && (e.harvestOpts.prevAttemptCode = i.status), t.forceNoRetry && (i.retry = !1), e.postHarvestCleanup(i)
                    }
                }
            }
            const O = {};
            class F {
                #w = new Map;
                #N = {};
                constructor(e) {
                    this.agentRef = e, this.#w.set(p.uh, {
                        licenseKey: e.info.licenseKey,
                        applicationID: e.info.applicationID
                    })
                }
                get(e = p.uh) {
                    return this.#w.get(e)
                }
                getEntityGuidFor(e, t) {
                    if (this.#N[e] && this.#N[t]) return this.#N[e].filter((e => this.#N[t].includes(e)))[0]
                }
                set(e, t) {
                    this.#w.has(e) || (this.#w.set(e, t), this.#N[t.licenseKey] ??= [], this.#N[t.licenseKey].push(e), this.#N[t.applicationID] ??= [], this.#N[t.applicationID].push(e), this.agentRef.ee.emit("entity-added", [t]))
                }
                clear() {
                    this.#w.clear()
                }
                setDefaultEntity(e) {
                    this.#w.set(p.uh, e)
                }
            }
            var L = i(8771);
            class C {
                constructor() {
                    this.aggregatedData = {}
                }
                store(e, t, i, r, s) {
                    var n = this.#E(e, t, i, s);
                    return n.metrics = function(e, t) {
                        t || (t = {
                            count: 0
                        });
                        return t.count += 1, Object.entries(e || {}).forEach((([e, i]) => {
                            t[e] = P(i, t[e])
                        })), t
                    }(r, n.metrics), n
                }
                merge(e, t, i, r, s, n = !1) {
                    var a = this.#E(e, t, r, s);
                    if (n && (a.params = r), a.metrics) {
                        var o = a.metrics;
                        o.count += i.count, Object.keys(i || {}).forEach((e => {
                            if ("count" !== e) {
                                var t = o[e],
                                    r = i[e];
                                r && !r.c ? o[e] = P(r.t, t) : o[e] = function(e, t) {
                                    if (!t) return e;
                                    t.c || (t = j(t.t));
                                    return t.min = Math.min(e.min, t.min), t.max = Math.max(e.max, t.max), t.t += e.t, t.sos += e.sos, t.c += e.c, t
                                }(r, o[e])
                            }
                        }))
                    } else a.metrics = i
                }
                storeMetric(e, t, i, r) {
                    var s = this.#E(e, t, i);
                    return s.stats = P(r, s.stats), s
                }
                take(e, t = !0) {
                    for (var i = {}, r = "", s = !1, n = 0; n < e.length; n++) i[r = e[n]] = Object.values(this.aggregatedData[r] || {}), i[r].length && (s = !0), t && delete this.aggregatedData[r];
                    return s ? i : null
                }
                #E(e, t, i, r) {
                    this.aggregatedData[e] || (this.aggregatedData[e] = {});
                    var s = this.aggregatedData[e][t];
                    return s || (s = this.aggregatedData[e][t] = {
                        params: i || {}
                    }, r && (s.custom = r)), s
                }
            }

            function P(e, t) {
                return null == e ? function(e) {
                    e ? e.c++ : e = {
                        c: 1
                    };
                    return e
                }(t) : t ? (t.c || (t = j(t.t)), t.c += 1, t.t += e, t.sos += e * e, e > t.max && (t.max = e), e < t.min && (t.min = e), t) : {
                    t: e
                }
            }

            function j(e) {
                return {
                    t: e,
                    min: e,
                    max: e,
                    sos: e * e,
                    c: 1
                }
            }
            class D {
                #M = new C;
                #A = {};
                isEmpty({
                    aggregatorTypes: e
                }) {
                    return e ? e.every((e => !this.#M.aggregatedData[e])) : 0 === Object.keys(this.#M.aggregatedData).length
                }
                add([e, t, i, r, s]) {
                    return this.#M.store(e, t, i, r, s), !0
                }
                addMetric(e, t, i, r) {
                    return this.#M.storeMetric(e, t, i, r), !0
                }
                save({
                    aggregatorTypes: e
                }) {
                    const t = e.toString(),
                        i = {};
                    e.forEach((e => i[e] = this.#M.aggregatedData[e])), this.#A[t] = i
                }
                get(e) {
                    const t = Array.isArray(e) ? e : e.aggregatorTypes;
                    return this.#M.take(t, !1)
                }
                clear({
                    aggregatorTypes: e
                } = {}) {
                    e ? e.forEach((e => delete this.#M.aggregatedData[e])) : this.#M.aggregatedData = {}
                }
                reloadSave({
                    aggregatorTypes: e
                }) {
                    const t = e.toString(),
                        i = this.#A[t];
                    e.forEach((e => {
                        Object.keys(i[e] || {}).forEach((t => {
                            const r = i[e][t];
                            this.#M.merge(e, t, r.metrics, r.params, r.custom, !0)
                        }))
                    }))
                }
                clearSave({
                    aggregatorTypes: e
                }) {
                    const t = e.toString();
                    delete this.#A[t]
                }
            }
            class _ extends r.W {
                constructor(e, t) {
                    super(e.agentIdentifier, t), this.agentRef = e, this.checkConfiguration(e), this.doOnceForAllAggregate(e), this.harvestOpts = {};
                    const i = this.agentRef?.runtime?.appMetadata?.agents?.[0]?.entityGuid;
                    this.#I(i), i || this.ee.on("entity-added", (e => {
                        this.events?.setEventStore?.(e.entityGuid)
                    }))
                }
                #I(e) {
                    if (!this.events) switch (this.featureName) {
                        case l.K7.sessionTrace:
                        case l.K7.sessionReplay:
                            break;
                        case l.K7.jserrors:
                        case l.K7.metrics:
                            this.events = this.agentRef.sharedAggregator ??= new g(this.agentRef, D, e, "shared_aggregator");
                            break;
                        default:
                            this.events = new g(this.agentRef, L.Z, e, this.featureName)
                    }
                }
                waitForFlags(e = []) {
                    return new Promise(((t, i) => {
                        function r(t) {
                            return e.map((e => t[e] ? t[e] : 0))
                        }
                        c.B[this.agentIdentifier] ? t(r(c.B[this.agentIdentifier])) : this.ee.on("rumresp", ((e = {}) => {
                            t(r(e))
                        }))
                    })).catch((e => {
                        this.ee.emit("internal-error", [e]), this.blocked = !0, this.deregisterDrain()
                    }))
                }
                drain() {
                    (0, o.Ze)(this.agentIdentifier, this.featureName), this.drained = !0
                }
                preHarvestChecks(e) {
                    return !this.blocked
                }
                makeHarvestPayload(e = !1, t = {}) {
                    if (!this.events || this.events.isEmpty(this.harvestOpts, t.targetEntityGuid)) return;
                    if (this.preHarvestChecks && !this.preHarvestChecks(t)) return;
                    e && this.events.save(this.harvestOpts, t.targetEntityGuid);
                    const i = this.events.get(this.harvestOpts, t.targetEntityGuid);
                    return i.length ? (this.events.clear(this.harvestOpts, t.targetEntityGuid), i.map((({
                        targetApp: e,
                        data: t
                    }) => {
                        const i = {
                            body: this.serializer ? this.serializer(t, e?.entityGuid) : t
                        };
                        return this.queryStringsBuilder && (i.qs = this.queryStringsBuilder(t, e?.entityGuid)), {
                            targetApp: e,
                            payload: i
                        }
                    }))) : (0, u.R)(52)
                }
                postHarvestCleanup(e = {}) {
                    e.sent && e.retry && this.events.reloadSave(this.harvestOpts, e.targetApp?.entityGuid), this.events.clearSave(this.harvestOpts, e.targetApp?.entityGuid)
                }
                checkConfiguration(e) {
                    if (!(0, s.f)(e.info)) {
                        const t = (0, a.pV)();
                        let i = {
                            ...t.info?.jsAttributes
                        };
                        try {
                            i = {
                                ...i,
                                ...e.info?.jsAttributes
                            }
                        } catch (e) {}(0, n.j)(e, {
                            ...t,
                            info: {
                                ...t.info,
                                jsAttributes: i
                            },
                            runtime: e.runtime
                        }, e.runtime.loaderType)
                    }
                }
                doOnceForAllAggregate(e) {
                    e.runtime.obfuscator || (e.runtime.obfuscator = new d(e)), this.obfuscator = e.runtime.obfuscator, e.runtime.entityManager || (e.runtime.entityManager = new F(this.agentRef)), e.runtime.harvester || (e.runtime.harvester = new x(e))
                }
                reportSupportabilityMetric(e, t) {
                    (0, T.p)(v.xV, [e, t], void 0, l.K7.metrics, this.ee)
                }
            }
        },
        8771: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });
            var r = i(3304),
                s = i(7699);
            class n {
                #k = [];
                #x = 0;
                #O;
                #F;
                constructor(e = s.It) {
                    this.maxPayloadSize = e
                }
                isEmpty() {
                    return 0 === this.#k.length
                }
                get() {
                    return this.#k
                }
                byteSize() {
                    return this.#x
                }
                wouldExceedMaxSize(e) {
                    return this.#x + e > this.maxPayloadSize
                }
                add(e) {
                    const t = (0, r.A)(e)?.length || 0;
                    return !(this.#x + t > this.maxPayloadSize) && (this.#k.push(e), this.#x += t, !0)
                }
                clear() {
                    this.#k = [], this.#x = 0
                }
                save() {
                    this.#O = this.#k, this.#F = this.#x
                }
                clearSave() {
                    this.#O = void 0, this.#F = void 0
                }
                reloadSave() {
                    this.#O && (this.#F + this.#x > this.maxPayloadSize || (this.#k = [...this.#O, ...this.#k], this.#x = this.#F + this.#x))
                }
            }
        },
        7226: (e, t, i) => {
            i.d(t, {
                Ck: () => he,
                IN: () => k,
                fK: () => ne,
                rH: () => ie,
                zB: () => x
            });
            var r, s, n = function() {
                    var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
                    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
                },
                a = function(e) {
                    if ("loading" === document.readyState) return "loading";
                    var t = n();
                    if (t) {
                        if (e < t.domInteractive) return "loading";
                        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                        if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                    }
                    return "complete"
                },
                o = function(e) {
                    var t = e.nodeName;
                    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                },
                c = function(e, t) {
                    var i = "";
                    try {
                        for (; e && 9 !== e.nodeType;) {
                            var r = e,
                                s = r.id ? "#" + r.id : o(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                            if (i.length + s.length > (t || 100) - 1) return i || s;
                            if (i = i ? s + ">" + i : s, r.id) break;
                            e = r.parentNode
                        }
                    } catch (e) {}
                    return i
                },
                h = -1,
                u = function() {
                    return h
                },
                d = function(e) {
                    addEventListener("pageshow", (function(t) {
                        t.persisted && (h = t.timeStamp, e(t))
                    }), !0)
                },
                l = function() {
                    var e = n();
                    return e && e.activationStart || 0
                },
                p = function(e, t) {
                    var i = n(),
                        r = "navigate";
                    return u() >= 0 ? r = "back-forward-cache" : i && (document.prerendering || l() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-"))), {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                f = function(e, t, i) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver((function(e) {
                                Promise.resolve().then((function() {
                                    t(e.getEntries())
                                }))
                            }));
                            return r.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, i || {})), r
                        }
                    } catch (e) {}
                },
                m = function(e, t, i, r) {
                    var s, n;
                    return function(a) {
                        t.value >= 0 && (a || r) && ((n = t.value - (s || 0)) || void 0 === s) && (s = t.value, t.delta = n, t.rating = function(e, t) {
                            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                        }(t.value, i), e(t))
                    }
                },
                g = function(e) {
                    requestAnimationFrame((function() {
                        return requestAnimationFrame((function() {
                            return e()
                        }))
                    }))
                },
                v = function(e) {
                    document.addEventListener("visibilitychange", (function() {
                        "hidden" === document.visibilityState && e()
                    }))
                },
                y = function(e) {
                    var t = !1;
                    return function() {
                        t || (e(), t = !0)
                    }
                },
                b = -1,
                T = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                S = function(e) {
                    "hidden" === document.visibilityState && b > -1 && (b = "visibilitychange" === e.type ? e.timeStamp : 0, w())
                },
                R = function() {
                    addEventListener("visibilitychange", S, !0), addEventListener("prerenderingchange", S, !0)
                },
                w = function() {
                    removeEventListener("visibilitychange", S, !0), removeEventListener("prerenderingchange", S, !0)
                },
                N = function() {
                    return b < 0 && (b = T(), R(), d((function() {
                        setTimeout((function() {
                            b = T(), R()
                        }), 0)
                    }))), {
                        get firstHiddenTime() {
                            return b
                        }
                    }
                },
                E = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", (function() {
                        return e()
                    }), !0) : e()
                },
                M = [1800, 3e3],
                A = function(e, t) {
                    t = t || {}, E((function() {
                        var i, r = N(),
                            s = p("FCP"),
                            n = f("paint", (function(e) {
                                e.forEach((function(e) {
                                    "first-contentful-paint" === e.name && (n.disconnect(), e.startTime < r.firstHiddenTime && (s.value = Math.max(e.startTime - l(), 0), s.entries.push(e), i(!0)))
                                }))
                            }));
                        n && (i = m(e, s, M, t.reportAllChanges), d((function(r) {
                            s = p("FCP"), i = m(e, s, M, t.reportAllChanges), g((function() {
                                s.value = performance.now() - r.timeStamp, i(!0)
                            }))
                        })))
                    }))
                },
                I = [.1, .25],
                k = function(e, t) {
                    ! function(e, t) {
                        t = t || {}, A(y((function() {
                            var i, r = p("CLS", 0),
                                s = 0,
                                n = [],
                                a = function(e) {
                                    e.forEach((function(e) {
                                        if (!e.hadRecentInput) {
                                            var t = n[0],
                                                i = n[n.length - 1];
                                            s && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, n.push(e)) : (s = e.value, n = [e])
                                        }
                                    })), s > r.value && (r.value = s, r.entries = n, i())
                                },
                                o = f("layout-shift", a);
                            o && (i = m(e, r, I, t.reportAllChanges), v((function() {
                                a(o.takeRecords()), i(!0)
                            })), d((function() {
                                s = 0, r = p("CLS", 0), i = m(e, r, I, t.reportAllChanges), g((function() {
                                    return i()
                                }))
                            })), setTimeout(i, 0))
                        })))
                    }((function(t) {
                        var i = function(e) {
                            var t, i = {};
                            if (e.entries.length) {
                                var r = e.entries.reduce((function(e, t) {
                                    return e && e.value > t.value ? e : t
                                }));
                                if (r && r.sources && r.sources.length) {
                                    var s = (t = r.sources).find((function(e) {
                                        return e.node && 1 === e.node.nodeType
                                    })) || t[0];
                                    s && (i = {
                                        largestShiftTarget: c(s.node),
                                        largestShiftTime: r.startTime,
                                        largestShiftValue: r.value,
                                        largestShiftSource: s,
                                        largestShiftEntry: r,
                                        loadState: a(r.startTime)
                                    })
                                }
                            }
                            return Object.assign(e, {
                                attribution: i
                            })
                        }(t);
                        e(i)
                    }), t)
                },
                x = function(e, t) {
                    A((function(t) {
                        var i = function(e) {
                            var t = {
                                timeToFirstByte: 0,
                                firstByteToFCP: e.value,
                                loadState: a(u())
                            };
                            if (e.entries.length) {
                                var i = n(),
                                    r = e.entries[e.entries.length - 1];
                                if (i) {
                                    var s = i.activationStart || 0,
                                        o = Math.max(0, i.responseStart - s);
                                    t = {
                                        timeToFirstByte: o,
                                        firstByteToFCP: e.value - o,
                                        loadState: a(e.entries[0].startTime),
                                        navigationEntry: i,
                                        fcpEntry: r
                                    }
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t);
                        e(i)
                    }), t)
                },
                O = 0,
                F = 1 / 0,
                L = 0,
                C = function(e) {
                    e.forEach((function(e) {
                        e.interactionId && (F = Math.min(F, e.interactionId), L = Math.max(L, e.interactionId), O = L ? (L - F) / 7 + 1 : 0)
                    }))
                },
                P = function() {
                    return r ? O : performance.interactionCount || 0
                },
                j = function() {
                    "interactionCount" in performance || r || (r = f("event", C, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                D = [],
                _ = new Map,
                H = 0,
                B = [],
                U = function(e) {
                    if (B.forEach((function(t) {
                            return t(e)
                        })), e.interactionId || "first-input" === e.entryType) {
                        var t = D[D.length - 1],
                            i = _.get(e.interactionId);
                        if (i || D.length < 10 || e.duration > t.latency) {
                            if (i) e.duration > i.latency ? (i.entries = [e], i.latency = e.duration) : e.duration === i.latency && e.startTime === i.entries[0].startTime && i.entries.push(e);
                            else {
                                var r = {
                                    id: e.interactionId,
                                    latency: e.duration,
                                    entries: [e]
                                };
                                _.set(r.id, r), D.push(r)
                            }
                            D.sort((function(e, t) {
                                return t.latency - e.latency
                            })), D.length > 10 && D.splice(10).forEach((function(e) {
                                return _.delete(e.id)
                            }))
                        }
                    }
                },
                z = function(e) {
                    var t = self.requestIdleCallback || self.setTimeout,
                        i = -1;
                    return e = y(e), "hidden" === document.visibilityState ? e() : (i = t(e), v(e)), i
                },
                K = [200, 500],
                q = function(e, t) {
                    "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, E((function() {
                        var i;
                        j();
                        var r, s = p("INP"),
                            n = function(e) {
                                z((function() {
                                    e.forEach(U);
                                    var t = function() {
                                        var e = Math.min(D.length - 1, Math.floor((P() - H) / 50));
                                        return D[e]
                                    }();
                                    t && t.latency !== s.value && (s.value = t.latency, s.entries = t.entries, r())
                                }))
                            },
                            a = f("event", n, {
                                durationThreshold: null !== (i = t.durationThreshold) && void 0 !== i ? i : 40
                            });
                        r = m(e, s, K, t.reportAllChanges), a && (a.observe({
                            type: "first-input",
                            buffered: !0
                        }), v((function() {
                            n(a.takeRecords()), r(!0)
                        })), d((function() {
                            H = P(), D.length = 0, _.clear(), s = p("INP"), r = m(e, s, K, t.reportAllChanges)
                        })))
                    })))
                },
                G = [],
                V = [],
                W = 0,
                J = new WeakMap,
                Z = new Map,
                X = -1,
                Q = function(e) {
                    G = G.concat(e), Y()
                },
                Y = function() {
                    X < 0 && (X = z(ee))
                },
                ee = function() {
                    Z.size > 10 && Z.forEach((function(e, t) {
                        _.has(t) || Z.delete(t)
                    }));
                    var e = D.map((function(e) {
                            return J.get(e.entries[0])
                        })),
                        t = V.length - 50;
                    V = V.filter((function(i, r) {
                        return r >= t || e.includes(i)
                    }));
                    for (var i = new Set, r = 0; r < V.length; r++) {
                        var s = V[r];
                        te(s.startTime, s.processingEnd).forEach((function(e) {
                            i.add(e)
                        }))
                    }
                    var n = G.length - 1 - 50;
                    G = G.filter((function(e, t) {
                        return e.startTime > W && t > n || i.has(e)
                    })), X = -1
                };
            B.push((function(e) {
                e.interactionId && e.target && !Z.has(e.interactionId) && Z.set(e.interactionId, e.target)
            }), (function(e) {
                var t, i = e.startTime + e.duration;
                W = Math.max(W, e.processingEnd);
                for (var r = V.length - 1; r >= 0; r--) {
                    var s = V[r];
                    if (Math.abs(i - s.renderTime) <= 8) {
                        (t = s).startTime = Math.min(e.startTime, t.startTime), t.processingStart = Math.min(e.processingStart, t.processingStart), t.processingEnd = Math.max(e.processingEnd, t.processingEnd), t.entries.push(e);
                        break
                    }
                }
                t || (t = {
                    startTime: e.startTime,
                    processingStart: e.processingStart,
                    processingEnd: e.processingEnd,
                    renderTime: i,
                    entries: [e]
                }, V.push(t)), (e.interactionId || "first-input" === e.entryType) && J.set(e, t), Y()
            }));
            var te = function(e, t) {
                    for (var i, r = [], s = 0; i = G[s]; s++)
                        if (!(i.startTime + i.duration < e)) {
                            if (i.startTime > t) break;
                            r.push(i)
                        } return r
                },
                ie = function(e, t) {
                    s || (s = f("long-animation-frame", Q)), q((function(t) {
                        var i = function(e) {
                            var t = e.entries[0],
                                i = J.get(t),
                                r = t.processingStart,
                                s = i.processingEnd,
                                n = i.entries.sort((function(e, t) {
                                    return e.processingStart - t.processingStart
                                })),
                                o = te(t.startTime, s),
                                h = e.entries.find((function(e) {
                                    return e.target
                                })),
                                u = h && h.target || Z.get(t.interactionId),
                                d = [t.startTime + t.duration, s].concat(o.map((function(e) {
                                    return e.startTime + e.duration
                                }))),
                                l = Math.max.apply(Math, d),
                                p = {
                                    interactionTarget: c(u),
                                    interactionTargetElement: u,
                                    interactionType: t.name.startsWith("key") ? "keyboard" : "pointer",
                                    interactionTime: t.startTime,
                                    nextPaintTime: l,
                                    processedEventEntries: n,
                                    longAnimationFrameEntries: o,
                                    inputDelay: r - t.startTime,
                                    processingDuration: s - r,
                                    presentationDelay: Math.max(l - s, 0),
                                    loadState: a(t.startTime)
                                };
                            return Object.assign(e, {
                                attribution: p
                            })
                        }(t);
                        e(i)
                    }), t)
                },
                re = [2500, 4e3],
                se = {},
                ne = function(e, t) {
                    ! function(e, t) {
                        t = t || {}, E((function() {
                            var i, r = N(),
                                s = p("LCP"),
                                n = function(e) {
                                    t.reportAllChanges || (e = e.slice(-1)), e.forEach((function(e) {
                                        e.startTime < r.firstHiddenTime && (s.value = Math.max(e.startTime - l(), 0), s.entries = [e], i())
                                    }))
                                },
                                a = f("largest-contentful-paint", n);
                            if (a) {
                                i = m(e, s, re, t.reportAllChanges);
                                var o = y((function() {
                                    se[s.id] || (n(a.takeRecords()), a.disconnect(), se[s.id] = !0, i(!0))
                                }));
                                ["keydown", "click"].forEach((function(e) {
                                    addEventListener(e, (function() {
                                        return z(o)
                                    }), {
                                        once: !0,
                                        capture: !0
                                    })
                                })), v(o), d((function(r) {
                                    s = p("LCP"), i = m(e, s, re, t.reportAllChanges), g((function() {
                                        s.value = performance.now() - r.timeStamp, se[s.id] = !0, i(!0)
                                    }))
                                }))
                            }
                        }))
                    }((function(t) {
                        var i = function(e) {
                            var t = {
                                timeToFirstByte: 0,
                                resourceLoadDelay: 0,
                                resourceLoadDuration: 0,
                                elementRenderDelay: e.value
                            };
                            if (e.entries.length) {
                                var i = n();
                                if (i) {
                                    var r = i.activationStart || 0,
                                        s = e.entries[e.entries.length - 1],
                                        a = s.url && performance.getEntriesByType("resource").filter((function(e) {
                                            return e.name === s.url
                                        }))[0],
                                        o = Math.max(0, i.responseStart - r),
                                        h = Math.max(o, a ? (a.requestStart || a.startTime) - r : 0),
                                        u = Math.max(h, a ? a.responseEnd - r : 0),
                                        d = Math.max(u, s.startTime - r);
                                    t = {
                                        element: c(s.element),
                                        timeToFirstByte: o,
                                        resourceLoadDelay: h - o,
                                        resourceLoadDuration: u - h,
                                        elementRenderDelay: d - u,
                                        navigationEntry: i,
                                        lcpEntry: s
                                    }, s.url && (t.url = s.url), a && (t.lcpResourceEntry = a)
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t);
                        e(i)
                    }), t)
                },
                ae = [800, 1800],
                oe = function e(t) {
                    document.prerendering ? E((function() {
                        return e(t)
                    })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                        return e(t)
                    }), !0) : setTimeout(t, 0)
                },
                ce = function(e, t) {
                    t = t || {};
                    var i = p("TTFB"),
                        r = m(e, i, ae, t.reportAllChanges);
                    oe((function() {
                        var s = n();
                        s && (i.value = Math.max(s.responseStart - l(), 0), i.entries = [s], r(!0), d((function() {
                            i = p("TTFB", 0), (r = m(e, i, ae, t.reportAllChanges))(!0)
                        })))
                    }))
                },
                he = function(e, t) {
                    ce((function(t) {
                        var i = function(e) {
                            var t = {
                                waitingDuration: 0,
                                cacheDuration: 0,
                                dnsDuration: 0,
                                connectionDuration: 0,
                                requestDuration: 0
                            };
                            if (e.entries.length) {
                                var i = e.entries[0],
                                    r = i.activationStart || 0,
                                    s = Math.max((i.workerStart || i.fetchStart) - r, 0),
                                    n = Math.max(i.domainLookupStart - r, 0),
                                    a = Math.max(i.connectStart - r, 0),
                                    o = Math.max(i.connectEnd - r, 0);
                                t = {
                                    waitingDuration: s,
                                    cacheDuration: n - s,
                                    dnsDuration: a - n,
                                    connectionDuration: o - a,
                                    requestDuration: e.value - o,
                                    navigationEntry: i
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t);
                        e(i)
                    }), t)
                };
            new Date
        }
    }
]);