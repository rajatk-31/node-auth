var user = require('../models/user')

exports.signup = async(req, res, next) => {
    const { email, password } = req.value.body;
    const foundUser = await user.findOne({ email: email })
    if (foundUser) {
        res.json({
            msg: "User already exists"
        })
    }
    const newUser = new user({
        email,
        password
    })
    await newUser.save();
    res.json({
        msg: "User created"
    })
}
exports.signin = async(req, res, next) => {

}
exports.secret = async(req, res, next) => {

}