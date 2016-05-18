'use strict';

var canonical = require('../lib');
var assert = require('proclaim');

describe('canonical', function() {
  it('matches nothing', function() {
    assert(canonical() === undefined);
  });

  it('matches something', function() {
    var link = document.createElement('link');
    link.rel = 'canonical';
    var url = link.href = '/index.html';
    // XXX(ndhoule): IE7,8 don't support document.head
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(link);

    assert(canonical() === url);
  });
});
