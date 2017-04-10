# Image Gallery

Your task is to create simple Single Page Application with two screens: `home` and `gallery`.

1. App skeleton with navigation and main view
2. Home screen with contents
3. Gallery screen with search and filter options connected to
   JSON REST API: http://jsonplaceholder.typicode.com/photos
4. Feature options:
	Search by: photo title
	Sort by: photo ID, photo title
	Filter by: album, title (endpoint for album: http://jsonplaceholder.typicode.com/albums)

Please follow design and assets (from `design` path). Application should work on mobile devices (RWD):

* Navigation sidebar should collapse and open with logo icon
* Main view should layout in column mode

## Solution

* Styles in SASS preprocessor (BEM-like)
* Scripts in ES2015+
* `angular` (1.5.x) - application starts with `src/index.js` script. Example `app` component
  (`/src/components/app`) shows how webpack loaders can be utilized.

## Getting started

Repository setup:

* `node` 6.x
* `webpack` (with `webpack-dev-server` for development)
* `html`, `url`, `file`, `babel` (es2015), `sass` webpack loaders
* `eslint` with `airbnb-base` preset

### Development

```bash
npm run develop
```

If you want to see compiled version:

```
npm run build && npm start
```
