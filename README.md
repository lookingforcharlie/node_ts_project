# Set up Node and TS project and TS Concept

## Commands

- npm init -y
- npm i -D typescript
- now, we have tsc command, tsc means ts compiler
- manually create tsconfig.json file, which specifies the setting for tsc(compiling), or run 'npx tsc --init' to generate full-blown tsconfig.json file
- npm i -D nodemon ts-node
- now, you can use ts-node to run any single ts file, eg: ts-node src/example.ts
- ts-node is the middle ground between Node and TS
- ts-node is a way to run typescript code through node where the compilation is transparent, you don't have to constantly compile your code
- create example.ts file and write some JS code
- npx tsc, compile ts file into js file into designated directory
- put "build": "tsc" in package.json, in package.json we don't need 'npx'

## tsconfig.json

- "noEmitOnError": true: preventing generate distribution code if there's type error

## nodemon

- nodemon works with ts-node
- nodemon uses ts-node behind the scene to make sure the server restart every time the code changed and saved
- you can use "npx nodemon ./src/example.ts" in the terminal to watch example.ts file
