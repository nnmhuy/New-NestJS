import { Controller, Get } from '@nestjs/common';

@Controller('lucky')
export class LuckyController {
  @Get()
  getLuckyNumber(): number {
    return Math.floor(Math.random() * Math.floor(18)) + 1;
  }
}
