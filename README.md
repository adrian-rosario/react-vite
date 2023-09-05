# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## install / run

- `npm install`
- `npm run dev`
- `npm run test`

## Utilized:

- default image displays until a dog button is clicked
- "Sorry" image displays if the dog list API request fails
- using `onError` to display a "Sorry" image if the dog image results in a 404, as in the case of Cavapoo
- mocking fetch request response for unit test
- `vite.config.js` to use newly created `vitest.setup.ts`
- adding the following libraries `vitest jsdom @testing-library/react @testing-library/jest-dom`
- Vitest for unit tests, `"test": "vitest"` included in `package.json` scripts
- `react-router-dom` and added `RouterProvider` for page routes
- CSS for displaying buttons in a four grid template columns and added `y` scrolling, added box shadowing, and used `min-width` to account for various image sizes
- Eric Meyer [reset CSS](https://meyerweb.com/eric/tools/css/reset/) so styles display from a neutral point
- svg for the browser icon
- adding fetched data to `useState()`
- Fetch requests to [Dog API](https://dog.ceo/dog-api/) for dogs list and random image
- generating React project using [Vite](https://vitejs.dev/guide/), kept some of the scaffolding styles

## boilerplate

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
