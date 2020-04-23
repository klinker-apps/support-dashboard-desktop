![header](/artwork/header.png)

# Klinker Apps Support Dashboard

These are the sites and services that I watch throughout the day. If you are a solo developer, you know the struggle of trying to keep up with support. For me, this tool has been indispensable as my work as continued to gain traction. To have an app I can open, that will instantly give access to all of the info I need has been an incredible timesaver. It displays:

* **Email** - an obvious support tool for anyone
* **Slack** - I have created different bots to notify me of reviews, purchases, daily summaries, GitHub interactions, etc
* **Pulse** - 3 pages: reviews, Firebase analytics, and the admin dashboard for the web app
* **Talon** - 2 pages: reviews and Firebase analytics
* **Purchases** - 2 pages: Play Store orders and Google Pay
* **GitHub Notifications**
* **Twitter** - a search for "@KlinkerApps @lukeklinker @TalonAndroid"
* **Google+ Notifications**
* **Cloud Consoles** - 3 pages: Heroku, AWS, and Redis
* **Jenkins**

At it's core, this app just aggregates webpages and makes them easier to access and combine. For example, while the email tab show a fullscreen Gmail view, the Pulse tab opens 3 webpages at once, to display them in a grid.

## Running the App

To build and run the apps locally:

```
// download electron
npm i -g electron

// prepare the installation
$ yarn

// run the app
$ yarn start
```

To package the apps for each platform:

```
$ yarn
$ yarn run build-mac
$ yarn run build-linux
$ yarn run build-windows
```

### Notes on Building for Mac

With MacOS Catalina (`10.14.5`), Apple requires DMG files to be notarized by the distributer. The files that I distribute are all signed and notarized by me.

If you are looking to develop the app yourself, you can debug and run the app through `yarn start` without issue. However, if you want to make a signed executable (`yarn build-mac`), you will need to set up your Apple ID and password for the notarization process.

To do this, you will first need a valid Apple developer account. You can sign up at https://developer.apple.com. You will need to use Xcode to [export your new developer signing information](https://help.apple.com/xcode/mac/current/#/dev154b28f09) and add it to your keychain.

You will then need to generate an app-specific password for that Apple ID. This is not the same as the password that you use to sign in to your developer account. You can create this app-specific password, here: https://appleid.apple.com

After completing those two steps, create a `.env` file in the root of this project. It should look something like:

```
APPLEID=test@someemail.com
APPLEIDPASS=xxxx-tttt-vvvv-aaaa
```

## Customizing the App

The pages I have set up probably won't be the same as what you need, since they are specific to my needs. These pages are easy to customize. They just run off of a naming convention. For example, to add a "Play Store" page:

1. Add an icon called `play-store.png` to the `/resources/images/` folder.
2. Add the HTML layout to a `play-store.html` file in the `/pages/` folder. I recommend just copying a layout from one of the currently available options. Or, you could make your own. The layout would typically define the `webviews`.
3. Add `play-store` to the `navLinks` array, in the `loader.js` file. It will automatically be added to whatever position you have defined.

The naming will need to be consistent across these three locations.

## Chrome App Version

This is also a compatible Chrome app. To load it through Chrome, rather than Electron, open `chrome://extensions`, select `Load Unpacked`, then just navigate to this project folder. Chrome will load it based on the `manifest.json` file. 

This is actually the way I do it most of the time, to avoid having to maintain Electron. With Chrome, you get all of the new Chrome optimization automatically, when Chrome updates.

## License

    Copyright 2018 Luke Klinker

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
