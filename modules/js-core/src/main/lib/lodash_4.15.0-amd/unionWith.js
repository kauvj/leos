define(['./_baseFlatten', './_baseRest', './_baseUniq', './isArrayLikeObject', './last'], function(baseFlatten, baseRest, baseUniq, isArrayLikeObject, last) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.union` except that it accepts `comparator` which
   * is invoked to compare elements of `arrays`. Result values are chosen from
   * the first array in which the value occurs. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.unionWith(objects, others, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var unionWith = baseRest(function(arrays) {
    var comparator = last(arrays);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
  });

  return unionWith;
});
