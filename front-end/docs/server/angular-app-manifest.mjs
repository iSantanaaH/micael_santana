
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/common/fesm2022/common.mjs": [
    "chunk-N57K7CF4.js"
  ],
  "src/app/pages/home/home-page.component.ts": [
    "chunk-3YNDLWEV.js"
  ]
},
  assets: {
    'index.csr.html': {size: 20925, hash: 'fce3afb7a9bb6305d9192908ee45ab10aae588985a77b14c8cd914fbe83d355b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20690, hash: '7c01b049bd5ea35947d2b68c218807e7a9657e765389eab4782695b27cdfecfc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MFDMJFLL.css': {size: 657, hash: '3SLBflXl2NY', text: () => import('./assets-chunks/styles-MFDMJFLL_css.mjs').then(m => m.default)}
  },
};
