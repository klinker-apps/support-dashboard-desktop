![header](/artwork/header.png)

# Klinker Apps Dashboard

These are the sites that I watch throughout the day.

To build and run the apps locally:

```
// download electron
npm i -g electron

// prepare the installation
$ yarn install

// run the app
$ electron .
OR
$ npm start
```

To package the apps for each platform:

```
$ yarn install
$ sudo ./node_modules/.bin/electron-builder build --mac dmg
$ sudo ./node_modules/.bin/electron-builder build --linux deb
$ sudo ./node_modules/.bin/electron-builder build --windows nsis
```
