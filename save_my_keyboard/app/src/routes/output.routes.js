'use strict';

const express = require('express');
const router = express.Router();

const authMiddleware = require('../config/authMiddleware');

const UsersOutputController = require('../controllers/users_output.controller');
const usersOutputController = new UsersOutputController();
const OrdersOutputController = require('../controllers/orders_output.controller');
const ordersOutputController = new OrdersOutputController();

// +++ (이보형) RESTFUL API에 대해 고민 필요하겠음(동사로 작성한 URL) https://pronist.dev/146
router.get('/register', authMiddleware, usersOutputController.register);
router.get('/login', authMiddleware, usersOutputController.login);
router.get('/mypage_user', authMiddleware, usersOutputController.mypage_user);
router.get('/admin', authMiddleware, usersOutputController.admin);

router.get('/orders/request', authMiddleware, ordersOutputController.request);
// 사장님 윤활 신청 목록 페이지
router.get('/orders/lists', authMiddleware, ordersOutputController.getlists);

router.get('/', authMiddleware, (req, res) => {
  if (res.locals.userInfo) {
    const userInfo = res.locals.userInfo;
    // console.log("(이보형 확인용) res.locals.userInfo?", res.locals.userInfo)
    res.render('index', { userInfo });
  } else {
    res.render('index');
  }
});
// ??? (이보형) /*는 무슨 의미지? 찾아도 안나옴
// => +조성훈님+ 잘못된 URL에 대한 리다이렉트
router.get('/*', (req, res) => res.redirect('/')); 

module.exports = router;
