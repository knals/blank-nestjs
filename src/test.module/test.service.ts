import { Injectable, Inject } from '@nestjs/common';
import { MYSQL_LOCALHOST_DATA_SOURCE } from 'src/database.module/database.providers';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @Inject(MYSQL_LOCALHOST_DATA_SOURCE)
    private photoRepository: Repository<Test>,
  ) {}

  async findAll(): Promise<Test[]> {
    return this.photoRepository.find();
  }
}