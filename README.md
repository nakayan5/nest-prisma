### Overview

```bash
## Running the app

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

## Running docker

# start
$ docker-compose up -d

# stop
$ docker-compose down

# confirm
$ docker-compose ps


## Migration

$ npx prisma generate
$ npx prisma migrate dev --name [name]

```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

<!-- https://zenn.dev/uttk/articles/9095a28be1bf5d -->
