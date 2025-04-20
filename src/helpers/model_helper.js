const debug = require('debug')('order:modelHelper');

module.exports = ({

    knex = {},
    name = 'name',
    tableName = 'tableName',
    selectableProps = [],
    timeout = 1000
}) => {
    //Create an entity
    const create = (props) => {
        delete props.id; //not allow to set id

        return knex.insert(props)
            .returning(selectableProps)
            .into(tableName)
            .timeout(timeout);
    };

    //Find list of entity
    const find = (filters) => knex.select(selectableProps)
        .from(tableName)
        .where(filters)
        .timeout(timeout);

    //Find a particular entity
    const findOne = (filters) => find(filters)
        .then((results) => {
            if(!Array.isArray(results)) return results;
            return results[0];
        });

    return {
        create,
        find,
        findOne,
    };
};