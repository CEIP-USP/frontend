export const deepCompareObjects = <T, E>(obj1: T, obj2: E) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    // @ts-ignore
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    // @ts-ignore
    if (!deepCompareObjects(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};
