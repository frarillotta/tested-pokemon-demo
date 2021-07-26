Hey! This is my attempt at Tested's pokedex challenge.  
I used some tech that I really enjoy using in the React ecosystem, including 
- Cypress 
- React-window to virtualize long lists
- React-query because it's unbelievably good 
- Material-UI
- Next.js
- styled-components

You can find a hosted production build here: https://tested-pokemon-demo.vercel.app/ 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run a production build, you can run
```bash
npm run build && npm run start
```

In this project I used Jest snapshots as my unit tests,
You can run them using:
```bash
npm run jest
```

I also opted for Cypress for integration tests.  
Since I'm using a bit of a hack to force the google chrome garbage collector (Cypress has quite a few memory handling problems), I had to split the script in two to pass some electron parameters.  
  
  For windows, you can use

```bash
npm run cypress:windows
```	

And for Mac  
```bash
npm run cypress
```