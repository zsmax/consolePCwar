/** Returns random number from the limit of the minimum and maximum.
 * Includes minimum and maximum. 
 * 
 * @param {number} min minimal value
 * @param {number} max maximum value
 */
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}