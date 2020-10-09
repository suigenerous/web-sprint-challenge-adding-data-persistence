// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database1.db3'
    }
  },
    migrations: {
      tableName: './database/migrations'
    }

};
