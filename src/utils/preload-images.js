import { GetImageLoader } from "./get-image-loader";

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
