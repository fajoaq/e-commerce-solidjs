function normalizeProductData(data) {
  let normData = [];

  data.forEach((item) =>
    normData.push({
      src: item.fields.thumbnail.fields.file.url,
      alt: item.fields.description,
      title: item.fields.title,
      price: "299.99",
      featuredLocations: item.fields.featuredLocations,
    })
  );

  return normData;
}

export { normalizeProductData };
