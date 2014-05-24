
function Application(title) {
    this.getTitle = function () {
        return title;
    };
}

function createApplication(title) {
    return new Application(title);
}

module.exports = {
    createApplication: createApplication
};