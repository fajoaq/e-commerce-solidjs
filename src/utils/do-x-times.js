function doXTimes(x, func) {
  for (let i = 0; i < x; i++) {
    func();
  }
}

export { doXTimes };
