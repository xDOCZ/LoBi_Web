const imageModules = import.meta.glob("../imagens/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

function compareAlphaNumeric(left, right) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
}

const groupedByFolder = Object.entries(imageModules).reduce((acc, [path, source]) => {
  const [, folder] = path.match(/\/imagens\/(\d+)\//) || [];
  if (!folder) {
    return acc;
  }

  const key = `imovel-${folder}`;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push({ path, source });
  return acc;
}, {});

export const imageGalleryMap = Object.fromEntries(
  Object.entries(groupedByFolder).map(([key, entries]) => [
    key,
    entries
      .sort((left, right) => compareAlphaNumeric(left.path, right.path))
      .map((entry) => entry.source),
  ]),
);

export const imageMap = Object.fromEntries(
  Object.entries(imageGalleryMap).map(([key, gallery]) => [key, gallery[0]]),
);
