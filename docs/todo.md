- setup mdx
- setup tailwind theme
- github actions
- turbo, vscode, docker
- turbo https://github.com/vercel/turbo/tree/main/examples
- configs https://github.com/kyr0/turbo-hybrid-astro-on-vercel
- astro prettier https://gist.github.com/JLarky/b26a165d628984723fe285201ca699e5
- eslint and typescript config from here https://github.com/vercel/turbo/tree/main/examples/with-yarn

main problem was this:

```ts

// this fails
extends: ['eslint-config/.eslintrc.js'],

this works
// This ensures that ESLint can find the config file regardless of the working directory.
extends: [require.resolve('eslint-config/.eslintrc.js')],
```

it's related from where eslint is called // to

in this repo eslint, prettier configs are global
https://github.com/kyr0/turbo-hybrid-astro-on-vercel
"lint": {},
package.json main, bin
root: true, // this is how it accepts relative path
where is relative path set?

in this they work per package
https://github.com/vercel/turbo/tree/main/examples/with-yarn
"lint": {
  "dependsOn": ["^lint"] // this is just order, or run all independently
},
eslintignore in root
package.json files

what is better?
if it calls only config file or package

decided:
prettier global, eslint per package,
-----
- only for prettier config https://gist.github.com/JLarky/b26a165d628984723fe285201ca699e5
- all other configs, eslint, typescript, tailwind from here https://github.com/vercel/turbo/tree/main/examples/with-yarn

so you can run lint format per package...
everything should be decoupled and modular, reusable, packages // this, important
you should see separate logs per package in console

------------
packages in /packages have prefix @repo/ for easier recognizing in dependencies

