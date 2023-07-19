const router = require('express').Router();
const userRouter = require('./modules/users/index');
const plantRouter = require('./modules/plant/index');

router.use('/plant', plantRouter);
router.use('/users', userRouter);

router.get("*", (req, res) => {
    res.redirect("/");
});

module.exports = router;