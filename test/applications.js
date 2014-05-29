
var apps = require('../lib/applications');

exports['Get No Applications'] = function (test) {
    var applications = apps.getApplications();
    
    test.ok(applications);
    test.ok(Array.isArray(applications));
    test.equal(applications.length, 0);
};

exports['Create application'] = function (test) {
    var app = apps.createApplication('Warehouse');
    
    test.ok(app);
    test.equal(app.getTitle(), 'Warehouse');
};

exports['Get One Application'] = function (test) {
    var applications = apps.getApplications();
    
    test.ok(applications);
    test.ok(Array.isArray(applications));
    test.equal(applications.length, 1);
    test.equal(applications[0].getTitle(), 'Warehouse');
};
