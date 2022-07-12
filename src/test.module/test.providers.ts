import { MONGO_LOCALHOST_DATA_SOURCE, MYSQL_LOCALHOST_DATA_SOURCE } from 'src/database.module/database.providers';
import { DataSource } from 'typeorm';
import { TestCollection } from './test.document';
import { Test } from './test.entity';

export const testRepositories = [
  {
    provide: 'TEST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Test),
    inject: [MYSQL_LOCALHOST_DATA_SOURCE],
  },
  {
    provide: 'TEST_COLLECTION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TestCollection),
    inject: [MONGO_LOCALHOST_DATA_SOURCE],
  },
];