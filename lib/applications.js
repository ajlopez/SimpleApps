
function Entity(title) {
    this.getTitle = function () {
        return title;
    };
}

function Application(title) {
    var entities = [];
    
    this.getTitle = function () {
        return title;
    };
    
    this.createEntity = function (title) {
        var entity = new Entity(title);
        entities.push(entity);
        return entity;
    };
    
    this.getEntities = function () {
        return entities.slice();
    };
}

function createApplication(title) {
    return new Application(title);
}

module.exports = {
    createApplication: createApplication
};