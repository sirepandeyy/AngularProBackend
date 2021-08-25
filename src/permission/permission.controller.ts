import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from 'src/auth/auth.guard';
import { Repository } from 'typeorm';
import { Permission } from './permission.entity';
import { PermissionService } from './permission.service';
@UseGuards(AuthGuard)

@Controller('permissions')
export class PermissionController {
    constructor(private permissionService: PermissionService) {
    }
   @Get()
   async all()
   {
    return this.permissionService.all();
   }
}
