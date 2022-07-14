import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TestCollection } from './mongo/test.document';
import { Test } from './mysql/test.entity';

@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_REPOSITORY')
    private testRepository: Repository<Test>,
    @Inject('TEST_COLLECTION_REPOSITORY')
    private testMongoRepository: Repository<TestCollection>,
  ) {}

  async findAllTest(): Promise<Test[]> {
    return this.testRepository.find();
  }

  async findAllTestCollection(): Promise<TestCollection[]> {
    return await this.testMongoRepository.find();
  }

  public async saveTestItem(test: Test): Promise<Test> {
    return this.testRepository.save(test);
  }

  public async saveTestCollectionItem(testCollection: TestCollection): Promise<TestCollection> {
    return this.testMongoRepository.save(testCollection);
  }

}