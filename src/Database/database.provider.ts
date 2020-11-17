import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api-parcial',
      entities: [
          'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];