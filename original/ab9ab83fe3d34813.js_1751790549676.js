"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
      [935],
      {
        3795: function(e, l, t)
        {
          t(7294);
          var a, c, i, n = t(3967),
            o = t.n(n),
            r = t(9821),
            s = t(5893),
            h = ((a = h ||
            {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a
              .LARGE = 2] = "LARGE", a[a.STRETCH = 3] = "STRETCH", a),
            d = ((c = d ||
              {})[c.NONE = 0] = "NONE", c[c.FILLED = 1] = "FILLED", c[c
                .STROKE = 2] = "STROKE", c[c.TRANSPARENT = 3] = "TRANSPARENT",
              c[c.SEMITRANSPARENT = 4] = "SEMITRANSPARENT", c[c.MONOCHROME =
                5] = "MONOCHROME", c[c.LINK = 6] = "LINK", c);
          let v = {
              [d.NONE]: "",
              [d.FILLED]: "button--filled",
              [d.STROKE]: "button--stroke",
              [d.TRANSPARENT]: "button--transparent",
              [d.SEMITRANSPARENT]: "button--semitransparent",
              [d.MONOCHROME]: "button--monochrome",
              [d.LINK]: "button--link"
            },
            p = {
              [h.SMALL]: "button--sm",
              [h.MEDIUM]: "",
              [h.LARGE]: "button--lg",
              [h.STRETCH]: "button--stretch"
            };
          var u = ((i = u ||
          {})[i.NONE = 0] = "NONE", i[i.Primary = 1] = "Primary", i[i
            .White = 2] = "White", i[i.Dark = 3] = "Dark", i);
          let m = {
            [u.NONE]: "",
            [u.Primary]: "button--primary",
            [u.White]: "button--white",
            [u.Dark]: "button--color-dark"
          };

          function f(e)
          {
            let
            {
              icon: l,
              labelText: t,
              text: a,
              href: c,
              hasExtraVgap: i,
              extraClass: n,
              jsClass: f,
              testId: g,
              color: x = u.NONE,
              size: j = h.MEDIUM,
              designType: b = d.NONE,
              isCircle: z,
              inline: C,
              isApp: M,
              onClick: _,
              target: y,
              rel: w,
              type: L,
              seo: N = {
                name: null,
                category: null,
                action: null,
                label: null,
                source: null
              }
            } = e, k = o()(
            {
              button: !0,
              "button--circle": z,
              "button--app": M,
              "button--extra-vgap": i,
              "button--inline": C,
              [m[x]]: !0,
              [p[j]]: !0,
              [v[b]]: !0,
              [f]: f,
              [n]: n
            }), E = w;
            return ("_blank" === y && (E = "noreferrer"), c) ? (0, s.jsx)(r.Z,
            {
              "aria-label": t?.toString(),
              className: k,
              href: c,
              target: y,
              rel: E,
              type: L,
              "data-seo-name": N.name,
              "data-seo-category": N.category,
              "data-seo-action": N.action,
              "data-seo-label": N.label,
              "data-source": N.source,
              "data-test": g,
              onClick: _,
              children: (0, s.jsxs)("span",
              {
                className: "button__content",
                children: [l ? (0, s.jsx)("span",
                {
                  className: "button__icon",
                  children: l
                }) : null, a ? (0, s.jsx)("span",
                {
                  className: "button__text",
                  children: a
                }) : null]
              })
            }) : (0, s.jsx)("button",
            {
              "aria-label": t?.toString(),
              className: k,
              type: L,
              "data-seo-name": N.name,
              "data-seo-category": N.category,
              "data-seo-action": N.action,
              "data-seo-label": N.label,
              "data-source": N.source,
              "data-test": g,
              onClick: _,
              children: (0, s.jsxs)("span",
              {
                className: "button__content",
                children: [l ? (0, s.jsx)("span",
                {
                  className: "button__icon",
                  children: l
                }) : null, a ? (0, s.jsx)("span",
                {
                  className: "button__text",
                  children: a
                }) : null]
              })
            })
          }
          f.color = u, f.size = h, f.designType = d, l.Z = f
        },
        7524: function(e, l, t)
        {
          var a = t(7294),
            c = t(3967),
            i = t.n(c),
            n = t(9821),
            o = t(7348),
            r = t(5893);
          l.Z = function(e)
          {
            let
            {
              logo: l,
              headerMenu: c,
              actionDesktopButtons: s,
              actionMobilePanel: h,
              actionAppDownload: d,
              actionIosAppDownload: v,
              actionAndroidAppDownload: p,
              actionSignIn: u,
              actions: m,
              extraClass: f,
              hasShadow: g
            } = e, [x, j] = (0, a.useState)(!0), [b, z] = (0, a.useState)(!
              1), C = i()(
            {
              "is-hidden": !x,
              "is-fixed": b,
              "has-shadow": g,
              header__inner: !0,
              [f]: f
            });
            return (0, a.useEffect)(() =>
            {
              var e;
              let l;
              let a = t.g.document.body.classList.contains("ie11") || t
                .g.document.body.classList.contains("edge"),
                c = 0,
                i = (e = function()
                {
                  let e = Math.max(t.g.window.scrollY, 0);
                  z(!0), 5 >= Math.abs(c - e) || (e > c ? (j(!1), t.g
                      .document.body.classList.remove(
                        "has-sticky-header")) : e + t.g.window
                    .innerHeight < t.g.document.documentElement
                    .scrollHeight && (j(!0), t.g.document.body
                      .classList.add("has-sticky-header")), c = e)
                }, function()
                {
                  l || (l = setTimeout(function()
                  {
                    l = void 0, e()
                  }, 300))
                });
              return !1 === a && (t.g.window.addEventListener("scroll",
                i), t.g.window.addEventListener("resize", i)), () =>
              {
                t.g.window.removeEventListener("scroll", i), t.g
                  .window.removeEventListener("resize", i)
              }
            }, []), (0, r.jsx)("div",
            {
              className: "header",
              children: (0, r.jsxs)("div",
              {
                className: C,
                children: [(0, r.jsx)("div",
                {
                  className: "header__logotype",
                  children: (0, r.jsx)(n.Z,
                  {
                    className: "header__logotype-link",
                    href: o._j.index,
                    "aria-label": "Home page",
                    children: l
                  })
                }), c ? (0, r.jsx)("div",
                {
                  className: "header__menu",
                  children: c
                }) : null, (0, r.jsxs)("div",
                {
                  className: "header__actions",
                  children: [h ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--mobile-panel",
                    children: h
                  }) : null, d ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--download",
                    children: d
                  }) : null, v ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--download-ios",
                    children: v
                  }) : null, p ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--download-android",
                    children: p
                  }) : null, s ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--dw-buttons",
                    children: s
                  }) : null, u ? (0, r.jsx)("div",
                  {
                    className: "header__actions-item header__actions-item--sign-in",
                    children: u
                  }) : null, m ? m.map((e, l) => (0, r
                    .jsx)("div",
                  {
                    className: "header__actions-item",
                    children: e
                  }, l)) : null]
                })]
              })
            })
          }
        },
        5170: function(e, l, t)
          {
            t.d(l,
            {
              $: function()
              {
                return s
              }
            }), t(7294);
            var a = t(3967),
              c = t.n(a),
              i = t(5893);
            let n = {
                AppStoreButton: "icon-appstore-button",
                GooglePlayButton: "icon-google-play-button",
                Android: "icon-android",
                GooglePlay: "icon-google-play",
                GooglePlayTitle: "icon-google-play-title",
                Apple: "icon-apple",
                AppStoreTitle: "icon-app-store-title",
                ArrowNext: "icon-arrow-next",
                VideoClose: "icon-video-close",
                Close: "icon-close",
                Facebook: "icon-facebook",
                FacebookSquare: "icon-facebook-square",
                Instagram: "icon-instagram",
                Linkedin: "icon-linkedin",
                List: "icon-list",
                LogoSM: "icon-logo-sm",
                Snapchat: "icon-snapchat",
                Twitter: "icon-twitter",
                Pinterest: "icon-pinterest",
                Menu: "icon-menu",
                Refresh: "icon-refresh",
                Tick: "icon-tick",
                Search: "icon-search",
                MediaPlayCircle: "icon-media-play-circle",
                MediaPlayCircleHollow: "icon-media-play-circle-hollow",
                QuestionCircle: "icon-question-circle",
                ChevronUp: "icon-chevron-up",
                ChevronCircleDown: "icon-chevron-circle-down",
                ChevronCircleUp: "icon-chevron-circle-up",
                GenericChevronBackStroke: "generic-chevron-back-stroke",
                GenericChevronForwardStroke: "generic-chevron-forward-stroke",
                GenericChevronUp: "generic-chevron-up",
                GenericChevronDown: "generic-chevron-down"
              },
              o = {
                [n.AppStoreButton]: (0, i.jsxs)("svg",
                {
                  viewBox: "0 0 120 40",
                  children: [(0, i.jsxs)("g",
                  {
                    clipPath: "url(#clip0)",
                    children: [(0, i.jsx)("path",
                    {
                      d: "M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.192a6.665 6.665 0 00-1.9.627A6.438 6.438 0 00.193 5.522a12.993 12.993 0 00-.179 2.002c-.01.306-.01.614-.015.92V31.56c.005.31.006.611.015.922.008.67.068 1.34.18 2.002.11.663.32 1.305.624 1.904.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179a6.7 6.7 0 001.901.63c.663.11 1.333.169 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.27 13.27 0 002-.177 6.805 6.805 0 001.908-.631A6.293 6.293 0 00117.666 38a6.403 6.403 0 001.182-1.614c.302-.6.51-1.242.619-1.904.111-.662.173-1.331.185-2.002.004-.311.004-.612.004-.922.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 00-.185-2.002 6.648 6.648 0 00-.619-1.904 6.469 6.469 0 00-2.799-2.8 6.77 6.77 0 00-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z",
                      fill: "#A6A6A6"
                    }), (0, i.jsx)("path",
                    {
                      d: "M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.321 5.321 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.413 12.413 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 015.668 1.05C6.288.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 011.858.162 5.933 5.933 0 011.671.548 5.589 5.589 0 012.415 2.42c.261.52.441 1.076.536 1.649.103.624.161 1.255.173 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.068 1.24-.171 1.853a5.716 5.716 0 01-.54 1.67 5.47 5.47 0 01-1.015 1.386 5.414 5.414 0 01-1.4 1.022 5.855 5.855 0 01-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002z",
                      fill: "#000"
                    }), (0, i.jsx)("path",
                    {
                      d: "M24.768 20.3a4.95 4.95 0 012.357-4.151 5.067 5.067 0 00-3.992-2.158c-1.679-.176-3.307 1.005-4.162 1.005-.873 0-2.19-.987-3.609-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.27 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.024 2.427-1.332 3.32-2.67a10.963 10.963 0 001.52-3.092 4.781 4.781 0 01-2.92-4.4zM22.036 12.21a4.872 4.872 0 001.114-3.49 4.957 4.957 0 00-3.207 1.66 4.635 4.635 0 00-1.144 3.361 4.099 4.099 0 003.237-1.53zM42.3 27.14h-4.733l-1.136 3.356h-2.005l4.483-12.418h2.083l4.484 12.418h-2.04l-1.135-3.356zm-4.242-1.55h3.752l-1.85-5.446h-.052l-1.85 5.447zM55.157 25.97c0 2.813-1.506 4.621-3.778 4.621a3.07 3.07 0 01-2.849-1.584h-.043v4.484H46.63V21.443h1.799v1.505h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046zM65.122 25.97c0 2.813-1.506 4.621-3.778 4.621a3.07 3.07 0 01-2.849-1.584h-.043v4.484h-1.858V21.443h1.799v1.505h.034a3.212 3.212 0 012.883-1.6c2.297 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.446 0 2.393-1.196 2.393-3.046zM71.709 27.036c.138 1.232 1.334 2.04 2.969 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.289-1.936l-1.61-.388c-2.28-.55-3.338-1.617-3.338-3.348 0-2.142 1.867-3.614 4.518-3.614 2.624 0 4.423 1.472 4.484 3.614H77.26c-.113-1.239-1.137-1.987-2.634-1.987-1.497 0-2.522.757-2.522 1.858 0 .878.655 1.395 2.255 1.79l1.369.336c2.547.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.794 3.778-2.754 0-4.613-1.42-4.733-3.667h1.902zM83.344 19.3v2.142h1.721v1.472h-1.721v4.991c0 .776.345 1.137 1.101 1.137a5.81 5.81 0 00.612-.043v1.463c-.34.064-.686.092-1.033.086-1.833 0-2.547-.689-2.547-2.444v-5.19H80.16v-1.472h1.317V19.3h1.867zM86.064 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.66 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.696 0c0-1.954-.896-3.108-2.402-3.108-1.505 0-2.4 1.162-2.4 3.108 0 1.962.895 3.106 2.4 3.106 1.506 0 2.402-1.144 2.402-3.106zM96.184 21.442h1.772v1.541H98a2.16 2.16 0 012.178-1.635c.214-.001.428.022.637.07v1.737a2.603 2.603 0 00-.835-.112 1.872 1.872 0 00-1.937 2.083v5.37h-1.858v-9.053zM109.382 27.837c-.25 1.643-1.851 2.771-3.899 2.771-2.633 0-4.268-1.764-4.268-4.595 0-2.84 1.643-4.682 4.19-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.353 2.353 0 001.458 2.391c.31.127.643.186.977.173a2.048 2.048 0 002.091-1.273h1.765zm-6.282-2.702h4.526a2.184 2.184 0 00-.608-1.634 2.188 2.188 0 00-1.613-.664 2.292 2.292 0 00-2.305 2.298zM37.827 8.73a2.64 2.64 0 012.808 2.966c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155zM36.6 13.855h1.125a1.877 1.877 0 001.967-2.146 1.88 1.88 0 00-1.967-2.134h-1.125v4.28zM41.682 12.444a2.134 2.134 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.574 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zM53.853 10.195h.856v.715h.066a1.348 1.348 0 011.344-.802 1.466 1.466 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 00-1.075 1.141v2.635h-.889v-4.503zM59.094 8.437h.888v6.26h-.888v-6.26zM61.219 12.444a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.248 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.402 13.424c0-.81.604-1.277 1.675-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.091-.773.819-1.27 1.84-1.27 1.129 0 1.766.563 1.766 1.514v3.077h-.856v-.633h-.07a1.516 1.516 0 01-1.353.707 1.36 1.36 0 01-1.5-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.901.253-.901.65 0 .405.351.64.835.64a1.064 1.064 0 001.166-.983zM71.35 12.444c0-1.423.731-2.324 1.869-2.324a1.484 1.484 0 011.38.79h.067V8.437h.889v6.26h-.852v-.71h-.07a1.563 1.563 0 01-1.414.785c-1.146 0-1.87-.901-1.87-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.749 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.134 2.134 0 114.248 0 2.132 2.132 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.067a1.349 1.349 0 011.344-.802 1.465 1.465 0 011.558 1.675v2.915h-.888v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 00-1.075 1.141v2.635h-.89v-4.503zM93.517 9.074v1.141h.975v.749h-.975v2.315c0 .472.194.678.636.678.114 0 .227-.007.34-.02v.74c-.16.029-.322.044-.484.046-.989 0-1.382-.348-1.382-1.216v-2.543h-.715v-.749h.715V9.074h.89zM95.705 8.437h.88v2.482h.071a1.386 1.386 0 011.373-.807 1.485 1.485 0 011.551 1.678v2.908h-.89V12.01c0-.72-.334-1.084-.962-1.084a1.05 1.05 0 00-1.134 1.142v2.63h-.889V8.437zM104.761 13.482a1.823 1.823 0 01-1.951 1.303 2.048 2.048 0 01-2.01-1.447 2.05 2.05 0 01-.07-.877 2.093 2.093 0 01.071-.88 2.078 2.078 0 012.005-1.473c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.077 1.077 0 001.071-.546h.855zm-3.126-1.451h2.275a1.094 1.094 0 00-.667-1.083 1.086 1.086 0 00-.442-.084 1.151 1.151 0 00-1.166 1.167z",
                      fill: "#fff"
                    })]
                  }), (0, i.jsx)("defs",
                  {
                    children: (0, i.jsx)("clipPath",
                    {
                      id: "clip0",
                      children: (0, i.jsx)("path",
                      {
                        fill: "#fff",
                        d: "M0 0h119.664v40H0z"
                      })
                    })
                  })]
                }),
                [n.GooglePlayButton]: (0, i.jsxs)("svg",
                    {
                      viewBox: "0 0 135 40",
                      children: [(0, i.jsx)("path",
                          {
                            d: "M130 40H5c-2.75 0-5-2.25-5-5V5c0-2.75 2.25-5 5-5h125c2.75 0 5 2.25 5 5v30c0 2.75-2.25 5-5 5z",
                            fill: "#000"
                          }), (0, i.jsx)("path",
                          {
                            d: "M130 .8a4.2 4.2 0 014.2 4.2v30a4.2 4.2 0 01-4.2 4.2H5A4.2 4.2 0 01.8 35V5A4.2 4.2 0 015 .8h125zm0-.8H5C2.25 0 0 2.25 0 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5z",
                            fill: "#A6A6A6"
                          }), (0, i.jsx)("path",
                          {
                            d: "M47.42 10.24c0 .84-.25 1.51-.75 2-.56.59-1.3.89-2.2.89-.87 0-1.6-.3-2.21-.9-.61-.6-.91-1.35-.91-2.23 0-.89.3-1.63.91-2.23.61-.6 1.34-.9 2.21-.9.43 0 .84.08 1.23.25.39.17.7.39.94.67l-.53.53c-.4-.47-.94-.71-1.64-.71-.63 0-1.18.22-1.64.67-.46.44-.69 1.02-.69 1.73s.23 1.29.69 1.73c.46.44 1.01.67 1.64.67.67 0 1.23-.22 1.68-.67.29-.29.46-.7.5-1.22h-2.18v-.73h2.91c.02.16.04.31.04.45zM52.03 7.74H49.3v1.9h2.46v.72H49.3v1.9h2.73V13h-3.5V7h3.5v.74zM55.28 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13h.01zM59.94 13V7h.77v6h-.77zM64.13 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13h.01zM73.61 12.22c-.59.61-1.32.91-2.2.91-.88 0-1.61-.3-2.2-.91-.59-.61-.88-1.35-.88-2.22 0-.87.29-1.62.88-2.22.59-.61 1.32-.91 2.2-.91.87 0 1.6.3 2.2.91.59.61.89 1.35.89 2.22-.01.88-.3 1.62-.89 2.22zm-3.83-.5c.44.45.99.67 1.63.67.64 0 1.19-.22 1.63-.67.44-.45.67-1.02.67-1.72s-.22-1.27-.67-1.72c-.44-.45-.99-.68-1.63-.68-.64 0-1.19.22-1.63.67-.44.46-.67 1.03-.67 1.73s.23 1.27.67 1.72zM75.58 13V7h.94l2.92 4.67h.03l-.03-1.16V7h.77v6h-.8l-3.05-4.89h-.03l.03 1.16V13h-.78z",
                            fill: "#fff",
                            stroke: "#fff",
                            strokeWidth: ".2",
                            strokeMiterlimit: "10"
                          }), (0, i.jsx)("path",
                            {
                              d: "M68.14 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.12 2.58-2.4 2.58zm-9.32-6.83c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58zm-11.08-5.52v1.8h4.32c-.13 1.01-.47 1.76-.98 2.27-.63.63-1.61 1.32-3.33 1.32-2.66 0-4.74-2.14-4.74-4.8 0-2.66 2.08-4.8 4.74-4.8 1.43 0 2.48.56 3.25 1.29l1.27-1.27c-1.08-1.03-2.51-1.82-4.53-1.82-3.64 0-6.7 2.96-6.7 6.61 0 3.64 3.06 6.61 6.7 6.61 1.97 0 3.45-.64 4.61-1.85 1.19-1.19 1.56-2.87 1.56-4.22 0-.42-.03-.8,...
