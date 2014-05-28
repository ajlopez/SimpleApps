
function Property(title) {
    this.getTitle = function () {
        return title;
    };
}

function Entity(title) {
    var properties = [];
    
    this.getTitle = function () {
        return title;
    };
    
    this.createProperty = function (title) {
        var property = new Property(title);
        properties.push(property);
        return property;
    };
    
    this.getProperties = function () {
        return properties.slice();
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
    
    this.getEntityByTitle = function (title) {
        for (var n in entities) {
            var entity = entities[n];
            if (entity.getTitle() == title)
                return entity;
        }
        
        return null;
    };
}

function createApplication(title) {
    return new Application(title);
}

module.exports = {
    createApplication: createApplication
};