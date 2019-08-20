import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('Hello Controller', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should be "Hello Nestjs, i got you"', () => {
      expect(controller.getMessage()).toBe('Hello Nestjs, i got you');
    });
  })
});
