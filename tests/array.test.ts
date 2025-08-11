import { flatten, flattenDeep, difference } from '../src';

describe('Array libray', () => {
  describe('difference', () => {
    it('should return items in the first array that are not in the second', () => {
      expect(difference([1, 2, 3], [2, 4])).toEqual([1, 3]);
    });

    it('should return all items when there is no overlap', () => {
      expect(difference([1, 2, 3], [4, 5])).toEqual([1, 2, 3]);
    });

    it('should return an empty array when all items are in the second array', () => {
      expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    it('should handle an empty first array', () => {
      expect(difference([], [1, 2])).toEqual([]);
    });

    it('should handle an empty second array', () => {
      expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    it('should work with strings', () => {
      expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
    });

    it('should work with objects by reference', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      expect(difference([obj1, obj2], [obj2])).toEqual([obj1]);
    });
  });

  describe('flatten', () => {
    it('should flatten a one-level nested array', () => {
      expect(flatten([1, [2, 3], 4, [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should not flatten more than one level', () => {
      expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, [3, 4], 5]);
    });

    it('should handle an array without nesting', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle an empty array', () => {
      expect(flatten([])).toEqual([]);
    });

    it('should work with strings', () => {
      expect(flatten(['a', ['b', 'c'], 'd'])).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should work with mixed data types', () => {
      expect(flatten([1, ['two', true], null])).toEqual([1, 'two', true, null]);
    });

    it('should keep object references intact', () => {
      const obj = { id: 1 };
      expect(flatten([obj, [2, 3]])[0]).toBe(obj);
    });
  });

  describe('flattenDeep', () => {
    it('should flatten a deeply nested array', () => {
      expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle a one-level nested array', () => {
      expect(flattenDeep([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle an already flat array', () => {
      expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle an empty array', () => {
      expect(flattenDeep([])).toEqual([]);
    });

    it('should work with strings', () => {
      expect(flattenDeep(['a', ['b', ['c']]])).toEqual(['a', 'b', 'c']);
    });

    it('should work with mixed data types', () => {
      expect(flattenDeep([1, ['two', [true, [null]]]])).toEqual([1, 'two', true, null]);
    });

    it('should keep object references intact', () => {
      const obj = { id: 1 };
      const result = flattenDeep([obj, [2, [3]]]);
      expect(result[0]).toBe(obj);
    });
  });
})