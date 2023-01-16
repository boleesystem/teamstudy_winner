// !!! (이보형) 해당코드 미완이라 코드 분석 보류
// ??? (이보형) 프론트 부분에 넣는 웹소켓 url 코드는 어디있지? const socket = new WebSocket(`ws://${window.location.host}`);

const http = require('http');
const WebSocket = require('ws');

class SocketManager {
  constructor(app) {
    this.server = http.createServer(app);
    this.wss = new WebSocket.Server({ server: this.server });
    this.load();
  }
  static sockets = [];

  load = () => {
    this.wss.on('connection', (socket) => {
      SocketManager.sockets.push(socket);

      // console.log('Connected to Client ✅');
      // socket.on('close', () => {
      //   console.log('Disconnected to Client ❌');
      // });
    });
  };

  static alertNewOrder = () => {
      SocketManager.sockets.forEach((aSocket) => {
        const data = {
          type: 'newOrder',
          payload: true,
        };
        aSocket.send(JSON.stringify(data));
      });
  };
}

module.exports = SocketManager;
