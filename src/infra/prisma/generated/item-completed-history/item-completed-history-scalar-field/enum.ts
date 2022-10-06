import { registerEnumType } from '@nestjs/graphql';

export enum ItemCompletedHistoryScalarFieldEnum {
    id = "id",
    isDelivered = "isDelivered",
    characterStatusId = "characterStatusId",
    createdAt = "createdAt",
    deliveredAt = "deliveredAt"
}


registerEnumType(ItemCompletedHistoryScalarFieldEnum, { name: 'ItemCompletedHistoryScalarFieldEnum', description: undefined })
