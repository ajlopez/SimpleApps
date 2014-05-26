
var apps = require('../lib/applications');

var app = apps.createApplication('Warehouse');

exports['Create entity'] = function (test) {
    var entity = app.createEntity('Product');
    
    test.ok(entity);
    test.equal(entity.getTitle(), 'Product');
};


