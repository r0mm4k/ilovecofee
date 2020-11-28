module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5000,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
