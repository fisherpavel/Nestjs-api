import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://pavel:pavel@cluster0-0ti6t.mongodb.net/passport?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
