import { Module } from '@nestjs/common';
import { TrackModule } from 'src/track/track.module';
import { AppController } from './testFiles/app.controller';
import { AppService } from './testFiles/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:Mongo.x&aomy2023@cluster0.pcw5e76.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    FileModule,
  ],
})

// @Module - декоратор, это обертка, которая добавляет на класс дополнительный функционал и сообщает о том, то он у нас модуль
// параметром принимает обьект

// controllers  - принимает в массив со всеми контроллерами в нашем приложении
export class AppModule {}
