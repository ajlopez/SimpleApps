
var apps = require('../lib/applications');

var app = apps.createApplication('Warehouse');

exports['Get no entity'] = function (test) {
    var entities = app.getEntities();
    
    test.ok(entities);
    test.ok(Array.isArray(entities));
    test.equal(entities.length, 0);
};

exports['Create entity'] = function (test) {
    var entity = app.createEntity('Product');
    
    test.ok(entity);
    test.equal(entity.getTitle(), 'Product');
};

exports['Get one entity'] = function (test) {
    var entities = app.getEntities();
    
    test.ok(entities);
    test.ok(Array.isArray(entities));
    test.equal(entities.length, 1);
    test.equal(entities[0].getTitle(), 'Product');
};


