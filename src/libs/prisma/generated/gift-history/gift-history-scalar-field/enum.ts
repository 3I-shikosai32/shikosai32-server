import { registerEnumType } from '@nestjs/graphql';

export enum GiftHistoryScalarFieldEnum {
    id = "id",
    isDelivered = "isDelivered",
    userId = "userId",
    giftId = "giftId",
    createdAt = "createdAt"
}


registerEnumType(GiftHistoryScalarFieldEnum, { name: 'GiftHistoryScalarFieldEnum', description: undefined })
