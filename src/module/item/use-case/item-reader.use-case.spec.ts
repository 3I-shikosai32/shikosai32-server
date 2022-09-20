import { Test } from '@nestjs/testing';
import { MockedItemRepository } from '../repository/mocked-item.repository';
import { ItemReaderUseCase } from './item-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('ItemReaderUseCase', () => {
  let mockedItemRepository: MockedItemRepository;
  let itemReaderUseCase: ItemReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.ITEM_REPOSITORY, useClass: MockedItemRepository }, ItemReaderUseCase],
    }).compile();

    mockedItemRepository = moduleRef.get(InjectionToken.ITEM_REPOSITORY);
    itemReaderUseCase = moduleRef.get(ItemReaderUseCase);
  });

  test('findUsersByItemId', async () => {
    const expectedUsers = await mockedItemRepository.findUsersByItemId();

    const foundItem = await mockedItemRepository.findUnique();
    const foundUsers = await itemReaderUseCase.findUsersByItemId(foundItem.id);

    expect(foundUsers).toEqual(expectedUsers);
  });
});
