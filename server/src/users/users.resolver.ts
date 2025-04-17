import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RemoveUserDto } from './dto/remove-user.dto';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/models/account.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly accountsService: AccountsService,
  ) {}

  @ResolveField(() => [Account])
  async accounts(@Parent() user: User) {
    return this.accountsService.findAll(user.id);
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserDto) {
    return this.usersService.create(input);
  }

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  User(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args('input') input: UpdateUserDto) {
    return this.usersService.update(id, input);
  }

  @Mutation(() => User)
  removeUser(@Args('input') input: RemoveUserDto) {
    return this.usersService.remove(input.id);
  }
}
