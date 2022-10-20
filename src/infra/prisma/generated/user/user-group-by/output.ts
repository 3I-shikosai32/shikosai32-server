import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../../prisma/game/enum';
import { UserCountAggregate } from '../user-count-aggregate/output';
import { UserAvgAggregate } from '../user-avg-aggregate/output';
import { UserSumAggregate } from '../user-sum-aggregate/output';
import { UserMinAggregate } from '../user-min-aggregate/output';
import { UserMaxAggregate } from '../user-max-aggregate/output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:false})
    authId!: string;

    @Field(() => Int, {nullable:false})
    totalPointDay1!: number;

    @Field(() => Int, {nullable:false})
    totalPointDay2!: number;

    @Field(() => Int, {nullable:false})
    consumablePoint!: number;

    @Field(() => Game, {nullable:false})
    participateGame!: keyof typeof Game;

    @Field(() => Int, {nullable:false})
    pullableGachaTimes!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
