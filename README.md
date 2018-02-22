## Clone the new project named selkie-frontend.

##Clone this repo.
```shell
git clone https://github.com/WThamira/selkie_frontend  
cd selkie_frontend
```

##Install the npm packages
```shell
npm install
```
##  configure your web API
 Edit your web api base url to the Proxy.conf.jsons file
 web api base url is http://139.59.70.75:8090/api in the following

 ```shell
{
  "/": {
    "target": "http://139.59.70.75:8090/api",
    "secure": false
  }
}
```

##Run this project
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



