import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    url = "url",
    character = "character",
    layer = "layer",
    userIds = "userIds"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
