'use strict';

// !!! (이보형) res.render("템플릿명", {템플릿변수})

class UsersOutputController {
  register = (req, res) => {
    res.render('index', {
      components: 'register',
      // ??? (이보형) 옵셔널 체이닝 설명 필요 - ? 조건부 연산자 / ?? null 병합 연산자 / ?. 옵셔널 체이닝
      userInfo: res.locals.userInfo ? res.locals.userInfo : null,
    });
  };

  login = (req, res) => {
    res.render('index', {
      components: 'login',
      userInfo: res.locals.userInfo ? res.locals.userInfo : null,
    });
  };

  mypage_user = (req, res) => {
    res.render('index', {
      components: 'mypage_user',
      userInfo: res.locals.userInfo ? res.locals.userInfo : null,
    });
  };

  admin = (req, res) => {
    res.render('index', {
      components: 'admin',
      userInfo: res.locals.userInfo ? res.locals.userInfo : null,
    });
  };
}

module.exports = UsersOutputController;
