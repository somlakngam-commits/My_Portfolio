/**
 * Resolve public asset URLs taking Vite base path (e.g. /My_Portfolio/ on GitHub Pages) into account.
 * Supports absolute paths ('/coe_license.jpg'), relative paths ('coe_license.jpg'),
 * external URLs ('https://...'), data URIs, and already base-prefixed paths.
 */
export const resolveAssetUrl = (url) => {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  const base = import.meta.env.BASE_URL || '/';

  if (base !== '/' && url.startsWith(base)) {
    return url;
  }

  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${base}${cleanPath}`;
};
