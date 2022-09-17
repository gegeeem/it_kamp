export default function paginationFunc(array, step, page) {
  let firstElementOfArray = 0;
  let newArray;
  const numberOfPages = Math.ceil(array.length / step);

  firstElementOfArray = (page - 1) * step;
  step = step * page;
  if (array.length >= step) {
    newArray = array.slice(firstElementOfArray, step);
  } else {
    newArray = array.slice(firstElementOfArray, array.length);
  }

  return newArray;
}
