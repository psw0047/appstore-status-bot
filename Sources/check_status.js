const slack = require("./slack_test.js")
const exec = require("child_process").exec; 
const dirty = require('dirty');
const db = dirty('store.db');

const env = Object.create(process.env);

exec('ruby Sources/fetch_app_status.rb', {env : env}, function (err, stdout, stderr) {
    if (stdout) {
        var apps = JSON.parse(stdout);
        for(let app of apps) {
            checkVersion(app);
        }
    }
    else {
        console.log("There was a problem fetching the status of the app!");
        console.log(stderr);
    }
});


function checkVersion(app) {

    var appInfoKey = "appInfo-" + app.appID; 
    var submissionStartKey = "submissionStart" + app.appID; 

    console.log("Post to Slack");
    slack.post()
    db.set(appInfoKey, app);
}
