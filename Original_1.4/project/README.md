# City Guide Ionic
This application categorizes businesses into their business/industry domain and provides a listing. Presents information about each business promoting their activity and includes various search filters enabling the easier finding of the business which the user is interested in.

## Dependecies, Run and Build

### Install NodeJS dependencies

Run `npm install` to install all needed dependencies.

### Install Plugins and Javascript dependencies
#### Linux/MacOX
Run `./install.sh` to install all needed plugins and dependencies

#### Windows Users
Similarly, Windows users should run `install.bat`.

### Run the app
Use `grunt serve -l` to run the app in browser and watch for changes in code

or

use `grunt serve` to just run the app for a browser preview

or

use `grunt serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform

```bash
$ grunt platform:add:<platform>
```

Supported Cordova platforms:

```bash
$ grunt platform:add:ios
$ grunt platform:add:android
```

### Build the app

```bash
$ grunt build
```

### Εmulate the app on simulator
iOS:

```bash
$ grunt emulate:ios
```

Android:

```bash
$ grunt emulate:android
```

For more information, see [Ionic Framework Generator's instructions](https://github.com/diegonetto/generator-ionic).

### Plugins installation

Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:

```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

cordova plugin add cordova-plugin-device && cordova plugin add cordova-plugin-console && cordova plugin add cordova-plugin-whitelist && cordova plugin add cordova-plugin-transport-security && cordova plugin add cordova-plugin-network-information && cordova plugin add cordova-plugin-inappbrowser && cordova plugin add cordova-plugin-geolocation && cordova plugin add ionic-plugin-keyboard && cordova plugin add https://github.com/phonegap/phonegap-plugin-push && cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git && cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `db8af23d`

## Documentation
* [City Guide Ionic Quick Start Guide](https://docs.google.com/document/d/1QE1DzP7lmLVXYmCcWYS3MZxMfzXePmwKfWgAvF-OtQ4/edit?usp=sharing)

## Changelog
```
1.4 - March 7, 2017
- Fix marker and destination in map app on Android

1.3 - February 22, 2017
- Fetch business name, address, images and description from JSON data/Firebase on "Contacts us" screen

1.2 - October 6, 2016
- Released sample firebase data fixed

1.1 - August 26, 2016
- Category images are fetched from local/remote sources or Firebase.

1.0 - August 12, 2016
- Initial Release
```

## Credits

* [Yeoman](http://yeoman.io/)
* [Yeoman's Ionic Framework generator](https://github.com/diegonetto/generator-ionic)

## Third Party Licences
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
