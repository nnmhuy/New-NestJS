import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getMessage(): string {
    return 'Hello Nestjs, i got you'
  }

  @Get('inner')
  getInnerMessage() : string {
    return 'Hello Nestjs, this is inner message'
  }

  @Get(':param')
  getMessageWithParam(@Param('param') param: string) {
    return `Hello ${param}`
  }
}
