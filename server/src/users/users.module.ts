import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, AccountsService],
})
export class UsersModule {}
