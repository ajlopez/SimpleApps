
function Entity(title) {
    this.getTitle = function () {
        return title;
    };
}

function Application(title) {
    this.getTitle = function () {
        return title;
    };
    
    this.createEntity = function (title) {
        return new Entity(title);
    };
}

function createApplication(title) {
    return new Application(title);
}

module.exports = {
    createApplication: createApplication
};