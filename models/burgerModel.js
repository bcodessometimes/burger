var orm = require ("../config/orm.js");

module.exports = {
    getAllBurgers: function(cb) {
    orm.selectAll("burgers", cb)

    }
}     