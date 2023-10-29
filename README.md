<h2 align="center">
  NestJS Starter Template
</h2>

## Description


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with:
- Authentication with JWT
- Route guarding based on authentication status and roles
- Database connection using [Prisma](https://www.prisma.io/)

## Installation

```bash
$ npm install
```

## Database
1. Create <i>.env</i> file in project root
2. Follow <i>.env.template</i> for required variables
3. You can update your db provider here ([Providers](https://www.prisma.io/docs/concepts/database-connectors))
```typescript
// From Project Root: prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
