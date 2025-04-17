import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Account } from './models/account.model';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { RemoveAccountDto } from './dto/remove-account.dto';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(@Args('input') input: CreateAccountDto) {
    return this.accountsService.create(input);
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
    return this.accountsService.update(id, input);
  }

  @Mutation(() => Account)
  removeAccount(@Args('input') input: RemoveAccountDto) {
    return this.accountsService.remove(input.id);
  }
}
