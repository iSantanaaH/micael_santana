
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/micael_santana/',
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
    'index.csr.html': {size: 20940, hash: 'f00bd591d41d1ad8be42da004a651b3ddc1d8c01d4b35b799e5b3c325dd3bd43', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20705, hash: 'de2a559150a90e286235589ea20ae5d5e060011b222bef897667bcb88d78c81c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MFDMJFLL.css': {size: 657, hash: '3SLBflXl2NY', text: () => import('./assets-chunks/styles-MFDMJFLL_css.mjs').then(m => m.default)}
  },
};
