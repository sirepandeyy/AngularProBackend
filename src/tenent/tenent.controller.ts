import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenent } from './tenent.entity';
import { TenentService } from './tenent.service';

@Controller('tenent')
export class TenentController {
    constructor(
        private tenentService: TenentService
    ){}
   @Get()
   async all()
   {
    return this.tenentService.all();
   }

   
  @Post()
  async create(@Body('name') name: string, @Body('users') ids: number[]) {
    this.tenentService.create({ name, users: ids.map((id) => ({ id })) });
  }

}
