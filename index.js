module.exports = function canonical(opts){
  var tags = document.getElementsByTagName('link');
  var opts = opts || { qs: '' };

  for (var i = 0, tag; tag = tags[i]; i++) {
    if ('canonical' != tag.getAttribute('rel')) continue;
    var url = tag.getAttribute('href');
    if (~url.indexOf('?')) return url;
    return url + opts.qs;
  }
};