let icon_dir = document.currentScript.getAttribute('data-page');

let manifestLink = document.createElement('link');
manifestLink.rel = 'manifest';
manifestLink.crossOrigin = 'use-credentials';
manifestLink.href = 'manifest.json';
document.head.appendChild(manifestLink);

let appleTouchIconLink = document.createElement('link');
appleTouchIconLink.rel = 'apple-touch-icon';
appleTouchIconLink.sizes = '180x180';
appleTouchIconLink.href = `/icon/${icon_dir}/apple-touch-icon.png`;
document.head.appendChild(appleTouchIconLink);

let favicon32Link = document.createElement('link');
favicon32Link.rel = 'icon';
favicon32Link.type = 'image/png';
favicon32Link.sizes = '32x32';
favicon32Link.href = `/icon/${icon_dir}/favicon-32x32.png`;
document.head.appendChild(favicon32Link);

let favicon16Link = document.createElement('link');
favicon16Link.rel = 'icon';
favicon16Link.type = 'image/png';
favicon16Link.sizes = '16x16';
favicon16Link.href = `/icon/${icon_dir}/favicon-16x16.png`;
document.head.appendChild(favicon16Link);

let maskIconLink = document.createElement('link');
maskIconLink.rel = 'mask-icon';
maskIconLink.href = '/safari-pinned-tab.svg';
maskIconLink.color = '#5bbad5';
document.head.appendChild(maskIconLink);

let tileColorMeta = document.createElement('meta');
tileColorMeta.name = 'msapplication-TileColor';
tileColorMeta.content = '#da532c';
document.head.appendChild(tileColorMeta);

let themeColorMeta = document.createElement('meta');
themeColorMeta.name = 'theme-color';
themeColorMeta.content = '#ffffff';
document.head.appendChild(themeColorMeta);