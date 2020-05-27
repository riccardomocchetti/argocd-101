var assert = require('assert');
var api = require('../api')

describe('Title', function() {
  describe('content', function() {
    it('should match exactly', function() {
      assert.equal(api.getTitle(), 'Hello World!');
    });
  });
});