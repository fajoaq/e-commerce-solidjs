import { GetImageLoader } from "./get-image-loader";

// this function was built for the hero component
// might refactor to better work with array of images in general
function PreLoadImagesFromArray(urlList, setter, onComplete) {
  let imageLoader = GetImageLoader();

  urlList.forEach((url, index) => {
    imageLoader
      .LoadImage(url)
      .then((resolvedImg) => {
        setter(resolvedImg);
        // we call onComplete as soon as we have the first image
        if (onComplete && index === 0) onComplete();
      })
      .catch((err) => console.log(err));
  });
}

export { PreLoadImagesFromArray };
