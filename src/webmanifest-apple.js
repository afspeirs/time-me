/** @type {HTMLLinkElement} */
const webmanifest = document.querySelector('link[rel="manifest"]');

if (import.meta.env.PROD && navigator.userAgent.search('Mac') !== -1 && webmanifest) {
  webmanifest.href = '/manifest-apple.webmanifest';
}
