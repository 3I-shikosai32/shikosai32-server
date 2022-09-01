import { registerEnumType } from '@nestjs/graphql';

export enum Character {
    TREE = "TREE",
    FOX = "FOX",
    GOKU = "GOKU",
    CAT = "CAT",
    PUDDING = "PUDDING",
    REAPER = "REAPER"
}


registerEnumType(Character, { name: 'Character', description: undefined })
