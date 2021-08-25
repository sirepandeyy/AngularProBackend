import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { AbstractService } from './common/abstract.service';
import { ProductModule } from './product/product.module';
import { UploadController } from './product/upload.controller';
import { OrderModule } from './order/order.module';
import { DatabaseModule } from './database/database.module';
import { TenentModule } from './tenent/tenent.module';


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
       autoLoadEntities: true,
      synchronize: true, // shouldn't be used in production - may lose data
    }),
    AuthModule,
    CommonModule,
    RoleModule,
    PermissionModule,
    ProductModule,
    OrderModule,
    TenentModule
    // DatabaseModule,
    
    
  ],
  controllers: [AppController, UserController],
  providers: [AppService ],
})
export class AppModule {}
