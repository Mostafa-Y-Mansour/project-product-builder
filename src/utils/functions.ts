/**
 *
 * @param {string} txt - It accepts a string.
 * @param {number} [max = 50] - It accepts number specify the maximum number of characters allowed to be visible defaults to 50 characters.
 * @returns The the string sliced by the given string length and the maximum and if the string is less than the max number it will be returned the same string with no change.
 */
export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
