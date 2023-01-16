'use strict';

const express = require('express');
const router = express.Router();

const loginCheckMiddleware = require('../config/loginCheckMiddleware');
const authMiddleware = require('../config/authMiddleware');

// ??? (이보형) 이해하고 있는 내용이 맞는지 확인 필요 - loginCheckMiddleware, authMiddleware는 http 서버를 실행하는 코드가 아니고 그 자체로 함수이기 때문에 객체로 만들지 않아도 됨
// => +조성훈님+ 미들웨이니까 그 자체로 함수임
const UsersController = require('../controllers/users.controller'); // (이보형) UsersController 인터페이스 필요하고
const usersController = new UsersController(); // (이보형) 객체로 만들어줘야 함. 해당 코드가 없으면 하단의 usersController가 undefined가 됨

router.post('/register', loginCheckMiddleware, usersController.createUser);

router.post('/login', loginCheckMiddleware, usersController.login);

router.get('/logout', usersController.logout);

router.get('/order', authMiddleware, usersController.getOrderStatusZeroToThree);

router.get('/mypage', authMiddleware, usersController.getOrdersStatusEnd);

module.exports = router;
