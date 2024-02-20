import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTypeOrmOptions } from '../ormconfig';
import { UserModule } from './user/user.module';
import { CellImgAnalyzedModule } from './settings/analysisDatabse/cellImgAnalyzed/cell.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';
import { ResponseInterceptor } from './utils/response.interceptor';
import { CombinedModule } from './combinedProtocol/combined.module';
import { OrderListModule } from './orderList/orderList.module';
import { ProInfoModule } from './processinfo/proInfo.module';
import { RBCModule } from './rbcclassification/rbc.module';
import { WBCModule } from './wbcclassification/wbc.module';
import { LoggerService } from './logger.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: createTypeOrmOptions,
    }),
    UserModule,
    CellImgAnalyzedModule,
    OrderListModule,
    ProInfoModule,
    CombinedModule,
    RBCModule,
    WBCModule,
  ],
  controllers: [AppController],
  providers: [
    LoggerService,
    AppService,
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
