/**
 * Extend obj1 with each key in obj2, overriding default values in obj1 with
 * values in obj2
 *
 * @param {object} obj1 - The object to extend.
 * @param {object} obj2 - The overrides to apply onto obj1.
 */
export function extend(obj1, obj2) {
    for (const i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            obj1[i] = obj2[i];
        }
    }
}

/**
 * Returns the distance from `elem` to the top of the page. This is done by
 * walking up the node tree, getting the offsetTop of each parent node, until
 * the top of the page.
 *
 * @param {object} elem - The element to compute the offset of.
 **/
export function getOffsetTop(elem) {
    let offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        elem = elem.offsetParent;
    } while (elem);
    return offsetTop;
}