# Multiple webpack CSS Files

Demo repo to illustrate how to extract CSS from different named SASS files and compile them down to specific CSS files.

For example, say you have a project with the following structure and `./blocks/index.js` as the main entry point:

```bash
├── assets
│   ├── css
│   │   ├── editor.blocks.css
│   │   ├── style.blocks.css
│   ├── js
│   │   ├── editor.blocks.js
├── blocks
│   ├── block1
│   │   ├── editor.scss
│   │   ├── style.scss
│   │   ├── index.js
│   ├── block2
│   │   ├── editor.scss
│   │   ├── style.scss
│   │   ├── index.js
│   ├── block3
│   │   ├── editor.scss
│   │   ├── style.scss
│   │   ├── index.js
│   ├── index.js
```

When webpack runs it should:

* Concatenate and compile all `style.scss` files to `./assets/css/style.blocks.css`.
* Concatenate and compile all `editor.scss` files to `./assets/css/editor.blocks.css`.

At the moment, it kind of works but instead of concatenating and compiling all `style.scss` and `editor.scss` files it seems to grab the SASS from the last block folder only. This indicates that `style.blocks.css` and `editor.blocks.css` are continuously being overwritten which is incorrect.

# To Run the webpack Script

* Clone the repo.
* `npm init`
* `npm run build`
