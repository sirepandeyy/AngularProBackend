import { Module } from '@nestjs/common';
import { TenentService } from './tenent.service';
import { TenentController } from './tenent.controller';
import { Tenent } from './tenent.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Tenent])],
  providers: [TenentService],
  controllers: [TenentController]
})
export class TenentModule {}
