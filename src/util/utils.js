export const debouce = (func, wait = 100, time) => (...args) =>
  clearTimeout(time, (time = setTimeout(() => func(...args), wait)));
