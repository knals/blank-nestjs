import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Roles } from 'nest-keycloak-connect';
import { TestCollection } from './mongo/test.document';
import { Test } from './mysql/test.entity';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly configService: ConfigService
  ) {}

  @Get('/all-test')
  @Roles({ roles: ['user'] })
  getAllTest(): Promise<Test[]> {
    return this.testService.findAllTest();
  }

  @Get('all-test-collection')
  @Roles({ roles: ['user'] })
  getAllTestCollection(): Promise<TestCollection[]> {
     return this.testService.findAllTestCollection();
  }

  @Get('enviroment')
  @Roles({ roles: ['admin'] })
  getEnviromentProperty(): string {
    console.log(this.configService);
    console.log(`${process.env.NODE_ENV}`);

/*     for (const key in process.env) {
      if (Object.prototype.hasOwnProperty.call(process.env, key)) {
        const element = process.env[key];
        console.log(element);
        
      }
    } */
    console.log(this.configService.get<string>('GREETING_MSG'));
     return this.configService.get<string>('GREETING_MSG');
  }

  @Post('/save/test')
  @Roles({ roles: ['admin'] })
  saveTest(@Body() test: Test): Promise<Test> {
    return this.testService.saveTestItem(test) ;
  }

  @Post('/save/test-collection')
  @Roles({ roles: ['admin'] })
  saveTestCollection(@Body() testCollection: TestCollection): Promise<TestCollection> {//  {
     return  this.testService.saveTestCollectionItem(testCollection);
  }

}
