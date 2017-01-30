REQUIREMENTS:
<br>1. Node js should be installed.
<br>2. grunt command line interface should be installed globally. From the comman line "npm install -g grunt-cli"

1.You would need to run npm install from the root to install the required dependency for the application. All the required dependencies are in package,json.
<br>2. To run the application simply run grunt from the command prompt. The application should be accessed in localhost:4200

KNOWN ISSUES:
1. The REST API end points from the specification does not work so I could not use $http services so made a custom angular service to push the msg into an array and display the information,
<br>2. URLs are not directly accessable unless the application is started from its landing zone.
