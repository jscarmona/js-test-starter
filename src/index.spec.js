'use strict';

import Test from '../src';

describe('Test Class', () => {
  describe('#add', () => {
    it('should add 1 + 1 and equal 2', () => {
      let test = new Test();

      assert.equal(2, test.add(1, 1));
    });
  })

  describe('#subtract', () => {
    it('should subtract 2 from 4 and equal 2', () => {
      let test = new Test();

      assert.equal(2, test.subtract(4, 2));
    });
  });
});
