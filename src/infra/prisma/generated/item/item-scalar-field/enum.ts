import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    iconUrl = "iconUrl",
    layerUrl = "layerUrl",
    character = "character",
    layer = "layer",
    characterStatusIds = "characterStatusIds"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
