import { Test } from 'src/test.module/test.entity';
import { DataSource } from 'typeorm';


export const MYSQL_LOCALHOST_DATA_SOURCE = 'MYSQL_LOCALHOST_DATA_SOURCE';

export const databaseProviders = [
  {
    provide: MYSQL_LOCALHOST_DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'my-secret-pw',
        database: 'test',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ], 
        synchronize: true, 
      }); 

      return dataSource.initialize();
    },
  },
];