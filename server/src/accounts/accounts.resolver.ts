import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { Account, RemoveAccountInput } from 'src/graphql.schema';
import { UpdateAccountDto } from './dto/update-account-dto';
import { CreateAccountDto } from './dto/create-account-dto';

@Resolver('Account')
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(@Args('input') input: CreateAccountDto) {
    return this.accountsService.create(input.userId, {
      bankName: input.bankName,
      cbu: input.cbu,
      currency: input.currency,
      alias: input.alias,
    });
  }

  @Query(() => [Account])
  accounts(@Args('userId') userId: string) {
    return this.accountsService.findAll(userId);
  }

  @Query(() => Account)
  account(@Args('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Mutation(() => Account)
  updateAccount(
    @Args('id') id: string,
    @Args('input') input: UpdateAccountDto,
  ) {
    // Convert null values to undefined to match expected prisma types
    const prismaInput = {
      bankName: input.bankName ?? undefined,
      cbu: input.cbu ?? undefined,
      currency: input.currency ?? undefined,
      alias: input.alias ?? undefined,
    };

    return this.accountsService.update(id, prismaInput);
  }

  @Mutation(() => Account)
  removeAccount(@Args('input') input: RemoveAccountInput) {
    return this.accountsService.remove(input.id);
  }
}
