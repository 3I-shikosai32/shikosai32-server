import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    role = "role",
    totalPointDay1 = "totalPointDay1",
    totalPointDay2 = "totalPointDay2",
    consumablePoint = "consumablePoint",
    character = "character",
    iconUrl = "iconUrl",
    avatarUrl = "avatarUrl",
    participateGame = "participateGame",
    pullableGachaTimes = "pullableGachaTimes",
    createdAt = "createdAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
