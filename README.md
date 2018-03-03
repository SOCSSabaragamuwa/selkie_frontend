## Prerequisires
- node latest stable version 
- angular cli latest  stable vesion 
- npm latest stable version


## Table of content 

*Installation(#installation)
*Updating(#Updating your angular version)
*Usage(#Usage selkie_frontend)


## Instalation
- Install node js 
- Install npm

Install angular globaly  using npm
```
npm install -g @angular-cli 
```
## Updating your angular version
```shell
   npm uninstall -g @angular-cli
   npm cache clean
   npm install -g @angular-cli 
```


## Usage selkie_frontend



## Clone this repo.
```shell
git clone https://github.com/WThamira/selkie_frontend  
cd selkie_frontend
```

## Install the npm packages
```shell
npm install
```
##  configure your web API
 Edit your web api base url to the Proxy.conf.jsons file
 web api base url is http://localhost:8090/api in the following

 ```shell
{
  "/": {
    "target": "http://localhost:8090/api",
    "secure": false
  }
}
```
## Oath 2 configuration
If You want to configure oath 2 for your specifcations move into the

```shell
selkie_frontend/src/app/login/login.component.ts
```
observe

```shell

 login : Login={
    username:"",
    password:"",
    grant_type:"password",
    client_id:"2",
    client_secret:"ZACAZyPfwyGdhtvhr6ARaZFzWn0uPaDXi7RSCBIb",
  }

```
change the client_id and client_secret for your specifications
## Run this project
```shell
npm start
```
For updating versions
The module n makes version-management easy:

sudo npm install n -g 
sudo n 0.12.2

For the latest stable version:

sudo n stable
For the latest version:

sudo n latest

you can view the application through this link

https://WThamira.github.io/selkie_frontend/



