var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});
router.get('/api/userdata', function *() {
  this.body=JSON.stringify([{id:1,msg:"AAA"},{id:2,msg:"BBB"}])
});
module.exports = router;
