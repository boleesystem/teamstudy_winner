'use strict';

const app = require('../app.js');
const SocketManager = require('../src/config/SocketManager');
// ??? (이보형) 소켓관리 관련 연결을 app.js가 아닌 server.js에 넣은 이유? 소켓도 서버 기능이라 그런가? 
// => +조성훈님+ 서버실행 파일이라
const socketManager = new SocketManager(app); 

// ??? (이보형) .env와 3000를 굳이 같이 써놓은 이유? 
// => +조성훈님+ .env 파일 없는 경우 대비 / 포트번호 .env에 넣는 목적은 편의 => 그래서 코드에 포트번호 넣어도 문제 없겠음
const PORT = process.env.PORT || 3000; // ??? (이보형) .env와 3000를 굳이 같이 써놓은 이유? +조성훈님+ .env 파일 없는 경우 대비 / 포트번호 .env에 넣는 목적은 편의 => 그래서 코드에 포트번호 넣어도 문제 없겠음

socketManager.server.listen(PORT, () => {
  console.log(`server on :: ${PORT}`);
});

// ??? (이보형) 별도의 bin 폴더로 server.js 파일(목적 : 서버켜기 + 소켓관리 라우터연결)을 분리한 이유? 
// => (이보형) *리눅스 디렉토리 : /bin 바이너리 - 이진파일(실행파일), 기본적인 명령어가 저장된 디렉토리, 리눅스에서 자주 사용하는 mv, cp, rm등과 같은 명령어들이 이 디렉토리에 존재함)