export function detectFrameworks(content) {
  const frameworks = [];
  const patterns = [
    { name: 'React', regex: /react(-dom)?|__REACT_DEVTOOLS_GLOBAL_HOOK__|React\./i },
    { name: 'Angular', regex: /ng\b|angular\b|@angular\//i },
    { name: 'Vue', regex: /vue\b|__VUE_OPTIONS_API__|__VUE_PROD_DEVTOOLS__/i },
    { name: 'Svelte', regex: /svelte\b|__SVELTE_HMR/i },
    { name: 'Next.js', regex: /next\b|__NEXT_DATA__/i },
    { name: 'Nuxt.js', regex: /nuxt\b|__NUXT__/i },
    { name: 'Ember', regex: /ember\b|Ember\./i },
    { name: 'Preact', regex: /preact\b|Preact\./i },
    { name: 'Solid', regex: /solid-js\b|Solid\./i },
    { name: 'Alpine.js', regex: /alpinejs\b|Alpine\./i },
    { name: 'SAPUI5', regex: /sap\.ui\.|sap-ui-core\.js/i },
    { name: 'Backbone', regex: /backbone\b|Backbone\./i },
    { name: 'jQuery', regex: /jquery\b|jQuery\./i },
    { name: 'Redux', regex: /redux\b|Redux\./i },
    { name: 'MobX', regex: /mobx\b|MobX\./i },
    { name: 'RxJS', regex: /rxjs\b|Rx\.Observable/i },
    { name: 'Lodash', regex: /lodash\b|_\./i },
    { name: 'Moment.js', regex: /moment\b|moment\(/i },
    { name: 'D3.js', regex: /d3\b|d3\./i },
    { name: 'Chart.js', regex: /chartjs\b|Chart\./i }
  ];
  for (const fw of patterns) {
    if (fw.regex.test(content)) {
      frameworks.push(fw.name);
    }
  }
  return frameworks;
} 