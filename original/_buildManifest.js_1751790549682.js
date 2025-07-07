self.__BUILD_MANIFEST = function(s, e, a, c, t) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [ s, a, e, c, t, "static/chunks/86d47bb19986393e.js" ],
    "/404": [ s, e, "static/chunks/5d495bfe19339762.js" ],
    "/_error": [ s, e, "static/chunks/7b0fe1da5ea918a9.js" ],
    "/internal-api/preview": [ s, a, e, c, t, "static/chunks/8d4b299a38e6e325.js" ],
    "/internal-api/preview/[...slug]": [ s, a, e, c, t, "static/chunks/2d83a85ec748186d.js" ],
    "/[lang]/[...slug]": [ s, a, e, c, t, "static/chunks/1ac534a7004cb9c8.js" ],
    "/[...slug]": [ s, a, e, c, t, "static/chunks/43fa35367006196b.js" ],
    sortedPages: [ "/", "/404", "/_app", "/_error", "/internal-api/preview", "/internal-api/preview/[...slug]", "/[lang]/[...slug]", "/[...slug]" ]
  };
}("static/chunks/55031a1bc92b143d.js", "static/chunks/ab9ab83fe3d34813.js", "static/chunks/29033c15e7013d1a.js", "static/chunks/527b7dab98cfbf2b.js", "static/css/f5497faca90a2a92.css"), 
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();