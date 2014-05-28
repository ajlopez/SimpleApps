
var apps = require('../lib/applications');

var app = apps.createApplication('Warehouse');

exports['Get no entity'] = function (test) {
    var entities = app.getEntities();
    
    test.ok(entities);
    test.ok(Array.isArray(entities));
    test.equal(entities.length, 0);
};

exports['Get no entity by title'] = function (test) {
    var entity = app.getEntityByTitle('Foo');
    
    test.equal(entity, null);
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

exports['Create entity and add property'] = function (test) {
    var entity = app.createEntity('Category');
    
    test.ok(entity);
    
    var property = entity.createProperty('Name');
    
    test.ok(property);
    test.equal(property.getTitle(), 'Name');
};

exports['Get entity by title'] = function (test) {
    var entity = app.getEntityByTitle('Category');
    
    test.ok(entity);
    test.equal(entity.getTitle(), 'Category');
    
    var properties = entity.getProperties();
    
    test.ok(properties);
    test.ok(Array.isArray(properties));
    test.equal(properties.length, 1);
    
    test.equal(properties[0].getTitle(), 'Name');
};
