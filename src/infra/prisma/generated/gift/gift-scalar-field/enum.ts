import { registerEnumType } from '@nestjs/graphql';

export enum GiftScalarFieldEnum {
    id = "id",
    name = "name",
    iconUrl = "iconUrl",
    price = "price",
    remaining = "remaining",
    createdAt = "createdAt"
}


registerEnumType(GiftScalarFieldEnum, { name: 'GiftScalarFieldEnum', description: undefined })
