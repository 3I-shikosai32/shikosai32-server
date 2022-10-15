import { PrismaClient } from '@prisma/client';
import { CharacterStatusSeeder } from './seeder/character-status.seeder';
import { GiftHistorySeeder } from './seeder/gift-history.seeder';
import { GiftSeeder } from './seeder/gift.seeder';
import { ItemSeeder } from './seeder/item.seeder';
import { UserSeeder } from './seeder/user.seeder';

const prisma = new PrismaClient();

const main = async () => {
  const userSeeder = new UserSeeder(prisma);
  const characterStatusSeeder = new CharacterStatusSeeder(prisma);
  const itemSeeder = new ItemSeeder(prisma);
  const giftSeeder = new GiftSeeder(prisma);
  const giftHistorySeeder = new GiftHistorySeeder(prisma);

  await giftHistorySeeder.deleteGiftHistories();
  await giftSeeder.deleteGifts();
  await characterStatusSeeder.deleteCharacterStatuses();
  await itemSeeder.deleteItems();
  await userSeeder.deleteUsers();

  await userSeeder.createUsers();
  const createdUsers = await userSeeder.findUsers();

  await itemSeeder.createItems();
  const createdItems = await itemSeeder.findItems();

  await characterStatusSeeder.createCharacterStatuses(
    createdUsers.map((user) => user.id),
    createdItems.map((item) => item.id),
  );
  const createdCharacterStatuses = await characterStatusSeeder.findCharacterStatuses();

  await itemSeeder.updateItems(
    createdItems.map((item) => item.id),
    createdCharacterStatuses.map((character) => character.id),
  );

  await giftSeeder.createGifts();
  const createdGifts = await giftSeeder.findGifts();

  await giftHistorySeeder.createGiftHistories(createdUsers[0].id, createdGifts[0].id);
};

main()
  // eslint-disable-next-line no-console
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
