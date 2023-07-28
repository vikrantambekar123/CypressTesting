# Cypress Installation 
1) Install Nodejs
2) Do npm init
3) npm install cypress --save-dev


# Folder Structure and usage
1) Fixture :- This Folder is use for data driven testing from here we can get data into our tests
2) e2e :-  This Folder contains all the tests which contains all our testcases
3) Support :- This Folder contains the supporting additional created functions which can be resuse in our tests


# Open Cypress using below Command
1) npx cypress open


# Run tests using below Commands
1) npx cypress run   -- Runs all tests
2) npx cypress run --spec "Path of spec file which need to be run"
3) npx cypress run --headed --browser="chrome"


# Open Cypress Dashboard for record and Playback
1) npx cypress run --record --key "key"