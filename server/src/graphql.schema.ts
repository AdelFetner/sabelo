
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAccountInput {
    bankName: string;
    cbu: string;
    currency: string;
    alias?: Nullable<string>;
    userId: string;
}

export class UpdateAccountInput {
    bankName?: Nullable<string>;
    cbu?: Nullable<string>;
    currency?: Nullable<string>;
    alias?: Nullable<string>;
}

export class RemoveAccountInput {
    id: string;
}

export class CreateUserInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class RemoveUserInput {
    id: string;
}

export class Account {
    id: string;
    bankName: string;
    cbu: string;
    balance: number;
    currency: string;
    alias?: Nullable<string>;
    user: User;
    createdAt: string;
}

export abstract class IQuery {
    abstract accounts(userId: string, skip?: Nullable<number>, take?: Nullable<number>): Account[] | Promise<Account[]>;

    abstract account(id: string): Nullable<Account> | Promise<Nullable<Account>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAccount(input: CreateAccountInput): Account | Promise<Account>;

    abstract updateAccount(id: string, input: UpdateAccountInput): Account | Promise<Account>;

    abstract removeAccount(input: RemoveAccountInput): Account | Promise<Account>;

    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, input: UpdateUserInput): User | Promise<User>;

    abstract removeUser(input: RemoveUserInput): User | Promise<User>;
}

export class User {
    id: string;
    email: string;
    passwordHash: string;
    accounts?: Nullable<Account[]>;
    createdAt: string;
    updatedAt: string;
}

type Nullable<T> = T | null;
