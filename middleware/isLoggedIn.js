const isLoggedIn = (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/')
        return;
     }
     next();
};

module.exports = isLoggedIn