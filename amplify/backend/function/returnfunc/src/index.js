/* Amplify Params - DO NOT EDIT
  API_TRANFUNC_CREWTABLE_ARN
  API_TRANFUNC_CREWTABLE_NAME
  API_TRANFUNC_GRAPHQLAPIENDPOINTOUTPUT
  API_TRANFUNC_GRAPHQLAPIIDOUTPUT
  API_TRANFUNC_GRAPHQLAPIKEYOUTPUT
  API_TRANFUNC_SHIPTABLE_ARN
  API_TRANFUNC_SHIPTABLE_NAME
  ENV
  REGION
Amplify Params - DO NOT EDIT */

'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });
const { v4: uuidv4 } = require('uuid'); // npm i --save uuid ※functionフォルダで実行
const moment = require('moment'); // npm i --save moment

exports.handler = async (event) => {

  // 書き込み
  const put_params = {
    TableName: 'Ship-clanptii6fenhenfxsgaaad2im-dev', // 予測不能ならクライアントからの引数でもいい
    Item: {
      '__typename': 'Ship',
      'id': uuidv4(), // idは必須?
      'title': 'randam-' + Math.random(1),
      'capacity': 3,
      'registered': 0,
      'updatedAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
    }
  }
  // 結果を待つ
  try {
    await docClient.put(put_params).promise()
  } catch (e) {
    console.log(e.message)
  }

  const argv = event.arguments;
  console.log(argv);

  // UUID生成
  const newid = uuidv4();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
  var params = {
    TransactItems: [
      {
        Put: {
          TableName: 'Crew-clanptii6fenhenfxsgaaad2im-dev', // process.env.API_TRANFUNC_SHIPTABLE_NAME, //
          Item: {
            '__typename': 'Crew',
            id: newid,
            shipId: argv.shipId,
            userName: argv.userName,
            'updatedAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
          }
        }
      }
    ]
  };

  console.log(params);

  try {

    await docClient.transactWrite(params, function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    }).promise();

  } catch (e) {
    console.log('=====# err #=====');
    console.log(e);
    console.log('=====# // #=====');
  }

  // TODO implement
  const response = {
    status: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      message: 'returnfunc from Lambda!',
      argv: {
        expectRegValue: argv.expectRegValue,
        userName: argv.userName,
        shipId: argv.shipId,
        uuid: newid,
        xxx: 123
      }
    }),
  };

  return response;
};
