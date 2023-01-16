require('dotenv').config({ path: '../../.env' }); // CommonJS에서 환경 변수 불러오기 (require)
                                                  // 만약에 .env가 아닌 다른 경로에 있는 파일에 환경 변수를 저장해놨다면 config() 함수를 호출 시 path 옵션을 넘기면 된다.
                                                  // ??? (이보형) 최상위폴더 .env 파일에 환경 변수 저장해놔서 { path: '../../.env' } 옵션을 넘긴 거구나?!

const development = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};
const test = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};
const production = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = { development, test, production };
