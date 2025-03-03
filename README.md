# GMDEV Developer portfolio 

Hello! :) thanks for checking the code of my personal developer portfolio.

The goal for this project is just to create an efficient, clean, optimized, unique, deveoper portfolio that showcases my passion for computers and science! 

I will be using modern industry standard technology as well as new emerging technology. 

I am using libraries in this portfolio if you'd like to see more of my raw javascript work please check out:

## Please visit [gmdevstore.com](https://gmdevstore.com)  

I also am utilizing a personal public serverless API I have built previously. 

## Please visit [gmdevapi.com](https://gmdevapi.com)

## Technologies used 
- Developer environment
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
- Programming languages and frameworks
    - Web basic HTML,JS,JSX,CSS.
    - [React.js](https://react.dev/)(open source) 
    - [Saas/SCSS](https://sass-lang.com/)(open source)
- Testing and testing frameworks
    - [Jest](https://jestjs.io/)(open source)
        - Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and Svelte.
    - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)(open source)
        - React Testing Library is a lightweight solution for testing React components. It provides utility functions to interact with the components in a way similar to how a user would.
    - [Cypress](https://www.cypress.io/)(open source)
        - Cypress is a fast, easy, and reliable testing framework for anything that runs in a browser. It is used for end-to-end testing.
    - [Vitest](https://vitest.dev/)(open source)
        - Vitest is a blazing fast unit test framework powered by Vite. It is designed to be a Vite-native test runner, providing a seamless testing experience with Vite projects.
    - [ESLint](https://eslint.org/)(open source)
        - ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It helps in maintaining code quality and consistency.
    - [Prettier](https://prettier.io/)(open source)
        - Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.
- Animation
    - [Three.js](https://threejs.org/)(open source)
        - Three.js is a powerful JavaScript library that simplifies the creation of 3D graphics in the browser. It provides a wide range of features for rendering complex 3D scenes, including support for WebGL, shaders, and various geometries and materials.
     - [GSAP](https://greensock.com/gsap/)(open source)
        - GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations. It offers a simple API for animating DOM elements, SVGs, and other objects, making it easy to create smooth and complex animations.
     - [Framer Motion](https://www.framer.com/motion/)(open source)
        - Framer Motion is a popular React animation library that provides a simple and declarative API for creating animations and gestures. It integrates seamlessly with React components, allowing you to create fluid and interactive animations with ease.
- 3RD party libraries and tools 
    - [Redux](https://redux.js.org/)(open source)
        - Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Redux centralizes your application's state and logic, enabling powerful capabilities like undo/redo, state persistence, and more.

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
# Build Steps

| **Step** | **Description**                                                                                 |
|----------|--------------------------------------------------------------------------------------------------|
| 1. **Project Setup** | Create a new project using Vite's React template:                                    |
|                      | ```bash                                                                              |
|                      | npm create vite@latest my-app --template react-ts                                    |
|                      | cd my-app                                                                            |
|                      | npm install                                                                          |
|                      | ```                                                                                  |
| 2. **Development**  | Start the development server using:                                                   |
|                      | ```bash                                                                              |
|                      | npm run dev                                                                          |
|                      | ```                                                                                  |
|                      | Vite serves the project with HMR (Hot Module Replacement) and ES module support.     |
| 3. **Project Configuration** | Update `vite.config.ts` for Cloudflare-compatible builds:                    |
|                      | ```ts                                                                                |
|                      | import { defineConfig } from 'vite';                                                 |
|                      | import react from '@vitejs/plugin-react';                                            |
|                      | export default defineConfig({                                                        |
|                      |   plugins: [react()],                                                                |
|                      |   build: { outDir: 'dist' },                                                         |
|                      | });                                                                                  |
|                      | ```                                                                                  |
| 4. **TypeScript Setup** | Ensure `tsconfig.json` is configured correctly for React:                         |
|                      | ```json                                                                              |
|                      | { "compilerOptions": { "target": "ESNext", "jsx": "react-jsx" } }                    |
|                      | ```                                                                                  |
| 5. **Build for Production** | Build the optimized production version:                                       |
|                      | ```bash                                                                              |
|                      | npm run build                                                                        |
|                      | ```                                                                                  |
|                      | Vite uses Rollup under the hood to produce optimized code with code splitting.       |
| 6. **Cloudflare Pages Setup** | Log in to Cloudflare and create a new Pages project.                        |
|                      | Select the GitHub repository for your project.                                       |
| 7. **Configure Build Settings** | Set the build commands in Cloudflare Pages:                               |
|                      | **Build command:** `npm run build`                                                   |
|                      | **Build output directory:** `dist`                                                   |
|                      | **Node version:** Use default or match your local Node.js version.                   |
| 8. **Environment Variables** | Add environment variables if needed (e.g., API keys).                        |
| 9. **Deployment** | Cloudflare automatically detects changes on the GitHub branch and starts the build.     |
|                      | The build output is deployed globally via Cloudflare's CDN.                          |
| 10. **Preview and Production Links** | Cloudflare provides a preview link for each deployment.              |
|                      | Production is automatically updated when the main branch changes.                    |
| 11. **Performance Benefits** | The project benefits from Cloudflare's global edge network and caching.      |
|                      | Static assets and optimized bundles serve quickly across regions.                    |

---
# AI 
## AI Retrieval-Augmented Generation (RAG)

AI Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval and natural language generation to provide more accurate and contextually relevant responses. In this approach, a retrieval model first searches a large corpus of documents to find relevant information based on a user's query. Then, a generation model uses the retrieved information to generate a coherent and informative response.

### Use Case in My Application

In my application, AI RAG is used to enhance the chatbot's ability to answer user queries based on the documents stored in the application. By leveraging RAG, the chatbot can:

1. **Retrieve Relevant Information**: The retrieval model searches through the stored documents to find the most relevant information related to the user's query.
2. **Generate Accurate Responses**: The generation model uses the retrieved information to generate a detailed and accurate response, ensuring that the answers are contextually appropriate and informative.

This approach improves the chatbot's performance by providing more precise and context-aware answers, making it a valuable tool for users seeking information from the stored documents.

## Step-by-Step Guide: Upload Documents Directly in React App

### Step 1: Create Document Directory
Create a directory in your React app to store documents, e.g., `src/documents`.

### Step 2: Add Documents
Add your documents in JSON, Markdown (.md), or plain text format to the `src/documents` directory.

### Step 3: Install Dependencies
Install necessary packages for embedding models and local LLMs:
```sh
npm install @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder transformers.js local-llm
```

### Step 4: Load Documents
Create a utility function to load documents from the `src/documents` directory:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/utils/loadDocuments.js
import fs from 'fs';
import path from 'path';

export const loadDocuments = () => {
    const documentsDir = path.resolve(__dirname, '../documents');
    const files = fs.readdirSync(documentsDir);
    return files.map(file => fs.readFileSync(path.join(documentsDir, file), 'utf-8'));
};
```

### Step 5: Generate Embeddings
Create a function to generate embeddings for the loaded documents using a JS-based embedding model:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/utils/generateEmbeddings.js
import * as use from '@tensorflow-models/universal-sentence-encoder';

export const generateEmbeddings = async (documents) => {
    const model = await use.load();
    const embeddings = await model.embed(documents);
    return embeddings.arraySync();
};
```

### Step 6: Store Embeddings
Store the generated embeddings in IndexedDB or LocalStorage:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/utils/storeEmbeddings.js
export const storeEmbeddings = (embeddings) => {
    localStorage.setItem('documentEmbeddings', JSON.stringify(embeddings));
};
```

### Step 7: Retrieve Embeddings
Create a function to retrieve embeddings from storage:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/utils/retrieveEmbeddings.js
export const retrieveEmbeddings = () => {
    const embeddings = localStorage.getItem('documentEmbeddings');
    return embeddings ? JSON.parse(embeddings) : null;
};
```

### Step 8: Set Up Local LLM
Set up an open-source local LLM (e.g., WebLLM, llama.cpp, or Mistral) to run in-browser:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/utils/localLLM.js
import { LocalLLM } from 'local-llm';

export const runLocalLLM = async (query, context) => {
    const llm = new LocalLLM();
    const response = await llm.generate(query, context);
    return response;
};
```

### Step 9: Implement Chatbot
Implement the chatbot component to handle user queries and return answers:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/components/Chatbot.js
import React, { useState, useEffect } from 'react';
import { loadDocuments } from '../utils/loadDocuments';
import { generateEmbeddings } from '../utils/generateEmbeddings';
import { storeEmbeddings, retrieveEmbeddings } from '../utils/storeEmbeddings';
import { runLocalLLM } from '../utils/localLLM';

const Chatbot = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        const init = async () => {
            const documents = loadDocuments();
            const embeddings = await generateEmbeddings(documents);
            storeEmbeddings(embeddings);
        };
        init();
    }, []);

    const handleQuery = async () => {
        const embeddings = retrieveEmbeddings();
        const context = embeddings.map(embedding => embedding.text).join(' ');
        const answer = await runLocalLLM(query, context);
        setResponse(answer);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question..."
            />
            <button onClick={handleQuery}>Ask</button>
            <p>{response}</p>
        </div>
    );
};

export default Chatbot;
```

### Step 10: Integrate Chatbot
Integrate the chatbot component into your main application:
```js
// filepath: /c:/SpecterClearLLC/gmdevportfolio/src/App.js
import React from 'react';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <Chatbot />
        </div>
    );
}

export default App;
```

This guide provides a step-by-step approach to creating an AI chatbot that answers questions based on personal documents stored directly in your React app. The chatbot uses a JS-based embedding model to convert document text into embeddings and a local LLM to generate responses.

## Useful Resources for RAG Implementation

### Research and Development
- [TensorFlow](https://www.tensorflow.org/): An open-source platform for machine learning.
- [Hugging Face](https://huggingface.co/): A hub for natural language processing models and datasets.
- [OpenAI](https://openai.com/): Research organization focused on developing and deploying AI.

### Hosting and Deployment
- [Vercel](https://vercel.com/): A platform for frontend developers, providing hosting and serverless functions.
- [Netlify](https://www.netlify.com/): A platform for deploying and managing modern web projects.
- [Cloudflare Pages](https://pages.cloudflare.com/): A JAMstack platform for frontend developers to collaborate and deploy websites.

### Embedding Models and Libraries
- [Universal Sentence Encoder](https://tfhub.dev/google/universal-sentence-encoder/4): A model for encoding sentences into embedding vectors.
- [Transformers.js](https://xenova.github.io/transformers.js/): A JavaScript library for running transformer models in the browser.
- [Local LLM](https://github.com/local-llm): A library for running local language models in the browser.

### Data Storage and Management
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API): A low-level API for storing large amounts of structured data.
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): A web storage API for storing data locally in the browser.

### Additional Tools
- [Jupyter Notebooks](https://jupyter.org/): An open-source web application for creating and sharing documents with live code, equations, visualizations, and narrative text.
- [Colab](https://colab.research.google.com/): A free Jupyter notebook environment that runs in the cloud, provided by Google Research.

These resources can help you in various stages of implementing AI RAG in your application, from research and development to deployment and hosting.

# AI Implementation Summary

By using Hugging Face Transformers with WebAssembly and TensorFlow.js, you can run local language models directly in the browser. This approach leverages powerful AI models and ensures that your application remains responsive and efficient. The provided code snippets guide you through loading documents, generating embeddings, storing and retrieving embeddings, and implementing a chatbot component that uses these embeddings to answer user queries.

## Step-by-Step Guide

| **Step** | **Description**                                                                                 |
|----------|--------------------------------------------------------------------------------------------------|
| **1. Create Document Directory** | Create a directory in your React app to store documents, e.g., `src/documents`. |
| **2. Add Documents** | Add your documents in JSON, Markdown (.md), or plain text format to the `src/documents` directory. |
| **3. Install Dependencies** | Install necessary packages for embedding models and local LLMs:              |
|                      | ```sh                                                                               |
|                      | npm install @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder @xenova/transformers axios |
|                      | ```                                                                                  |
| **4. Load Documents** | Create a utility function to load documents from the `src/documents` directory:     |
|                      | ```js                                                                               |
|                      | import fs from 'fs';                                                                |
|                      | import path from 'path';                                                            |
|                      | export const loadDocuments = () => {                                                |
|                      |     const documentsDir = path.resolve(__dirname, '../documents');                   |
|                      |     const files = fs.readdirSync(documentsDir);                                     |
|                      |     return files.map(file => fs.readFileSync(path.join(documentsDir, file), 'utf-8')); |
|                      | };                                                                                  |
|                      | ```                                                                                  |
| **5. Generate Embeddings** | Create a function to generate embeddings for the loaded documents using a JS-based embedding model: |
|                      | ```js                                                                               |
|                      | import * as use from '@tensorflow-models/universal-sentence-encoder';               |
|                      | export const generateEmbeddings = async (documents) => {                            |
|                      |     const model = await use.load();                                                 |
|                      |     const embeddings = await model.embed(documents);                                |
|                      |     return embeddings.arraySync();                                                  |
|                      | };                                                                                  |
|                      | ```                                                                                  |
| **6. Store Embeddings** | Store the generated embeddings in IndexedDB or LocalStorage:                     |
|                      | ```js                                                                               |
|                      | export const storeEmbeddings = (embeddings) => {                                     |
|                      |     localStorage.setItem('documentEmbeddings', JSON.stringify(embeddings));         |
|                      | };                                                                                  |
|                      | ```                                                                                  |
| **7. Retrieve Embeddings** | Create a function to retrieve embeddings from storage:                        |
|                      | ```js                                                                               |
|                      | export const retrieveEmbeddings = () => {                                            |
|                      |     const embeddings = localStorage.getItem('documentEmbeddings');                  |
|                      |     return embeddings ? JSON.parse(embeddings) : null;                              |
|                      | };                                                                                  |
|                      | ```                                                                                  |
| **8. Set Up Hugging Face Transformers** | Set up Hugging Face Transformers to run in the browser:          |
|                      | ```js                                                                               |
|                      | import { pipeline } from '@xenova/transformers';                                    |
|                      | export const runTransformer = async (query, context) => {                           |
|                      |     const generator = await pipeline('text-generation');                            |
|                      |     const response = await generator(query, { context });                           |
|                      |     return response;                                                                |
|                      | };                                                                                  |
|                      | ```                                                                                  |
| **9. Implement Chatbot** | Implement the chatbot component to handle user queries and return answers:      |
|                      | ```js                                                                               |
|                      | import React, { useState, useEffect } from 'react';                                 |
|                      | import { loadDocuments } from '../utils/loadDocuments';                             |
|                      | import { generateEmbeddings } from '../utils/generateEmbeddings';                   |
|                      | import { storeEmbeddings, retrieveEmbeddings } from '../utils/storeEmbeddings';     |
|                      | import { runTransformer } from '../utils/transformers';                             |
|                      | const Chatbot = () => {                                                             |
|                      |     const [query, setQuery] = useState('');                                         |
|                      |     const [response, setResponse] = useState('');                                   |
|                      |     useEffect(() => {                                                               |
|                      |         const init = async () => {                                                  |
|                      |             const documents = loadDocuments();                                      |
|                      |             const embeddings = await generateEmbeddings(documents);                 |
|                      |             storeEmbeddings(embeddings);                                            |
|                      |         };                                                                          |
|                      |         init();                                                                     |
|                      |     }, []);                                                                         |
|                      |     const handleQuery = async () => {                                               |
|                      |         const embeddings = retrieveEmbeddings();                                    |
|                      |         const context = embeddings.map(embedding => embedding.text).join(' ');      |
|                      |         const answer = await runTransformer(query, context);                        |
|                      |         setResponse(answer);                                                        |
|                      |     };                                                                              |
|                      |     return (                                                                        |
|                      |         <div>                                                                       |
|                      |             <input                                                                  |
|                      |                 type="text"                                                         |
|                      |                 value={query}                                                       |
|                      |                 onChange={(e) => setQuery(e.target.value)}                          |
|                      |                 placeholder="Ask a question..."                                     |
|                      |             />                                                                      |
|                      |             <button onClick={handleQuery}>Ask</button>                              |
|                      |             <p>{response}</p>                                                       |
|                      |         </div>                                                                      |
|                      |     );                                                                              |
|                      | };                                                                                  |
|                      | export default Chatbot;                                                             |
|                      | ```                                                                                  |
| **10. Integrate Chatbot** | Integrate the chatbot component into your main application:                    |
|                      | ```js                                                                               |
|                      | import React from 'react';                                                          |
|                      | import Chatbot from './components/Chatbot';                                         |
|                      | function App() {                                                                    |
|                      |     return (                                                                        |
|                      |         <div>                                                                       |
|                      |             <h1>Welcome to My Portfolio</h1>                                        |
|                      |             <Chatbot />                                                             |
|                      |         </div>                                                                      |
|                      |     );                                                                              |
|                      | }                                                                                   |
|                      | export default App;                                                                 |
|                      | ```                                                                                  |

This guide provides a step-by-step approach to creating an AI chatbot that answers questions based on personal documents stored directly in your React app. The chatbot uses a JS-based embedding model to convert document text into embeddings and a local LLM to generate responses.

# Design/UI
