# Webpack-demo

Learning about webpack. Webpack is a module bundler & its primary purpose is to bundle JavaScript, but it can also transform HTML, CSS & images. This webpack project was developed using the [Getting Started section](https://webpack.js.org/guides/getting-started/) of the Webpack website.

In Git Bash (or any terminal)..
1. Enter `git clone https://github.com/YusafOsei-Bonsu/webpack-demo.git`.
2. Enter `cd webpack-demo`.
3. Right-click `dist/index.html`, select `Copy Path`, paste in your browser URL address bar & press Enter.

## Branches
- **Asset-management** - Learnt how to load CSS, images & data (json, csv, xml, etc).
- **Output-management** - Learnt how to use `HTML Webpack Plugin` to automatically recreate an `index.html` with auto-created bundles & `Clean Webpack Plugin` to clean the `/dist` folder before each build.
- **Dev-guide** - Learnt about source maps to track errors in the original source code. Learnt the existence of numerous options (i.e. webpack's `watch mode`, `webpack-dev-server` & `webpack-dev-middleware`) that recompile code when a code change is detected.

## Tech Stack
- Webpack.js
- JavaScript
- HTML/CSS

## What Have I Learnt
- The *HTML Webpack* plugin recreates `dist/index.html` with auto-created bundles.

- The *Clean Webpack* Plugin cleans the `/dist` folder (before each build) by deleting redundant/old files. 

- By setting `cleanStaleWebpackAssets` to `false`, `index.html` will not be removed by the result of an incremental build (triggered by watch mode).

- Webpack's watch mode recompiles code after detecting a code change.

- Webpack's dev server is capable of live reloading. |

- `webpack-dev-middleware` is a wrapper that emits files processed by webpack to a server. This is used in `webpack-dev-server` internally, however it's available as a separate package to allow more custom setups if desired. 

## Future Learning
- Need to learn how to load fonts. 

## Blockers/Resolutions
| Blockers | Resolutions |
|----------|-------------|
| Couldn't run webpack dev server as port 3000 was already in use. | First, open CMD.exe, enter `netstat -ano | findstr :<PORT>` (`<PORT>` should be the port number that the server is running on). Next, enter `taskkill /PID <PID> /F`. [Click here for an example](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows) |