var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'this a users response!2';
});

module.exports = router;
