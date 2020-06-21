var assert = require('assert');

var qp = require('./queryProcessor.js')

describe('queryProcessor.js', function () {
  describe('#processQuery()', function () {
    
    it('knows who wrote Romeo and Juliet', function () {
      assert.equal("William Shakespeare", qp.processQuery("Who wrote Romeo and Juliet?"));
    });

    it('gives empty response when cannot process query', function () {
      assert.equal("", qp.processQuery("How long is a piece of string?"));
    });
  });
});