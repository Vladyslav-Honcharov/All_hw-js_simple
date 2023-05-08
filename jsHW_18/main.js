function cloneObj(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  let clone = Array.isArray(object) ? [] : {};

  for (let key in object) {
    clone[key] = clone(object[key]);
  }

  return clone;
}
