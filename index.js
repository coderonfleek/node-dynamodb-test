const AWS = require("aws-sdk");

/* AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
}); */

AWS.config.update({
    region: "us-east-2"
});

let docClient = new AWS.DynamoDB.DocumentClient();

let table = "Tasks";

let category = "Work";


let params = {
    TableName: table,
    Key:{
        "Category": category
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});