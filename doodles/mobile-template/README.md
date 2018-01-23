#Mobile Template

Template for making mobile doodles.

###Installation

####TL;DR

Have Node.js and NPM installed (Node.js v6.x).  Enter this in your terminal to download and start the application:

`git clone https://github.com/sumtype/doodles.git && cd doodles && cd doodles && cd mobile-template && npm i && npm i -g forever gulp phonegap && npm start`

Go [here](http://localhost:5000) (http://localhost:5000) to access it in your browser for development.

Enter this to shut down the local development server:

`npm stop`

Have the toolchains for the application build(s) you want to make installed (SDKs, et cetera).  See Mobile Builds subsections (below) for commands to make builds.  Only Android at the moment.

####Instructions

Install Node.js and NPM if you haven't already.  It's best to install Node.js and NPM from source as a non-root user.  You can find out how online.  You can also follow the download and installation instructions [here](https://nodejs.org/en/), or if you think you may do more with Node.js and NPM the [Node Version Manager](https://github.com/creationix/nvm) (NVM) may be a better means to install them through, since it provides simplified flexibility with regards to the version of Node.js and NPM you want to use.  This application has been ad hoc tested using Node.js version "6.9.1".

With Node.js and NPM installed, clone this repository and enter the "doodles/triangles" directory.  Use this command to do that:

`git clone https://github.com/sumtype/doodles.git && cd doodles && cd doodles && cd triangles`

Next you'll need to install the packages necessary to build and run the application.  Enter this command to do so:

`npm i && npm i -g forever gulp phonegap`

Next you'll need to create a build of the application and start a local server to access it with your browser.  Enter this command to do that:

`npm start`

Now that the server is running, you'll be able to access the application if you navigate [here](http://localhost:5000) (http://localhost:5000) in your browser.  To update the build you see there run:

`gulp`

This will create a new development build.  When you're done and want to close the application servers run this command:

`npm stop`

Make sure to run `npm stop` when you're done.  Otherwise the local client server will keep running on your machine.

###Mobile Builds

This template uses [PhoneGap](http://phonegap.com) to create mobile application builds.  To make use of PhoneGap, go to their site and read about how to install whichever toolchains are necessary for the applications you'd like to build.  For example, to build an Android application (locally) you'll need to have JDK and the Android SDK installed on you machine and available via the command line (with the correct SDK packages installed).  It may take some time to download the toolchain packages and get your system set up, but once it is your application building process will be very smooth.  Anyway, once you have your toolchain(s) in place read on.

####Android Build `. sh/android-build.sh [keyfile]`

Builds a .apk file using a production build of your application.  Creates a debug .apk file by default.  If a keyfile is specified, a release build is created using that keyfile (inside your "keys" directory).  The newly created build can be found in your "deployments" folder, it will be called either "app_production.apk" or "app_debug.apk" depending on the type of build you made.

Example release build command:

`. sh/android-build.sh release.jks`

where "release.jks" is the keyfile in the "keys" directory used to sign the .apk file.  You can read about creating keyfiles for this purpose [here](http://docs.phonegap.com/phonegap-build/signing/android/).

###Notes

The server runs on port 5000 by default, so if you're already using that port you'll want to set it to use a new port before running `npm start`.  To do so open the "mobileTemplateClientServer.js" file in the "doodles/mobile-template" directory, then edit the value of the `PORT` variable to be a port you know is open.  Save the file.  Then, run `npm start`.
