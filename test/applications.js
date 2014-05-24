
var apps = require('../lib/applications');

exports['Create application'] = function (test) {
    var app = apps.createApplication('Warehouse');
    
    test.ok(app);
    test.equal(app.getTitle(), 'Warehouse');
};

