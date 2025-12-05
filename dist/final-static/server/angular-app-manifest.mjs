
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/Final-Empresa/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Final-Empresa"
  },
  {
    "renderMode": 2,
    "route": "/Final-Empresa/empleados"
  },
  {
    "renderMode": 2,
    "route": "/Final-Empresa/empresa"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Final-Empresa",
    "route": "/Final-Empresa/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 825, hash: 'ad30d0520320922bd0f7180b3285082446b6ec03038e816c40b2be7278337ed5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1365, hash: '6f3b0946a54b219cf99ac20d7ae8cef097d96dbe3118730b07f3e239e7df24f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'empresa/index.html': {size: 10266, hash: 'cf6492a6f4e609596705c95b2063d6e5c260a9d153502f59e72c404da88f2e05', text: () => import('./assets-chunks/empresa_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10369, hash: '3007c4ebc3f19ce5f3196f570a08166db71f531f25507b670cb6b6aa4389d52e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'empleados/index.html': {size: 8120, hash: 'a00765ac3deb87a19c0f79f4249b6793df5166ba0f01eeb6791f5188d7a33777', text: () => import('./assets-chunks/empleados_index_html.mjs').then(m => m.default)}
  },
};
