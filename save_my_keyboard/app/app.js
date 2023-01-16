'use strict';

// ??? (이보형) 코드 나열 기준이 있는지? 내부 외부 모듈로 나누고 abc 기준으로 하시는 분도 있다는 얘기를 들은 적 있음
// => +조성훈님+ 미들웨어는 순서대로

// ??? (이보형) MySQL 연결 상태 확인 코드는 어디있는지?
// => (이보형) MySQL 연결 상태 확인 코드
// => +조성훈님+ 해당 코드 추가 필요
// models.sequelize
//   .sync()
//   .then(() => {
//     console.log(' DB 연결 성공');
//   })
//   .catch((err) => {
//     console.log('연결 실패');
//     console.log(err);
//   });

// app.listen(env.PORT, () => {
//   console.log(env.PORT, '번 포트가 실행되었습니다.');
// });

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
// !!! (이보형) 까먹음 - .urlencoded()은 x-www-form-urlencoded형태의 데이터(form으로 제출되는 값)를 / .json()은 JSON형태의 데이터를 해석
// !!! (이보형) 추가설명 - extended: false로 옵션을 주면 NodeJs에 기본으로 내장된 querystring모듈을 사용 / extended: true를 하면 추가로 설치가 필요한 qs모듈을 사용합

app.set('views', './src/views'); // views, 템플리트가 있는 디렉토리. 예: app.set('views', './views') https://expressjs.com/ko/guide/using-template-engines.html
app.set('view engine', 'ejs'); // view engine, 사용할 템플리트 엔진. 예: app.set('view engine', 'pug')

// 정적(static) 파일 서비스 하기 ( If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:)
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(`${__dirname}/src/public`)); // ??? (이보형) app.js라는 같은 파일에 1) express app을 run하고 2) 정적파일 서비스하는 코드가 있는데 굳이 ${__dirname}을 작성한 이유는?
                                                    // app.use(express.static('/src/public'));
                                                    // => +조성훈님+ 서버 실행용의 server.js 파일 분리했기 때문 + 다른 코드에서 달라졌을 때를 대비
                                                    // ??? (이보형) app.use(express.static('./src/public'));으로 ./src/public 마침표 필요한가 아닌가? 헷갈림!

const router = require('./src/routes');
app.use('/', router);

module.exports = app;
