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
const docClient = new AWS.DynamoDB.DocumentClient({region: process.env.REGION});
const { v4: uuidv4 } = require('uuid'); // npm i --save uuid ※functionフォルダで実行
const moment = require('moment'); // npm i --save moment

exports.handler = async (event) => {

  // UUID生成
  const newid = uuidv4();

  // 書き込み
  const put_params = {
    TableName: 'Ship-clanptii6fenhenfxsgaaad2im-dev', // 予測不能ならクライアントからの引数でもいい
    Item: {
      '__typename': 'Ship',
      'id': newid, // idは必須?
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
    console.log(e)
  }

  // 読み込みの結果処理用のコールバック
  var resItemValue = 'none';
  const callback = (err, res) => {
    if (!err) {
      resItemValue = res.Item.name;
    } else {
      resItemValue = 'error';
    }
  };

  // 書き込んだものを読み込み
  const get_params = {
    TableName: 'Ship-clanptii6fenhenfxsgaaad2im-dev', // 予測不能ならクライアントからの引数でもいい
    Key: {
      'id': newid,
    }
  }

  // 結果を待つ
  try {
    await docClient.get(get_params, callback).promise()
  } catch (e) {
    console.log(e)
  }

  // クライアントに返す
  return {
    status: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body : JSON.stringify({
      test: process.env.MY_TEST_KEY,
      resItemValue: resItemValue,
      // AWStimestamp: moment().unix()
    })
  };

};
