# Todo API CRUD Maked with Skalavel

This is an example of a crud with the new skalavel 0.1.20
features. This crud is about todos and is only the API

## Getting Started

First clone the repository:

```sh
git clone https://github.com/AlphaTechnolog/todo-app-api-skalavel.git todo-api
cd !$
```

Then install the dependencies with `yarn` or `npm`:

```sh
yarn
```

or with `npm`:

```sh
npm install
```

Then copy `.env.sample` to `.env`:

```sh
cp -r ./.env.sample ./.env
```

## Notes

This api try to connect to a mongodb database specified in the `.env`
file, you can change it address, changing the `MONGO_URI` environment variable

**IMPORTANT NOTE**: Before run the API, you must start the mongodb service

## Running the API

To run the APi, first you must build the typescript code:

```sh
yarn build # or with npm:
npm run build
```

Then copy the views of the source to the builded code:

```sh
mv ./src/app/home/views ./dist/app/home
```

And then execute the builded code

```sh
yarn start # or with npm:
npm run start
```

## Running the API for development

If you want to run the API with hot reloading and related features,
you can use the `dev` command with `yarn` or `npm`:

```sh
yarn dev # or with npm
npm run dev
```
