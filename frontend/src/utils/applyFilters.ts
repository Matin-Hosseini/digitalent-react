
function containsCategory(categories: any, course: any) {
  if (!categories) return true;

  const selectedCategories = new Set(categories.split(","));
  console.log(selectedCategories);

  if (selectedCategories.has(course.category)) return true;

  return false;
}
function applyFilters(entityArray: any[], queries: any) {
  const filterEntityArray = [];

  for (const entity of entityArray) {
    if (
      queries.search &&
      !entity.title?.toLowerCase().includes(queries.search?.toLowerCase())
    ) {
      continue;
    }

    if (!containsCategory(queries.cat, entity)) continue;

    if (queries.free && entity?.discount !== 100) continue;

    if (queries.discount && entity?.discount <= 0) continue;

    filterEntityArray.push(entity);
  }

  return filterEntityArray;
}

export default applyFilters;
