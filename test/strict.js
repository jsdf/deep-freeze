var test = require('tap').test;
var deepFreeze = require('../');

test('deep freeze', function (t) {
  "use strict";

  t.plan(1);

  var a = {
    // a function
      b: function() {},
  };

  deepFreeze(a);
  try {
    a.x = 5;
  } catch (e) {
    if (e.type !== 'object_not_extensible') throw e;
  }
  t.equal(a.x, undefined);
});