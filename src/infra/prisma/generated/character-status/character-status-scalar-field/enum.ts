import { registerEnumType } from '@nestjs/graphql';

export enum CharacterStatusScalarFieldEnum {
    id = "id",
    character = "character",
    iconUrl = "iconUrl",
    avatarUrl = "avatarUrl",
    characterPointDay1 = "characterPointDay1",
    characterPointDay2 = "characterPointDay2",
    userId = "userId",
    itemIds = "itemIds"
}


registerEnumType(CharacterStatusScalarFieldEnum, { name: 'CharacterStatusScalarFieldEnum', description: undefined })
