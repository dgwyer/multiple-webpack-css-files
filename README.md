# Multiple webpack CSS Files

Demo repo to illustrate how to extract CSS from different named SASS files and compile them down to specific CSS files.

For example, say you have a project with the following strucutre:

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
