# Triangles

Makes a lot of triangles.  You can configure them.

### Installation

#### TL;DR

Have Node.js and NPM installed (Node.js v6.x).  Enter this in your terminal to download and start the application:

`git clone https://github.com/sumtype/doodles.git && cd doodles && cd doodles && cd triangles && npm i && npm i -g forever gulp && npm start`

Go [here](http://localhost:5000) (http://localhost:5000) to access it.

Enter this when you're done using it:

`npm stop`

#### Instructions

Install Node.js and NPM if you haven't already.  It's best to install Node.js and NPM from source as a non-root user.  You can find out how online.  You can also follow the download and installation instructions [here](https://nodejs.org/en/), or if you think you may do more with Node.js and NPM the [Node Version Manager](https://github.com/creationix/nvm) (NVM) may be a better means to install them through, since it provides simplified flexibility with regards to the version of Node.js and NPM you want to use.  This application has been ad hoc tested using Node.js version "6.9.1".

With Node.js and NPM installed, clone this repository and enter the "doodles/triangles" directory.  Use this command to do that:

`git clone https://github.com/sumtype/doodles.git && cd doodles && cd doodles && cd triangles`

Next you'll need to install the packages necessary to build and run the application.  Enter this command to do so:

`npm i && npm i -g forever gulp`

Next you'll need to create a build of the application and start a local server to access it with your browser.  Enter this command to do that:

`npm start`

Now that the server is running, you'll be able to access the application if you navigate [here](http://localhost:5000) (http://localhost:5000) in your browser.  When you're done and want to close the application run this command:

`npm stop`

Make sure to run `npm stop` when you're done.  Otherwise the local server will keep running on your machine as a background process.

#### Notes

The server runs on port 5000 by default, so if you're already using that port you'll want to set it to use a new port before running `npm start`.  To do so open the "trianglesClientServer.js" file in the "doodles/triangles" directory, then edit the value of the `PORT` variable to be a port you know is open.  Save the file.  Then, run `npm start`.
