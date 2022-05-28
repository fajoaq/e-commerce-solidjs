import { GetImageLoader } from "./get-image-loader";

function SetImagesFromArray(imgNodeList, urlList, callback) {
  let imageLoader = GetImageLoader();

  imgNodeList.forEach((imgNode, index) => {
    imageLoader
      .LoadImage(urlList[index], callback ? callback : null)
      .then((image) => {
        imgNode.classList.toggle("img-loaded");
        imgNode.src = image;
      })
      .catch((err) => console.log(err));
  });
}

export { SetImagesFromArray };
