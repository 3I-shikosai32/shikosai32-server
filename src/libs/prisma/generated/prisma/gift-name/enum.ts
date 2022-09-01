import { registerEnumType } from '@nestjs/graphql';

export enum GiftName {
    BABY_STAR = "BABY_STAR",
    MOROKOSHI = "MOROKOSHI",
    CABAGGE = "CABAGGE",
    UMAIBO_CHEESE = "UMAIBO_CHEESE",
    UMAIBO_CORN_POTAGE = "UMAIBO_CORN_POTAGE",
    UMAIBO_MENTAIKO = "UMAIBO_MENTAIKO"
}


registerEnumType(GiftName, { name: 'GiftName', description: undefined })
