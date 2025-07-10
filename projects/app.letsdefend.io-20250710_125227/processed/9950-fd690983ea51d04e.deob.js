"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9950], {
        69950: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return b
                }
            });
            var r, i = n(2265),
                o = e => "string" != typeof e ? {} : e.split(/ ?; ?/).reduce((e, t) => {
                    let [n, r] = t.split(/ ?: ?/).map((e, t) => 0 === t ? e.replace(/\s+/g, "") : e.trim());
                    if (n && r) {
                        let t = n.replace(/(\w)-(\w)/g, (e, t, n) => `${t}${n.toUpperCase()}`),
                            i = r.trim();
                        Number.isNaN(Number(r)) || (i = Number(r)), e[n.startsWith("-") ? n : t] = i
                    }
                    return e
                }, {}),
                a = ["br", "col", "colgroup", "dl", "hr", "iframe", "img", "input", "link", "menuitem", "meta", "ol", "param", "select", "table", "tbody", "tfoot", "thead", "tr", "ul", "wbr"],
                s = {
                    "accept-charset": "acceptCharset",
                    acceptcharset: "acceptCharset",
                    accesskey: "accessKey",
                    allowfullscreen: "allowFullScreen",
                    autocapitalize: "autoCapitalize",
                    autocomplete: "autoComplete",
                    autocorrect: "autoCorrect",
                    autofocus: "autoFocus",
                    autoplay: "autoPlay",
                    autosave: "autoSave",
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    charset: "charSet",
                    class: "className",
                    classid: "classID",
                    classname: "className",
                    colspan: "colSpan",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    controlslist: "controlsList",
                    crossorigin: "crossOrigin",
                    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
                    datetime: "dateTime",
                    defaultchecked: "defaultChecked",
                    defaultvalue: "defaultValue",
                    enctype: "encType",
                    for: "htmlFor",
                    formmethod: "formMethod",
                    formaction: "formAction",
                    formenctype: "formEncType",
                    formnovalidate: "formNoValidate",
                    formtarget: "formTarget",
                    frameborder: "frameBorder",
                    hreflang: "hrefLang",
                    htmlfor: "htmlFor",
                    httpequiv: "httpEquiv",
                    "http-equiv": "httpEquiv",
                    icon: "icon",
                    innerhtml: "innerHTML",
                    inputmode: "inputMode",
                    itemid: "itemID",
                    itemprop: "itemProp",
                    itemref: "itemRef",
                    itemscope: "itemScope",
                    itemtype: "itemType",
                    keyparams: "keyParams",
                    keytype: "keyType",
                    marginwidth: "marginWidth",
                    marginheight: "marginHeight",
                    maxlength: "maxLength",
                    mediagroup: "mediaGroup",
                    minlength: "minLength",
                    nomodule: "noModule",
                    novalidate: "noValidate",
                    playsinline: "playsInline",
                    radiogroup: "radioGroup",
                    readonly: "readOnly",
                    referrerpolicy: "referrerPolicy",
                    rowspan: "rowSpan",
                    spellcheck: "spellCheck",
                    srcdoc: "srcDoc",
                    srclang: "srcLang",
                    srcset: "srcSet",
                    tabindex: "tabIndex",
                    typemustmatch: "typeMustMatch",
                    usemap: "useMap",
                    accentheight: "accentHeight",
                    "accent-height": "accentHeight",
                    alignmentbaseline: "alignmentBaseline",
                    "alignment-baseline": "alignmentBaseline",
                    allowreorder: "allowReorder",
                    arabicform: "arabicForm",
                    "arabic-form": "arabicForm",
                    attributename: "attributeName",
                    attributetype: "attributeType",
                    autoreverse: "autoReverse",
                    basefrequency: "baseFrequency",
                    baselineshift: "baselineShift",
                    "baseline-shift": "baselineShift",
                    baseprofile: "baseProfile",
                    calcmode: "calcMode",
                    capheight: "capHeight",
                    "cap-height": "capHeight",
                    clippath: "clipPath",
                    "clip-path": "clipPath",
                    clippathunits: "clipPathUnits",
                    cliprule: "clipRule",
                    "clip-rule": "clipRule",
                    colorinterpolation: "colorInterpolation",
                    "color-interpolation": "colorInterpolation",
                    colorinterpolationfilters: "colorInterpolationFilters",
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorprofile: "colorProfile",
                    "color-profile": "colorProfile",
                    colorrendering: "colorRendering",
                    "color-rendering": "colorRendering",
                    contentscripttype: "contentScriptType",
                    contentstyletype: "contentStyleType",
                    diffuseconstant: "diffuseConstant",
                    dominantbaseline: "dominantBaseline",
                    "dominant-baseline": "dominantBaseline",
                    edgemode: "edgeMode",
                    enablebackground: "enableBackground",
                    "enable-background": "enableBackground",
                    externalresourcesrequired: "externalResourcesRequired",
                    fillopacity: "fillOpacity",
                    "fill-opacity": "fillOpacity",
                    fillrule: "fillRule",
                    "fill-rule": "fillRule",
                    filterres: "filterRes",
                    filterunits: "filterUnits",
                    floodopacity: "floodOpacity",
                    "flood-opacity": "floodOpacity",
                    floodcolor: "floodColor",
                    "flood-color": "floodColor",
                    fontfamily: "fontFamily",
                    "font-family": "fontFamily",
                    fontsize: "fontSize",
                    "font-size": "fontSize",
                    fontsizeadjust: "fontSizeAdjust",
                    "font-size-adjust": "fontSizeAdjust",
                    fontstretch: "fontStretch",
                    "font-stretch": "fontStretch",
                    fontstyle: "fontStyle",
                    "font-style": "fontStyle",
                    fontvariant: "fontVariant",
                    "font-variant": "fontVariant",
                    fontweight: "fontWeight",
                    "font-weight": "fontWeight",
                    glyphname: "glyphName",
                    "glyph-name": "glyphName",
                    glyphorientationhorizontal: "glyphOrientationHorizontal",
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphorientationvertical: "glyphOrientationVertical",
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphref: "glyphRef",
                    gradienttransform: "gradientTransform",
                    gradientunits: "gradientUnits",
                    horizadvx: "horizAdvX",
                    "horiz-adv-x": "horizAdvX",
                    horizoriginx: "horizOriginX",
                    "horiz-origin-x": "horizOriginX",
                    imagerendering: "imageRendering",
                    "image-rendering": "imageRendering",
                    kernelmatrix: "kernelMatrix",
                    kernelunitlength: "kernelUnitLength",
                    keypoints: "keyPoints",
                    keysplines: "keySplines",
                    keytimes: "keyTimes",
                    lengthadjust: "lengthAdjust",
                    letterspacing: "letterSpacing",
                    "letter-spacing": "letterSpacing",
                    lightingcolor: "lightingColor",
                    "lighting-color": "lightingColor",
                    limitingconeangle: "limitingConeAngle",
                    markerend: "markerEnd",
                    "marker-end": "markerEnd",
                    markerheight: "markerHeight",
                    markermid: "markerMid",
                    "marker-mid": "markerMid",
                    markerstart: "markerStart",
                    "marker-start": "markerStart",
                    markerunits: "markerUnits",
                    markerwidth: "markerWidth",
                    maskcontentunits: "maskContentUnits",
                    maskunits: "maskUnits",
                    numoctaves: "numOctaves",
                    overlineposition: "overlinePosition",
                    "overline-position": "overlinePosition",
                    overlinethickness: "overlineThickness",
                    "overline-thickness": "overlineThickness",
                    paintorder: "paintOrder",
                    "paint-order": "paintOrder",
                    "panose-1": "panose1",
                    pathlength: "pathLength",
                    patterncontentunits: "patternContentUnits",
                    patterntransform: "patternTransform",
                    patternunits: "patternUnits",
                    pointerevents: "pointerEvents",
                    "pointer-events": "pointerEvents",
                    pointsatx: "pointsAtX",
                    pointsaty: "pointsAtY",
                    pointsatz: "pointsAtZ",
                    preservealpha: "preserveAlpha",
                    preserveaspectratio: "preserveAspectRatio",
                    primitiveunits: "primitiveUnits",
                    refx: "refX",
                    refy: "refY",
                    renderingintent: "renderingIntent",
                    "rendering-intent": "renderingIntent",
                    repeatcount: "repeatCount",
                    repeatdur: "repeatDur",
                    requiredextensions: "requiredExtensions",
                    requiredfeatures: "requiredFeatures",
                    shaperendering: "shapeRendering",
                    "shape-rendering": "shapeRendering",
                    specularconstant: "specularConstant",
                    specularexponent: "specularExponent",
                    spreadmethod: "spreadMethod",
                    startoffset: "startOffset",
                    stddeviation: "stdDeviation",
                    stitchtiles: "stitchTiles",
                    stopcolor: "stopColor",
                    "stop-color": "stopColor",
                    stopopacity: "stopOpacity",
                    "stop-opacity": "stopOpacity",
                    strikethroughposition: "strikethroughPosition",
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughthickness: "strikethroughThickness",
                    "strikethrough-thickness": "strikethroughThickness",
                    strokedasharray: "strokeDasharray",
                    "stroke-dasharray": "strokeDasharray",
                    strokedashoffset: "strokeDashoffset",
                    "stroke-dashoffset": "strokeDashoffset",
                    strokelinecap: "strokeLinecap",
                    "stroke-linecap": "strokeLinecap",
                    strokelinejoin: "strokeLinejoin",
                    "stroke-linejoin": "strokeLinejoin",
                    strokemiterlimit: "strokeMiterlimit",
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokewidth: "strokeWidth",
                    "stroke-width": "strokeWidth",
                    strokeopacity: "strokeOpacity",
                    "stroke-opacity": "strokeOpacity",
                    suppresscontenteditablewarning: "suppressContentEditableWarning",
                    suppresshydrationwarning: "suppressHydrationWarning",
                    surfacescale: "surfaceScale",
                    systemlanguage: "systemLanguage",
                    tablevalues: "tableValues",
                    targetx: "targetX",
                    targety: "targetY",
                    textanchor: "textAnchor",
                    "text-anchor": "textAnchor",
                    textdecoration: "textDecoration",
                    "text-decoration": "textDecoration",
                    textlength: "textLength",
                    textrendering: "textRendering",
                    "text-rendering": "textRendering",
                    underlineposition: "underlinePosition",
                    "underline-position": "underlinePosition",
                    underlinethickness: "underlineThickness",
                    "underline-thickness": "underlineThickness",
                    unicodebidi: "unicodeBidi",
                    "unicode-bidi": "unicodeBidi",
                    unicoderange: "unicodeRange",
                    "unicode-range": "unicodeRange",
                    unitsperem: "unitsPerEm",
                    "units-per-em": "unitsPerEm",
                    unselectable: "unselectable",
                    valphabetic: "vAlphabetic",
                    "v-alphabetic": "vAlphabetic",
                    vectoreffect: "vectorEffect",
                    "vector-effect": "vectorEffect",
                    vertadvy: "vertAdvY",
                    "vert-adv-y": "vertAdvY",
                    vertoriginx: "vertOriginX",
                    "vert-origin-x": "vertOriginX",
                    vertoriginy: "vertOriginY",
                    "vert-origin-y": "vertOriginY",
                    vhanging: "vHanging",
                    "v-hanging": "vHanging",
                    videographic: "vIdeographic",
                    "v-ideographic": "vIdeographic",
                    viewbox: "viewBox",
                    viewtarget: "viewTarget",
                    vmathematical: "vMathematical",
                    "v-mathematical": "vMathematical",
                    wordspacing: "wordSpacing",
                    "word-spacing": "wordSpacing",
                    writingmode: "writingMode",
                    "writing-mode": "writingMode",
                    xchannelselector: "xChannelSelector",
                    xheight: "xHeight",
                    "x-height": "xHeight",
                    xlinkactuate: "xlinkActuate",
                    "xlink:actuate": "xlinkActuate",
                    xlinkarcrole: "xlinkArcrole",
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkhref: "xlinkHref",
                    "xlink:href": "xlinkHref",
                    xlinkrole: "xlinkRole",
                    "xlink:role": "xlinkRole",
                    xlinkshow: "xlinkShow",
                    "xlink:show": "xlinkShow",
                    xlinktitle: "xlinkTitle",
                    "xlink:title": "xlinkTitle",
                    xlinktype: "xlinkType",
                    "xlink:type": "xlinkType",
                    xmlbase: "xmlBase",
                    "xml:base": "xmlBase",
                    xmllang: "xmlLang",
                    "xml:lang": "xmlLang",
                    "xml:space": "xmlSpace",
                    xmlnsxlink: "xmlnsXlink",
                    "xmlns:xlink": "xmlnsXlink",
                    xmlspace: "xmlSpace",
                    ychannelselector: "yChannelSelector",
                    zoomandpan: "zoomAndPan",
                    onblur: "onBlur",
                    onchange: "onChange",
                    onclick: "onClick",
                    oncontextmenu: "onContextMenu",
                    ondoubleclick: "onDoubleClick",
                    ondrag: "onDrag",
                    ondragend: "onDragEnd",
                    ondragenter: "onDragEnter",
                    ondragexit: "onDragExit",
                    ondragleave: "onDragLeave",
                    ondragover: "onDragOver",
                    ondragstart: "onDragStart",
                    ondrop: "onDrop",
                    onerror: "onError",
                    onfocus: "onFocus",
                    oninput: "onInput",
                    oninvalid: "onInvalid",
                    onkeydown: "onKeyDown",
                    onkeypress: "onKeyPress",
                    onkeyup: "onKeyUp",
                    onload: "onLoad",
                    onmousedown: "onMouseDown",
                    onmouseenter: "onMouseEnter",
                    onmouseleave: "onMouseLeave",
                    onmousemove: "onMouseMove",
                    onmouseout: "onMouseOut",
                    onmouseover: "onMouseOver",
                    onmouseup: "onMouseUp",
                    onscroll: "onScroll",
                    onsubmit: "onSubmit",
                    ontouchcancel: "onTouchCancel",
                    ontouchend: "onTouchEnd",
                    ontouchmove: "onTouchMove",
                    ontouchstart: "onTouchStart",
                    onwheel: "onWheel"
                };

            function l(e, t, n) {
                let r = [...e].map((e, r) => c(e, {
                    ...n,
                    index: r,
                    level: t + 1
                })).filter(Boolean);
                return r.length ? r : null
            }

            function c(e, t = {}) {
                if (!e || !(e instanceof Node)) return null;
                let {
                    actions: n = [],
                    index: r = 0,
                    level: c = 0,
                    randomKey: u
                } = t, d = e, h = `${c}-${r}`, p = [];
                return (u && 0 === c && (h = `${function(e=6){let t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="";for(let r=e;r>0;--r)n+=t[Math.round(Math.random()*(t.length-1))];return n}()}-${h}`), Array.isArray(n) && n.forEach(t => {
                    t.condition(d, h, c) && ("function" != typeof t.pre || (d = t.pre(d, h, c)) instanceof Node || (d = e), "function" == typeof t.post && p.push(t.post(d, h, c)))
                }), p.length) ? p : function(e, t) {
                    let {
                        key: n,
                        level: r,
                        ...c
                    } = t;
                    switch (e.nodeType) {
                        case 1:
                            var u;
                            return i.createElement((u = e.nodeName, /[a-z]+[A-Z]+[a-z]+/.test(u) ? u : u.toLowerCase()), function(e, t) {
                                let n = {
                                    key: t
                                };
                                if (e instanceof Element) {
                                    let t = e.getAttribute("class");
                                    t && (n.className = t), [...e.attributes].forEach(e => {
                                        switch (e.name) {
                                            case "class":
                                                break;
                                            case "style":
                                                n[e.name] = o(e.value);
                                                break;
                                            case "allowfullscreen":
                                            case "allowpaymentrequest":
                                            case "async":
                                            case "autofocus":
                                            case "autoplay":
                                            case "checked":
                                            case "controls":
                                            case "default":
                                            case "defer":
                                            case "disabled":
                                            case "formnovalidate":
                                            case "hidden":
                                            case "ismap":
                                            case "itemscope":
                                            case "loop":
                                            case "multiple":
                                            case "muted":
                                            case "nomodule":
                                            case "novalidate":
                                            case "open":
                                            case "readonly":
                                            case "required":
                                            case "reversed":
                                            case "selected":
                                            case "typemustmatch":
                                                n[s[e.name] || e.name] = !0;
                                                break;
                                            default:
                                                n[s[e.name] || e.name] = e.value
                                        }
                                    })
                                }
                                return n
                            }(e, n), l(e.childNodes, r, c));
                        case 3: {
                            let t = e.nodeValue?.toString() ?? "";
                            if (!c.allowWhiteSpaces && /^\s+$/.test(t) && !/[\u00A0\u202F]/.test(t)) return null;
                            if (!e.parentNode) return t;
                            let n = e.parentNode.nodeName.toLowerCase();
                            if (a.includes(n)) return /\S/.test(t) && console.warn(`A textNode is not allowed inside '${n}'. Your text "${t}" will be ignored`), null;
                            return t
                        }
                        case 8:
                        default:
                            return null;
                        case 11:
                            return l(e.childNodes, r, t)
                    }
                }(d, {
                    key: h,
                    level: c,
                    ...t
                })
            }

            function u(e, t = {}) {
                return "string" == typeof e ? function(e, t = {}) {
                    if (!e || "string" != typeof e) return null;
                    let {
                        includeAllNodes: n = !1,
                        nodeOnly: r = !1,
                        selector: i = "body > *",
                        type: o = "text/html"
                    } = t;
                    try {
                        let a = new DOMParser().parseFromString(e, o);
                        if (n) {
                            let {
                                childNodes: e
                            } = a.body;
                            if (r) return e;
                            return [...e].map(e => c(e, t))
                        }
                        let s = a.querySelector(i) || a.body.childNodes[0];
                        if (!(s instanceof Node)) throw TypeError("Error parsing input");
                        if (r) return s;
                        return c(s, t)
                    } catch (e) {}
                    return null
                }(e, t) : e instanceof Node ? c(e, t) : null
            }
            var d = n(57437),
                h = Object.defineProperty,
                p = (e, t, n) => t in e ? h(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                f = (e, t, n) => (p(e, "symbol" != typeof t ? t + "" : t, n), n),
                g = "react-inlinesvg",
                m = {
                    IDLE: "idle",
                    LOADING: "loading",
                    LOADED: "loaded",
                    FAILED: "failed",
                    READY: "ready",
                    UNSUPPORTED: "unsupported"
                };

            function y() {
                return !!("undefined" != typeof window && window.document && window.document.createElement)
            }
            async function v(e, t) {
                let n = await fetch(e, t),
                    r = n.headers.get("content-type"),
                    [i] = (null != r ? r : "").split(/ ?; ?/);
                if (n.status > 299) throw Error("Not found");
                if (!["image/svg+xml", "text/plain"].some(e => i.includes(e))) throw Error("Content type isn't valid: ".concat(i));
                return n.text()
            }
            var k = class {
                onReady(e) {
                    this.isReady ? e() : this.subscribers.push(e)
                }
                async get(e, t) {
                    var n, r;
                    return await (this.cacheApi ? this.fetchAndAddToPersistentCache(e, t) : this.fetchAndAddToInternalCache(e, t)), null !== (r = null === (n = this.cacheStore.get(e)) || void 0 === n ? void 0 : n.content) && void 0 !== r ? r : ""
                }
                set(e, t) {
                    this.cacheStore.set(e, t)
                }
                isCached(e) {
                    var t;
                    return (null === (t = this.cacheStore.get(e)) || void 0 === t ? void 0 : t.status) === m.LOADED
                }
                async fetchAndAddToInternalCache(e, t) {
                    let n = this.cacheStore.get(e);
                    if ((null == n ? void 0 : n.status) === m.LOADING) {
                        await this.handleLoading(e, async () => {
                            this.cacheStore.set(e, {
                                content: "",
                                status: m.IDLE
                            }), await this.fetchAndAddToInternalCache(e, t)
                        });
                        return
                    }
                    if (!(null == n ? void 0 : n.content)) {
                        this.cacheStore.set(e, {
                            content: "",
                            status: m.LOADING
                        });
                        try {
                            let n = await v(e, t);
                            this.cacheStore.set(e, {
                                content: n,
                                status: m.LOADED
                            })
                        } catch (t) {
                            throw this.cacheStore.set(e, {
                                content: "",
                                status: m.FAILED
                            }), t
                        }
                    }
                }
                async fetchAndAddToPersistentCache(e, t) {
                    var n, r, i, o;
                    let a = this.cacheStore.get(e);
                    if ((null == a ? void 0 : a.status) === m.LOADED) return;
                    if ((null == a ? void 0 : a.status) === m.LOADING) {
                        await this.handleLoading(e, async () => {
                            this.cacheStore.set(e, {
                                content: "",
                                status: m.IDLE
                            }), await this.fetchAndAddToPersistentCache(e, t)
                        });
                        return
                    }
                    this.cacheStore.set(e, {
                        content: "",
                        status: m.LOADING
                    });
                    let s = await (null === (n = this.cacheApi) || void 0 === n ? void 0 : n.match(e));
                    if (s) {
                        let t = await s.text();
                        this.cacheStore.set(e, {
                            content: t,
                            status: m.LOADED
                        });
                        return
                    }
                    try {
                        await (null === (r = this.cacheApi) || void 0 === r ? void 0 : r.add(new Request(e, t)));
                        let n = await (null === (i = this.cacheApi) || void 0 === i ? void 0 : i.match(e)),
                            a = null !== (o = await (null == n ? void 0 : n.text())) && void 0 !== o ? o : "";
                        this.cacheStore.set(e, {
                            content: a,
                            status: m.LOADED
                        })
                    } catch (t) {
                        throw this.cacheStore.set(e, {
                            content: "",
                            status: m.FAILED
                        }), t
                    }
                }
                async handleLoading(e, t) {
                    var n;
                    let r = 0;
                    for (;
                        (null === (n = this.cacheStore.get(e)) || void 0 === n ? void 0 : n.status) === m.LOADING && r < 10;) await
                    function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return new Promise(t => {
                            setTimeout(t, 1e3 * e)
                        })
                    }(.1), r += 1;
                    r >= 10 && await t()
                }
                keys() {
                    return [...this.cacheStore.keys()]
                }
                data() {
                    return [...this.cacheStore.entries()].map(e => {
                        let [t, n] = e;
                        return {
                            [t]: n
                        }
                    })
                }
                async delete(e) {
                    this.cacheApi && await this.cacheApi.delete(e), this.cacheStore.delete(e)
                }
                async clear() {
                    if (this.cacheApi)
                        for (let e of (await this.cacheApi.keys())) await this.cacheApi.delete(e);
                    this.cacheStore.clear()
                }
                constructor() {
                    f(this, "cacheApi"), f(this, "cacheStore"), f(this, "subscribers", []), f(this, "isReady", !1), this.cacheStore = new Map;
                    let e = g,
                        t = !1;
                    if (y()) {
                        var n;
                        e = null !== (n = window.REACT_INLINESVG_CACHE_NAME) && void 0 !== n ? n : g, t = !!window.REACT_INLINESVG_PERSISTENT_CACHE && "caches" in window
                    }
                    t ? caches.open(e).then(e => {
                        this.cacheApi = e, this.isReady = !0, this.subscribers.forEach(e => e())
                    }).catch(e => {
                        this.isReady = !0, console.error("Failed to open cache: ".concat(e.message))
                    }) : this.isReady = !0
                }
            };

            function w(e) {
                let t = (0, i.useRef)();
                return (0, i.useEffect)(() => {
                    t.current = e
                }), t.current
            }

            function x(e) {
                let {
                    cacheRequests: t = !0,
                    children: n = null,
                    description: o,
                    fetchOptions: a,
                    innerRef: s,
                    loader: l = null,
                    onError: c,
                    onLoad: d,
                    src: h,
                    title: p,
                    uniqueHash: f
                } = e, [g, k] = (0, i.useReducer)((e, t) => ({
                    ...e,
                    ...t
                }), {
                    content: "",
                    element: null,
                    isCached: t && r.isCached(e.src),
                    status: m.IDLE
                }), {
                    content: x,
                    element: b,
                    isCached: E,
                    status: A
                } = g, S = w(e), D = w(g), C = (0, i.useRef)(null != f ? f : function(e) {
                    let t = "abcdefghijklmnopqrstuvwxyz",
                        n = "".concat(t).concat(t.toUpperCase()).concat("1234567890"),
                        r = "";
                    for (let e = 0; e < 8; e++) r += n[Math.floor(Math.random() * n.length)];
                    return r
                }(0)), L = (0, i.useRef)(!1), O = (0, i.useRef)(!1), R = (0, i.useCallback)(e => {
                    L.current && (k({
                        status: "Browser does not support SVG" === e.message ? m.UNSUPPORTED : m.FAILED
                    }), null == c || c(e))
                }, [c]), N = (0, i.useCallback)(function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    L.current && k({
                        content: e,
                        isCached: t,
                        status: m.LOADED
                    })
                }, []), T = (0, i.useCallback)(async () => {
                    N(await v(h, a))
                }, [a, N, h]), I = (0, i.useCallback)(() => {
                    try {
                        let t = function(e) {
                                let {
                                    baseURL: t,
                                    content: n,
                                    description: r,
                                    handleError: i,
                                    hash: o,
                                    preProcessor: a,
                                    title: s,
                                    uniquifyIDs: l = !1
                                } = e;
                                try {
                                    let e = a ? a(n) : n,
                                        i = u(e, {
                                            nodeOnly: !0
                                        });
                                    if (!i || !(i instanceof SVGSVGElement)) throw Error("Could not convert the src to a DOM Node");
                                    let c = function e(t, n) {
                                        let {
                                            baseURL: r = "",
                                            hash: i,
                                            uniquifyIDs: o
                                        } = n, a = ["id", "href", "xlink:href", "xlink:role", "xlink:arcrole"], s = ["href", "xlink:href"], l = (e, t) => s.includes(e) && !!t && !t.includes("#");
                                        return o && [...t.children].forEach(t => {
                                            var o;
                                            if (null === (o = t.attributes) || void 0 === o ? void 0 : o.length) {
                                                let e = Object.values(t.attributes).map(e => {
                                                    let t = /url\((.*?)\)/.exec(e.value);
                                                    return (null == t ? void 0 : t[1]) && (e.value = e.value.replace(t[0], "url(".concat(r).concat(t[1], "__").concat(i, ")"))), e
                                                });
                                                a.forEach(t => {
                                                    let n = e.find(e => e.name === t);
                                                    n && !l(t, n.value) && (n.value = "".concat(n.value, "__").concat(i))
                                                })
                                            }
                                            return t.children.length ? e(t, n) : t
                                        }), t
                                    }(i, {
                                        baseURL: t,
                                        hash: o,
                                        uniquifyIDs: l
                                    });
                                    if (r) {
                                        let e = c.querySelector("desc");
                                        (null == e ? void 0 : e.parentNode) && e.parentNode.removeChild(e);
                                        let t = document.createElementNS("http://www.w3.org/2000/svg", "desc");
                                        t.innerHTML = r, c.prepend(t)
                                    }
                                    if (void 0 !== s) {
                                        let e = c.querySelector("title");
                                        if ((null == e ? void 0 : e.parentNode) && e.parentNode.removeChild(e), s) {
                                            let e = document.createElementNS("http://www.w3.org/2000/svg", "title");
                                            e.innerHTML = s, c.prepend(e)
                                        }
                                    }
                                    return c
                                } catch (e) {
                                    return i(e)
                                }
                            }({
                                ...e,
                                handleError: R,
                                hash: C.current,
                                content: x
                            }),
                            n = u(t);
                        if (!n || !(0, i.isValidElement)(n)) throw Error("Could not convert the src to a React element");
                        k({
                            element: n,
                            status: m.READY
                        })
                    } catch (e) {
                        R(Error(e.message))
                    }
                }, [x, R, e]), M = (0, i.useCallback)(async () => {
                    let e;
                    let n = /^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(h);
                    if (n ? e = n[1] ? window.atob(n[2]) : decodeURIComponent(n[2]) : h.includes("<svg") && (e = h), e) {
                        N(e);
                        return
                    }
                    try {
                        if (t) {
                            let e = await r.get(h, a);
                            N(e, !0)
                        } else await T()
                    } catch (e) {
                        R(e)
                    }
                }, [t, T, a, R, N, h]), P = (0, i.useCallback)(async () => {
                    L.current && k({
                        content: "",
                        element: null,
                        isCached: !1,
                        status: m.LOADING
                    })
                }, []);
                (0, i.useEffect)(() => {
                    if (L.current = !0, !y() || O.current) return () => void 0;
                    try {
                        if (A === m.IDLE) {
                            if (!(function() {
                                    if (!document) return !1;
                                    let e = document.createElement("div");
                                    e.innerHTML = "<svg />";
                                    let t = e.firstChild;
                                    return !!t && "http://www.w3.org/2000/svg" === t.namespaceURI
                                }() && "undefined" != typeof window && null !== window)) throw Error("Browser does not support SVG");
                            if (!h) throw Error("Missing src");
                            P()
                        }
                    } catch (e) {
                        R(e)
                    }
                    return O.current = !0, () => {
                        L.current = !1
                    }
                }, []), (0, i.useEffect)(() => {
                    if (y() && S) {
                        if (S.src !== h) {
                            if (!h) {
                                R(Error("Missing src"));
                                return
                            }
                            P()
                        } else(S.title !== p || S.description !== o) && I()
                    }
                }, [o, I, R, P, S, h, p]), (0, i.useEffect)(() => {
                    D && (D.status !== m.LOADING && A === m.LOADING && M(), D.status !== m.LOADED && A === m.LOADED && I(), D.status !== m.READY && A === m.READY && (null == d || d(h, E)))
                }, [M, I, E, d, D, h, A]);
                let z = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    let i = {};
                    for (let t in e)({}).hasOwnProperty.call(e, t) && !n.includes(t) && (i[t] = e[t]);
                    return i
                }(e, "baseURL", "cacheRequests", "children", "description", "fetchOptions", "innerRef", "loader", "onError", "onLoad", "preProcessor", "src", "title", "uniqueHash", "uniquifyIDs");
                return y() ? b ? (0, i.cloneElement)(b, {
                    ref: s,
                    ...z
                }) : [m.UNSUPPORTED, m.FAILED].includes(A) ? n : l : l
            }

            function b(e) {
                r || (r = new k);
                let {
                    loader: t
                } = e, n = (0, i.useRef)(!1), [o, a] = (0, i.useState)(r.isReady);
                return ((0, i.useEffect)(() => {
                    n.current || (r.onReady(() => {
                        a(!0)
                    }), n.current = !0)
                }, []), o) ? (0, d.jsx)(x, {
                    ...e
                }) : t
            }
        }
    }
]);