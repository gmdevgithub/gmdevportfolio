# GMDEV Developer portfolio 

Hello! :) thanks for checking the code of my personal developer portfolio.

The goal for this project is just to create an efficient, clean, optimized, unique, deveoper portfolio that showcases my passion for computers and science! 

I will be using modern industry standard technology as well as new emerging technology. 

I am using libraries in this portfolio if you'd like to see more of my raw javascript work please check out:

## Please visit [gmdevstore.com](https://gmdevstore.com)  

I also am utilizing a personal public serverless API I have built previously. 

## Please visit [gmdevapi.com](https://gmdevapi.com)

## Technologies used 
- Developer tooling
    - [VScode](https://code.visualstudio.com/)(open source*)
- Build tooling
    - [Vite](https://vite.dev/) (open source) 
        - During development, Vite provides a fast development server with hot module replacement (HMR). This allows you to see changes in real-time without a full page reload.
        - Cloudflare Pages will then build your project using Vite and deploy the contents of the dist directory to their CDN, making your site available on the web.
    - [Rollup](https://rollupjs.org/) (open source) 
        - In your project, Rollup is used under the hood by Vite to bundle your code for production. Vite leverages Rollup's powerful plugin system to optimize and transform your code.
    - [Node](https://nodejs.org/en) (open source)
        - Node.js is used to run the build tools and scripts. For example, when you run vite build, Node.js executes the Vite build process, which uses Rollup under the hood to bundle your code for production. 
    - [Esbuild](https://esbuild.github.io/) (open source)
        - Esbuild is an extremely fast JavaScript bundler and minifier. In the context of your project, esbuild is used by Vite to speed up the development and build processes.
    - [Typescript](https://www.typescriptlang.org/)(open source)
        - Vite uses the TypeScript compiler to transpile TypeScript code to JavaScript. The output JavaScript code is then served by Vite during development or bundled for production.
- Browser engines and tooling 
    -[EC14](https://tc39.es/ecma262/)(open source)
    -[Edge/Firefox/Opera]()(open source)
        - This means that Edge shares the same rendering engine (Blink) and JavaScript engine (V8) as Chrome, providing similar performance and compatibility with web standards.

---
## Ecma 2025 proposed new features
| **Version** | **Feature**                             | **Description**                                                                                                                                                                                                                 |
|-------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ES2023**  | `Array.prototype.findLast()` and `Array.prototype.findLastIndex()` | Methods to find the last element or index in an array that satisfies a provided testing function.                                                                                       |
|             | Change Array by Copy Methods            | Non-destructive methods like `toReversed()`, `toSorted()`, and `toSpliced()` that return modified copies of arrays without altering the original.                                       |
|             | Hashbang (`#!`) Support                 | Allows the use of `#!` at the start of scripts, enabling them to be executed directly in Unix-like environments.                                                                        |
|             | Symbols as WeakMap Keys                 | Permits the use of symbols as keys in `WeakMap` and `WeakSet`, enhancing flexibility in certain data structures.                                                                        |
|             | Error Cause Property                    | Introduces a `cause` property to error objects, providing additional context for exceptions.                                                                                           |
|             | Import Assertions                       | Enables specifying the expected format of modules during import, improving module handling and security.                                                                                |
| **ES2024**  | `Object.groupBy()` and `Map.groupBy()`  | Methods to group objects or map elements based on a provided function, simplifying data organization.                                                                                  |
|             | Temporal API                            | A new API for precise and user-friendly handling of dates and times, addressing limitations of the existing `Date` object.                                                             |
|             | Well-Formed Unicode Strings             | Enhancements to ensure that string operations produce well-formed Unicode, improving text processing reliability.                                                                      |
| **ES2025**  | Record and Tuple Data Structures        | Introduction of immutable data structures (`Record` and `Tuple`) that offer better performance and reliability for certain types of data.                                              |
|             | Pipeline Operator (`|>`)                | A new operator that allows for a more readable and functional approach to chaining functions.                                                                                          |
|             | Pattern Matching                        | A feature that enables checking a value against a pattern, simplifying complex conditional structures.                                                                                 |

---
# Build steps
| **Step** | **Description**                                                                                 |
|----------|--------------------------------------------------------------------------------------------------|
| 1. **Project Setup** | Create a new project using Vite's React template:                                    |
|                    | ```bash                                                                                 |
|                    | npm create vite@latest my-app --template react-ts                                      |
|                    | cd my-app                                                                              |
|                    | npm install                                                                            |
|                    | ```                                                                                    |
| 2. **Development**  | Start the development server using:                                                   |
|                    | ```bash                                                                                 |
|                    | npm run dev                                                                            |
|                    | ```                                                                                    |
|                    | Vite serves the project with HMR (Hot Module Replacement) and ES module support.      |
| 3. **Project Configuration** | Update `vite.config.ts` for Cloudflare-compatible builds:                   |
|                    | ```ts                                                                                   |
|                    | import { defineConfig } from 'vite';                                                  |
|                    | import react from '@vitejs/plugin-react';                                             |
|                    | export default defineConfig({                                                         |
|                    |   plugins: [react()],                                                                  |
|                    |   build: { outDir: 'dist' },                                                           |
|                    | });                                                                                    |
|                    | ```                                                                                    |
| 4. **TypeScript Setup** | Ensure `tsconfig.json` is configured correctly for React:                         |
|                    | ```json                                                                                |
|                    | { "compilerOptions": { "target": "ESNext", "jsx": "react-jsx" } }                     |
|                    | ```                                                                                    |
| 5. **Build for Production** | Build the optimized production version:                                       |
|                    | ```bash                                                                                 |
|                    | npm run build                                                                          |
|                    | ```                                                                                    |
|                    | Vite uses Rollup under the hood to produce optimized code with code splitting.        |
| 6. **Cloudflare Pages Setup** | Log in to Cloudflare and create a new Pages project.                        |
|                    | Select the GitHub repository for your project.                                        |
| 7. **Configure Build Settings** | Set the build commands in Cloudflare Pages:                               |
|                    | **Build command:** `npm run build`                                                     |
|                    | **Build output directory:** `dist`                                                    |
|                    | **Node version:** Use default or match your local Node.js version.                    |
| 8. **Environment Variables** | Add environment variables if needed (e.g., API keys).                        |
| 9. **Deployment** | Cloudflare automatically detects changes on the GitHub branch and starts the build.    |
|                    | The build output is deployed globally via Cloudflare's CDN.                           |
| 10. **Preview and Production Links** | Cloudflare provides a preview link for each deployment.             |
|                    | Production is automatically updated when the main branch changes.                     |
| 11. **Performance Benefits** | The project benefits from Cloudflare's global edge network and caching.      |
|                    | Static assets and optimized bundles serve quickly across regions.                     |
