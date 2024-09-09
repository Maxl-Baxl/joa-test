# Disclaimer: This is a private project, but the repo is public so that Vercel works with collaborators

Das Projekt ist in Typescript gecodet. Die Dateien sollen auf .tsx enden (wenn sie kein JSX enthalten, auf .ts)

## Der Code soll mit [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatiert sein, das hier sollte ins VS-Code config hinzugefügt werden:

"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
"[html]": {
"editor.defaultFormatter": "vscode.html-language-features"
},
"editor.tabSize": 2,
"prettier.semi": false,

## Das Projekt basiert auf Next.js und React.js, weitere Libraries sind (mit Links zur jeweiligen Dokumentation):

- [TailwindCSS](https://tailwindcss.com/docs/installation): Für inline CSS
- [ShadCN](https://ui.shadcn.com/docs): Component Library
- [Framer Motion](https://www.framer.com/motion/introduction/): Für Animationen
- [React Icons](https://react-icons.github.io/react-icons/): Für SVG-Icons

Starten (DEV): npm run dev
Fertige changes commiten, dann wird die Webseite https://michaeli-gymnasium.vercel.app automatisch geupdated
