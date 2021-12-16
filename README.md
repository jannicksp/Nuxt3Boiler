![Node version](https://img.shields.io/badge/Node%20version-14.5.0-026E00)

# Nuxt3 Boilerplate 🚀

## Stack
- Vue 3
- TypeScript
- Nux3
- PostCSS

## Initial setup instructions

- Minimum Node version: 14.5.0
- Start Bash
- Install packages: `npm i`
- Start development server: `npm run dev`


## Build Setup

### Commands
```bash
# Install dependencies
$ npm run i

# FOR DEVELOPMENT: serve with hot reload at localhost:3000
$ npm run dev

# FOR PRODUCTION: build and launch server
$ npm run build
$ npm run preview
$ npm run preview-https
```

**Other commands**

```bash
# Linters
$ npm run eslint // Run ESLint
$ npm run eslint:fix // Run ESLint and fix fixable issues

$ npm run stylelint // Run Stylelint
$ npm run stylelint:fix // Run Stylelint and fix fixable issues

$ npm run lint // Run all linters
$ npm run lint:fix // Run all linters fix fixable issues
```

## Injecting the app to a page
In order to inject the vue app to a basic HTML page you can have a look at the HTML page in the `test` folder. The minimal setup is the following.

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="[PATH-TO-UMD-SCRIPT]"></script>
</head>
<body>
  <div id="[VUE-MOUNT-ID]"></div>
</body>
</html>
```

## Features
### SVG Sprites
The project uses SVG sprites for inserting icons. In order to add a new icon simply add it to `assets/icons`. The icon is now included in the sprite and can be used with the icon component. In order to render the icon with the icon component, simply do the following.

```html
<NcIcon alias="my-icon-file-name-without-extension" />
``` 
### Auto import of components
The project includes auto importing of components which means that you can use them without having to import them in every component. The project is defaulted to look for compoennts in the atomic folders (atoms, molecules, organisms). To register a new folder you can add it to this section in `vite.config.ts`

```javascript
Components({
  dirs: [
    'components/atoms',
    'components/molecules',
    'components/organisms',
    'components/my-new-folder'
  ]
}),
```
### Plugins
Plugins is a standard Vue 3 feature. We auto import all files in the plugins folder with a `.ts` extension, which means that in order add a new plugin, simply create a TypeScript file like this.

```javascript
export const install: MyPlugin = ({ app }) => {
 // Plugin code goes here
}
```
Read more about plugins here: https://v3.vuejs.org/guide/plugins.html 

