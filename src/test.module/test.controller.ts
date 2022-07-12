import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TestCollection } from './test.document';
import { Test } from './test.entity';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/all-test')
  getAllTest(): Promise<Test[]> {
    return this.testService.findAllTest();
  }

  @Get('all-test-collection')
  getAllTestCollection(): Promise<TestCollection[]> {
     return this.testService.findAllTestCollection();
  }

  @Post('/save/test')
  saveTest(@Body() test: Test): Promise<Test> {
    return this.testService.saveTestItem(test) ;
  }

  @Post('/save/test-collection')
  saveTestCollection(@Body() testCollection: TestCollection): Promise<TestCollection> {//  {
     return  this.testService.saveTestCollectionItem(testCollection);
  }

}
