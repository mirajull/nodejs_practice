var AWS = require("aws-sdk");

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
console.log(credentials);
AWS.config.credentials = credentials;

AWS.config.update({region: 'us-west-2'});
AWS.config.update({output: 'JSON'});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2015-07-09'});

//var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : 'ACIRiceLocationData',
    Item:{
      'Id': 4,
      'Latitude': 1.234,
      'Longitude': 2.345,
      'EntryDate': '1234',
      'ServerTime': '1234',
      'UserId': 22276
    }
};

docClient.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
