# JogaBonito

## Author

Juan Diego Ocampo García

## Prerequisites

### nodejs

A JavaScript runtime environment. There are a lot of ways to install it, here I put the way I used on Centos 7:
..* sudo yum install epel-release.
..* sudo yum install nodejs.
..* node --version (To check that the installation was succesful).

### npm

It is the package manager for javaScript. To install it on centos 7 you just need to type:
..* sudo yum install npmtodos los modulos estan ubicados.


## Download and installation

It is necesary to open a shell and type "git clone https://github.com/jocamp18/JogaBonito.git" (In this case you should install git) or just downloading it from the github https://github.com/jocamp18/JogaBonito.

All the modules are located in node_modules folder, so there is nothing else to install.

## Execution

To execute the server you have to go to JogaBonito folder (cd JogaBonito) and type:

..* node server.js

After this you can type in the web browser localhost:8080 and you will the app working.

## Application Structure

.
├── config

│   ├── db.js

├── models

│ 	├── match.js

│   ├── user.js

├── node_modules

├── public

│   ├── css

│   │   ├── style.css

│   ├── js

│   │   ├── controllers

│   │   │   ├── LoginCtrl.js

│   │   │   ├── MainCtrl.js

│   │   │   ├── MatchCtrl.js

│   │   │   ├── MyMatchesCtrl.js

│   │   │   ├── RegisterCtrl.js

│   │   ├── app.js

│   │   ├── appRoutes.js

│   ├── libs

│   ├── views

│   │   ├── home.html

│   │   ├── login.html

│   │   ├── matches.html

│   │   ├── myMatches.html

│   │   ├── register.html

│   ├── index.html

├── routes

│   ├── Match.js

│   ├── User.js

├── README.md

├── bower.json

├── package.json

├── server.js 









