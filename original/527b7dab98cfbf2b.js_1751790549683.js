(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
      [297],
      {
        6297: function(e, t, r)
          {
            "use strict";
            r.r(t), r.d(t,
            {
              __N_SSP: function()
              {
                return r6
              },
              default: function()
              {
                return r5
              }
            });
            var i, n, l, o, a, s, c, u, m, d, b, p, f, g = r(7294),
              x = r(9008),
              h = r.n(x),
              j = r(3802),
              v = r(5170),
              y = r(2962),
              _ = r(1923),
              O = {
                lxBumbleHiringBlockTitle: e => _.ZP.get(
                  "bumblesite@team_bumble.sharing_assets.hiring_block.title",
                  e),
                get lxBumbleHiringBlockText()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.sharing_assets.hiring_block.text"
                    )
                },
                lxBumbleHomepageTabTitle: e => _.ZP.get(
                  "bumblesite@team_bumble.sharing_assets.bumble_homepage_tab.title",
                  e),
                get lxBumbleLifeTabTitle()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.sharing_assets.bumble_life_tab.title"
                    )
                }
              },
              w = r(5893);
            let P = "Bumble",
              k = e => r.g.window ? `${r.g.window.location.origin}${e}` :
              `https://team.bumble.com${e}`,
              S = {
                get TAB_TITLE()
                {
                  return O.lxBumbleHomepageTabTitle(
                  {
                    page_partner_name: P
                  })
                },
                get NAME()
                {
                  return O.lxBumbleHomepageTabTitle(
                  {
                    page_partner_name: P
                  })
                },
                get TITLE()
                {
                  return O.lxBumbleHomepageTabTitle(
                  {
                    page_partner_name: P
                  })
                },
                get DESCRIPTION()
                {
                  return O.lxBumbleHiringBlockText
                },
                URL: "https://team.bumble.com",
                IMAGE_URL: k("/social-sharing.jpg"),
                get IMAGE_ALT()
                {
                  return O.lxBumbleHomepageTabTitle(
                  {
                    page_partner_name: P
                  })
                }
              };
            var E = e =>
              {
                let t = e.seoUrl ? e.seoUrl : S.URL,
                  r = e.openImageUrl ? k(e.openImageUrl) : S.IMAGE_URL,
                  i = e.openImageAlt ? e.openImageAlt : S.IMAGE_ALT,
                  n = e.browserTab ? e.browserTab : S.TAB_TITLE,
                  l = e.seoDescription ? e.seoDescription : S.DESCRIPTION,
                  o = e.openSiteName ? e.openSiteName : S.NAME;
                return (0, w.jsx)(y.PB,
                {
                  title: n,
                  description: l,
                  canonical: t,
                  openGraph:
                  {
                    url: t,
                    title: e.openTitle ? e.openTitle : n,
                    description: e.openDescription ? e.openDescription : l,
                    images: [
                    {
                      url: r,
                      alt: i,
                      width: 1200,
                      height: 630
                    }],
                    site_name: o
                  },
                  twitter:
                  {
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image"
                  }
                })
              },
              C = r(7524),
              N = r(1792),
              T = r(3795);
            let Z = void 0 !== r.g.window ? g.useLayoutEffect : g.useEffect,
              L = ((i = {})[i["desktop-xlg"] = 1440] = "desktop-xlg", i[i[
                  "desktop-lg"] = 1360] = "desktop-lg", i[i["desktop-md"] =
                  1024] = "desktop-md", i[i["desktop-sm"] = 640] = "desktop-sm",
                i[i["tablet-md"] = 900] = "tablet-md", i[i["tablet-lg"] = 990] =
                "tablet-lg", i[i["phone-xlg"] = 480] = "phone-xlg", i[i[
                  "phone-lg"] = 412] = "phone-lg", i[i["phone-md"] = 376] =
                "phone-md", i);
            var D = (e = 900) =>
              {
                let [t, i] = (0, g.useState)(!1), n = (0, g.useCallback)(e =>
                {
                  e.matches ? i(!0) : i(!1)
                }, []);
                return Z(() =>
                {
                  let t = r.g.window.matchMedia(`(max-width: ${e}px)`);
                  return t.addListener(n), t.matches && i(!0), () => t
                    .removeListener(n)
                }, [e, n]), t
              },
              R = {
                get lxSeoPageTitle()
                {
                  return "Bumble - Date, Meet, Network Better"
                },
                get lxSeoPageDescription()
                {
                  return "Our mission is to create a world where all relationships are healthy and equitable. "
                },
                get lxHeroBlockTitle()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.hero_block.title")
                },
                get lxCookieBannerTitle()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.cookie.banner.title")
                },
                lxCookieBannerText: e => _.ZP.get(
                    "bumblesite@team_bumble.page_index.cookie.banner.text")
                  .replace(/<a p\d>/,
                    `<a style="text-decoration: underline; color: currentColor;" target="_blank" href="${e.cookiePolicyLink}">`
                    ),
                get lxCookieBannerManageOptions()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.cookie.banner.manage_options"
                    )
                },
                get lxCookieBannerAcceptAll()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.cookie.banner.accept_all"
                    )
                },
                get lxNavigationMenu()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.menu")
                },
                get lxNavigationOpenRoles()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.open_roles"
                    )
                },
                get lxNavigationLinksAbout()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.links.about"
                    )
                },
                get lxNavigationLinksLife()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.links.life"
                    )
                },
                get lxNavigationLinksTeams()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.links.teams"
                    )
                },
                get lxNavigationLinksBenefits()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.links.benefits"
                    )
                },
                get lxNavigationMenuJoinCta()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.navigation.menu.join_cta"
                    )
                },
                get lxFooterBody()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.body")
                },
                get lxFooterLinksSlavery()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.links.slavery"
                    )
                },
                get lxFooterLinksGenderGap()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.links.gender_gap"
                    )
                },
                get lxFooterLinksTerms()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.links.terms")
                },
                get lxFooterLinksPrivacy()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.links.privacy"
                    )
                },
                get lxFooterLinksCookie()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.footer.links.cookie")
                },
                get lxSuccessStoryTitle()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.success_story.title")
                },
                lxSuccessStoryCoupleNames: e => _.ZP.get(
                  "bumblesite@team_bumble.page_index.success_story.couple.names",
                  e),
                lxSuccessStoryText: e => _.ZP.get(
                  "bumblesite@team_bumble.page_index.success_story.couple.names",
                  e),
                get lxCeoMessageTitle()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.ceo_message.title")
                },
                get lxCeoMessageText()
                {
                  return _.ZP.get(
                    "bumblesite@team_bumble.page_index.ceo_message.text")
                },
                get lxCeoFullName()
                {
                  return _.ZP.get("bumblesite@team_bumble.ceo.full_name")
                }
              },
              B = r(4619),
              I = r(7348);
            let A = [
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.about"
              }),
              url: I._j.about
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.life"
              }),
              url: I._j.life
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.teams"
              }),
              url: I._j.teams
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.benefits"
              }),
              url: I._j.benefits
            }];
            var M = () =>
              {
                let e = D(L["desktop-md"]),
                  t = g.useCallback(() =>
                  {
                    r.g.document.body.classList.toggle(
                    "is-opened-mobile-nav");
                    let e = r.g.document.querySelector(
                      ".js-mobile-navigation");
                    e && e.classList.toggle("is-active")
                  }, []),
                  i = A.map((e, t) => (0, w.jsx)(T.Z,
                  {
                    text: e.title,
                    href: e.url,
                    extraClass: "button--dw-action"
                  }, t));
                return (0, w.jsx)(C.Z,
                {
                  hasShadow: !0,
                  extraClass: e ? "has-shadow" : "has-actions-v-aligned",
                  logo: (0, w.jsx)(N.Z,
                  {}),
                  actions: e ? [(0, w.jsx)(T.Z,
                  {
                    labelText: "Open Menu",
                    icon: (0, w.jsx)(v.Z,
                    {
                      name: v.Z.Name.Menu,
                      size: "md"
                    }),
                    onClick: t,
                    testId: "mobile-menu",
                    isCircle: !0
                  }, "mobile-menu")] : [...i, (0, w.jsx)(T.Z,
                  {
                    labelText: "Open roles",
                    text: R.lxNavigationOpenRoles,
                    href: I._j.open_roles,
                    extraClass: "button--dw-action"
                  }, "Open roles")]
                })
              },
              F = r(3967),
              H = r.n(F),
              $ = function(e)
              {
                let
                {
                  logo: t,
                  isActive: r,
                  closeAction: i,
                  menuList: n,
                  downloadAction: l,
                  closePanel: o,
                  jsClass: a = "js-mobile-navigation"
                } = e, s = {
                  block: H()(
                  {
                    "mobile-panel": !0,
                    "is-active": r,
                    [a]: a
                  }),
                  backdrop: H()(
                  {
                    "mobile-panel__backdrop": !0
                  })
                };
                return (0, w.jsxs)("div",
                {
                  className: s.block,
                  children: [(0, w.jsxs)("div",
                  {
                    className: "mobile-panel__inner",
                    children: [(0, w.jsxs)("div",
                    {
                      className: "mobile-panel__header",
                      children: [t ? (0, w.jsx)("div",
                      {
                        className: "mobile-panel__logo",
                        children: t
                      }) : null, (0, w.jsx)("div",
                      {
                        className: "mobile-panel__close",
                        children: i
                      })]
                    }), n ? (0, w.jsx)("div",
                    {
                      className: "mobile-panel__content",
                      children: n.map((e, t) => (0, w.jsx)(
                          "div",
                          {
                            className: "mobile-panel__content-menu",
                            children: e
                          }, `mobile-panel-content-menu-${t}`
                          ))
                    }) : null, (0, w.jsx)("div",
                    {
                      className: "mobile-panel__download-app",
                      children: l
                    })]
                  }), (0, w.jsx)("div",
                  {
                    className: s.backdrop,
                    onClick: o
                  })]
                })
              },
              z = r(9821),
              U = function(e)
              {
                let
                {
                  title: t,
                  url: r,
                  items: i
                } = e;
                return (0, w.jsxs)("nav",
                {
                  className: "mobile-menu",
                  children: [(0, w.jsx)("div",
                  {
                    className: "mobile-menu__title",
                    children: (0, w.jsx)(z.Z,
                    {
                      className: "link",
                      href: r,
                      children: (0, w.jsx)("span",
                      {
                        className: "link__text",
                        children: t
                      })
                    })
                  }), i ? (0, w.jsx)("ul",
                  {
                    className: "mobile-menu__list",
                    children: i.map((e, t) =>
                    {
                      let
                      {
                        url: r,
                        title: i
                      } = e;
                      return (0, w.jsx)("li",
                      {
                        className: "mobile-menu__item",
                        children: (0, w.jsx)(z.Z,
                        {
                          className: "mobile-menu__link",
                          href: r,
                          children: i
                        })
                      }, `mobile-menu-item-${t}`)
                    })
                  }) : null]
                })
              };

            function W(e, t)
            {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols)
              {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t)
                {
                  return Object.getOwnPropertyDescriptor(e, t)
                    .enumerable
                })), r.push.apply(r, i)
              }
              return r
            }

            function G(e)
            {
              for (var t = 1; t < arguments.length; t++)
              {
                var r = null != arguments[t] ? arguments[t] :
                {};
                t % 2 ? W(Object(r), !0)
                  .forEach(function(t)
                  {
                    var i, n;
                    i = t, n = r[t], (i = function(e)
                    {
                      var t = function(e, t)
                      {
                        if ("object" != typeof e || null === e)
                      return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r)
                        {
                          var i = r.call(e, t || "default");
                          if ("object" != typeof i) return i;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                            )
                        }
                        return ("string" === t ? String : Number)(e)
                      }(e, "string");
                      return "symbol" == typeof t ? t : String(t)
                    }(i)) in e ? Object.defineProperty(e, i,
                    {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[i] = n
                  }) : Object.getOwnPropertyDescriptors ? Object
                  .defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(
                    Object(r))
                  .forEach(function(t)
                  {
                    Object.defineProperty(e, t, Object
                      .getOwnPropertyDescriptor(r, t))
                  })
              }
              return e
            }
            let q = [
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.about"
              }),
              url: I._j.about
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.life"
              }),
              url: I._j.life
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.teams"
              }),
              url: I._j.teams
            },
            {
              title: (0, w.jsx)(B.f1,
              {
                path: "bumblesite@team_bumble.page_index.navigation.links.benefits"
              }),
              url: I._j.benefits
            }];

            function V()
            {
              let [e, t] = (0, g.useState)(!1), i = (0, g.useCallback)(() =>
              {
                r.g.document.body.classList.toggle("is-opened-mobile-nav", !
                  1), t(!1)
              }, []);
              return (0, w.jsx)($,
              {
                logo: (0, w.jsx)(N.Z,
                {
                  color: "inhert",
                  isOld: !1,
                  isNew: !0
                }),
                isActive: e,
                closePanel: i,
                closeAction: (0, w.jsx)(T.Z,
                {
                  isCircle: !0,
                  jsClass: "js-close-menu",
                  icon: (0, w.jsx)(v.Z,
                  {
                    size: "md",
                    name: v.Z.Name.Close
                  }),
                  onClick: i
                }),
                menuList: [...q.map((e, t) => (0, g.createElement)(U, G(G(
                {}, e),
                {},
                {
                  key: `item-${t}`
                }))), (0, w.jsx)(T.Z,
                {
                  text: R.lxNavigationOpenRoles,
                  href: I._j.open_roles,
                  color: T.Z.color.Primary,
                  designType: T.Z.designType.FILLED,
                  inline: !0,
                  extraClass: "button--lg-text"
                }, "open-roles-action")]
              })
            }
            var Y = function(e)
              {
                let
                {
                  children: t,
                  copyright: r,
                  columns: i
                } = e, n = H()(
                {
                  footer__inner: !0,
                  "footer__inner--columns": i
                }), l = g.Children.map(t, e => (0, w.jsx)("div",
                {
                  className: "footer__inner-item footer__inner-item--column",
                  children: e
                })), o = g.Children.map(i, e => (0, w.jsx)("div",
                {
                  className: "footer__inner-item footer__inner-item--column",
                  children: e
                }));
                return (0, w.jsxs)("div",
                {
                  className: "footer",
                  children: [(0, w.jsx)("div",
                  {
                    className: n,
                    children: i ? o : l
                  }), r ? (0, w.jsx)("div",
                  {
                    className: "footer__copyright",
                    children: r
                  }) : null]
                })
              },
              J = r(3776),
              K = function(e)
              {
                let
                {
                  getUrl: t,
                  url: r,
                  title: i,
                  isExternal: n,
                  titleList: l,
                  list: o,
                  content: a,
                  socialLinks: s,
                  appsLinks: c,
                  className: u
                } = e, m = (0, g.useContext)(J.ZP), d = r || t && t(m);
                return (0, w.jsxs)("div",
                {
                  className: "footer-menu",
                  children: [l ? null : (0, w.jsx)("h3",
                  {
                    className: "footer-menu__title",
                    children: d ? (0, w.jsx)(z.Z,
                    {
                      className: `footer-menu__title-link ${u||""}`,
                      href: d,
                      title: i,
                      target: n ? "_blank" : void 0,
                      children: i
                    }) : i
                  }), o ? (0, w.jsx)("ul",
                  {
                    className: "footer-menu__list",
                    children: o.map((
                    {
                      getUrl: e,
                      title: t,
                      url: r,
                      isExternal: i
                    }, n) =>
                    {
                      let l = r || e && e(m);
                      return (0, w.jsx)("li",
                      {
                        className: "footer-menu__item",
                        children: (0, w.jsx)(z.Z,
                        {
                          className: "footer-menu__link",
                          href: l,
                          title: t,
                          target: i ? "_blank" : void 0,
                          children: t
                        })
                      }, `footer-menu-item-${n}`)
                    })
                  }) : null, l ? (0, w.jsx)("ul",
                  {
                    className: "footer-menu__list footer-menu__list--titles",
                    children: l.map((
                    {
                      getUrl: e,
                      title: t,
                      url: r,
                      isExternal: i
                    }, n) =>
                    {
                      let l = r || e && e(m);
                      return (0, w.jsx)("li",
                      {
                        className: "footer-menu__item",
                        children: (0, w.jsx)("h3",
                        {
                          className: "footer-menu__title",
                          children: (0, w.jsx)(z.Z,
                          {
                            className: "footer-menu__link",
                            href: l,
                            title: t,
                            target: i ? "_blank" :
                              void 0,
                            children: t
                          })
                        })
                      }, `footer-menu-item-${n}`)
                    })
                  }) : null, a ? (0, w.jsx)("div",
                  {
                    className: "footer-menu__content",
                    children: a
                  }) : null, s ? (0, w.jsx)("div",
                  {
                    className: "footer-menu__social-links",
                    children: s
                  }) : null, c ? (0, w.jsx)("div",
                  {
                    className: "footer-menu__apps-links",
                    children: c
                  }) : null]
                })
              },
              Q = e => (0, w.jsx)("ul",
              {
                className: "footer-grid-menu",
                children: g.Children.map(e.children, e => (0, w.jsx)("li",
                {
                  className: "footer-grid-menu__item",
                  children: e
                }))
              });
            let X = ((n = {})
                .CENTERED = "CENTERED", n),
              ee = {
                [X.CENTERED]: "cta-box--centered"
              };
            var et = function(e)
            {
              let
              {
                align: t,
                children: r,
                full: i
              } = e, n = H()(
              {
                "cta-box": !0,
                "cta-box--full": i
              }, void 0 !== t && ee[t]);
              return (0, w.jsx)("div",
              {
                className: n,
                children: r
              })
            };
            let er = ((l = {})
                .CENTERED = "CENTERED", l),
              ei = {
                [er.CENTERED]: "cta-box__title--centered"
              };
            var en = e =>
            {
              let
              {
                align: t,
                children: r,
                marginTop: i
              } = e, n = H()(
              {
                "cta-box__title": !0
              }, void 0 !== t && ei[t]);
              return (0, w.jsx)("div",
              {
                className: n,
                style:
                {
                  marginTop: i
                },
                children: r
              })
            };
            let el = ((o = {})
                .CENTERED = "CENTERED", o),
              eo = {
                [el.CENTERED]: "cta-box__media--centered"
              };
            var ea = e =>
            {
              let
              {
                align: t,
                children: r,
                noMargin: i,
                marginTop: n
              } = e, l = H()(
              {
                "cta-box__media": !0,
                "cta-box__media--no-margin": i
              }, void 0 !== t && eo[t]);
              return (0, w.jsx)("div",
              {
                className: l,
                style:
                {
                  marginTop: n
                },
                children: r
              })
            };
            let es = ((a = {})
              .TITLE = "title", a.CAPTION = "caption", a.H1 = "h1", a.H2 =
              "h2", a.H3 = "h3", a.H4 = "h4", a.P1 = "p-1", a.P2 = "p-2", a
              .P3 = "p-3", a);
            var ec = e =>
            {
              let
              {
                inline: t,
                type: r,
                color: i,
                isMedium: n,
                noWrap: l,
                isExtended: o,
                isInherited: a,
                extraClass: s,
                style: c,
                html: u,
                htmlEditor: m,
                isResponsive: d
              } = e, b = {
                block: H()(void 0 !== r && r,
                {
                  "is-medium": n,
                  "has-no-wrap": l,
                  "is-extended": o,
                  "is-inherited": a,
                  [s]: s,
                  "is-responsive": d
                }, i && "string" == typeof i ? i : null)
              };
              return (0, w.jsx)(t ? "span" : "div",
              {
                className: b.block,
                style: c,
                dangerouslySetInnerHTML: u && !m ?
                {
                  __html: u
                } : void 0,
                children: m || e.children
              })
            };

            function eu(e, t)
            {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols)
              {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t)
                {
                  return Object.getOwnPropertyDescriptor(e, t)
                    .enumerable
                })), r.push.apply(r, i)
              }
              return r
            }

            function em(e)
            {
              for (var t = 1; t < arguments.length; t++)
              {
                var r = null != arguments[t] ? arguments[t] :
                {};
                t % 2 ? eu(Object(r), !0)
                  .forEach(function(t)
                  {
                    var i, n;
                    i = t, n = r[t], (i = function(e)
                    {
                      var t = function(e, t)
                      {
                        if ("object" != typeof e || null === e)
                      return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r)
                        {
                          var i = r.call(e, t || "default");
                          if ("object" != typeof i) return i;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                            )
                        }
                        return ("string" === t ? String : Number)(e)
                      }(e, "string");
                      return "symbol" == typeof t ? t : String(t)
                    }(i)) in e ? Object.defineProperty(e, i,
                    {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[i] = n
                  }) : Object.getOwnPropertyDescriptors?...
