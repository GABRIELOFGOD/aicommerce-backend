import { createParamDecorator, ExecutionContext } from "@nestjs/common";

const getcurrentUserByContext = (context: ExecutionContext) => context.switchToHttp().getRequest().user;

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => getcurrentUserByContext(context),
);