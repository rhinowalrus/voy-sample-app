/* jshint ignore:start */

define('voy-sample-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'voy-sample-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("voy-sample-app/tests/test-helper");
} else {
  require("voy-sample-app/app")["default"].create({"name":"voy-sample-app","version":"0.0.0+445b9854"});
}

/* jshint ignore:end */
