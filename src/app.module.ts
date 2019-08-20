import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { LuckyController } from './lucky/lucky.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, LuckyController],
  providers: [AppService],
})
export class AppModule {}
