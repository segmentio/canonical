describe('canonical', function () {
  var canonical = require('canonical')
    , assert    = require('component-assert')
    , link
    , url;

  it('matches nothing', function () {
    assert(undefined === canonical());
  });

  it('matches something', function () {
    create(url = '/index.html');
    assert(url == canonical());
    remove();
  });

  it('should get the query string from document.location.search if it doesnt include it', function(){
    create(url = '/index.html');
    assert('/index.html?querystring' == canonical({ qs: '?querystring' }));
    remove();
  })

  function create(url){
    link = document.createElement('link');
    link.rel = 'canonical';
    var url = link.href = url;
    document.head.appendChild(link);
  }

  function remove(){
    link.parentNode.removeChild(link);
  }
});