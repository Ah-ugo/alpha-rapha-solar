export const truncateString = (str, length) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};

export function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}
