import { registerEnumType } from '@nestjs/graphql';

export enum Game {
    NONE = "NONE",
    XENO = "XENO",
    COIN_DROPPING = "COIN_DROPPING",
    ICE_RAZE = "ICE_RAZE",
    PRESIDENT = "PRESIDENT",
    POKER = "POKER",
    WE_DIDNT_PLAYTEST = "WE_DIDNT_PLAYTEST"
}


registerEnumType(Game, { name: 'Game', description: undefined })
