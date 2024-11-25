# EditionCrafter React Project Template

This repository provides a simple example of using EditionCrafter in a React app. It can also be run using GitHub Code Spaces to try out EditionCrafter or preview an edition in progress.

## How it Works

This repository includes the EditionCrafter command line tool and an HTTP server to preview your project in the EditionCrafter frontend component.

1. Run `editioncrafter` in the command line to generate your project files. Run `editioncrafter help` for more details of how to use that program.
2. Put the project files in the `data` folder, alongside `data/config.json`.
3. Open `config.json` and update the parameters for your project.
4. Run `npm start` in the command line to launch a web server. A popup will appear on the bottom right of your screen with an "Open in Browser" button. Click that to get a live view of your project in a new tab.

## Upgrading EditionCrafter

This repository currently contains EditionCrafter **1.1.0**. If a newer version exists, you can upgrade by running the following command:

```
npm install @cu-mkp/editioncrafter@latest
```
