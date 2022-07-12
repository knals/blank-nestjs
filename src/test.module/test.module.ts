import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module/database.module';
import { databaseProviders } from 'src/database.module/database.providers';
import { TestController } from './test.controller';
import { testRepositories } from './test.providers';
import { TestService } from './test.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [TestController], 
  providers: [
    ...testRepositories,
    TestService,
    ...databaseProviders
  ],
})
export class TestModule {}