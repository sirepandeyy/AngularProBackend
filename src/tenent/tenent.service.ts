import { AbstractService } from 'src/common/abstract.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenent } from './tenent.entity';

@Injectable()
export class TenentService extends AbstractService {
    constructor(
        @InjectRepository(Tenent) private readonly tenentRepository: Repository<Tenent>
    ){
        super(tenentRepository)
    }

}
