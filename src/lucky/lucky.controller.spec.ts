import { Test, TestingModule } from '@nestjs/testing';
import { LuckyController } from './lucky.controller';

describe('Lucky Controller', () => {
  let controller: LuckyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LuckyController],
    }).compile();

    controller = module.get<LuckyController>(LuckyController);
  });
  describe('root', () => {
    it('should be in rage', () => {
      expect(controller.getLuckyNumber()).toBeGreaterThanOrEqual(1);
      expect(controller.getLuckyNumber()).toBeLessThanOrEqual(19);
    });
  })
});
