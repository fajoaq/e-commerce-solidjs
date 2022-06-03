import { GetImageLoader } from "./get-image-loader";

// this function was built for the hero component
// might refactor work better with array of images in general
async function PreLoadImagesFromArray(urlList, setter, onFirstImgComplete) {
  let imageLoader = GetImageLoader();

  await urlList.forEach((url, index) => {
    imageLoader
      .LoadImage(url)
      .then((resolvedImg) => {
        setter(resolvedImg);
        // we call onFirstImgComplete as soon as we have the first image
        if (onFirstImgComplete && index === 0) onFirstImgComplete();
      })
      .catch((err) => console.log(err));
  });

  return null;
}

export { PreLoadImagesFromArray };
