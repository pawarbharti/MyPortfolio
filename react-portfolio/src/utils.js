export const getImageUrl = (path) => {
    console.log(`assets/${path}`,path, import.meta.url);
    console.log( new URL(`../assets/${path}`, import.meta.url).href);
  return new URL(`/assets/${path}`, import.meta.url).href;
};
