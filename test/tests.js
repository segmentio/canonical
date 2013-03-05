describe('canonical', function () {
  var canonical = require('canonical')
    , assert    = require('component-assert');

  it('matches nothing', function () {
    assert(undefined === canonical());
  });

  it('matches something', function () {
    var link = document.createElement('link');
    link.rel = 'canonical';
    var url = link.href = '/index.html';
    document.head.appendChild(link);

    assert(url === canonical());
  });
});