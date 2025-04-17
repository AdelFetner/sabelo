import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BudgetsService } from './budgets.service';
import { Budget } from './entities/budget.model';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Resolver(() => Budget)
export class BudgetsResolver {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Mutation(() => Budget)
  createBudget(@Args('createBudgetInput') input: CreateBudgetDto) {
    return this.budgetsService.create(input);
  }

  @Query(() => [Budget], { name: 'budgets' })
  findAllUserBudgets(@Args('userId', { type: () => String }) id: string) {
    return this.budgetsService.findAll(id);
  }

  @Query(() => Budget, { name: 'budget' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.budgetsService.findOne(id);
  }

  @Mutation(() => Budget)
  updateBudget(@Args('updateBudgetInput') input: UpdateBudgetDto) {
    return this.budgetsService.update(input.id, input);
  }

  @Mutation(() => Budget)
  removeBudget(@Args('id', { type: () => String }) id: string) {
    return this.budgetsService.remove(id);
  }
}
