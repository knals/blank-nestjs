import { Controller, Get } from '@nestjs/common';
import { RoleMatchingMode, Roles } from 'nest-keycloak-connect';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles({ roles: ['USER'], mode: RoleMatchingMode.ALL })
  getHello(): string {
    return this.appService.getHello();
  }

}
