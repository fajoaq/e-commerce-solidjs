function GetImageLoader() {
  const imageLoader = {};

  imageLoader["LoadImage"] = function (imageUrl, progressUpdateCallback) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", imageUrl, true);
      xhr.responseType = "arraybuffer";

      xhr.onprogress = function (e) {
        if (e.lengthComputable) {
          if (progressUpdateCallback)
            progressUpdateCallback(parseInt((e.loaded / e.total) * 100));
        }
      };

      xhr.onloadend = function () {
        if (progressUpdateCallback) progressUpdateCallback(100);

        const options = {};
        const headers = xhr.getAllResponseHeaders();
        const typeMatch = headers.match(/^Content-Type\:\s*(.*?)$/im);

        if (typeMatch && typeMatch[1]) {
          options.type = typeMatch[1];
        }

        const blob = new Blob([this.response], options);

        resolve(window.URL.createObjectURL(blob));
      };
      xhr.onerror = function (err) {
        reject(err);
      };
      xhr.send();
    });
  };

  return imageLoader;
}

export { GetImageLoader };
