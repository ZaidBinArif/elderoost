var express = require('express');
var router = express.Router();

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const passGenerator = require('generate-password');

const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 12;

// EMAIL
const sgMail = require('@sendgrid/mail');
const sgAPI = `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`;
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(sgAPI);

router.get('/signin', csrfProtection, (req, res, next) => {
  res.render('users/sign-in', {
    title: `Login - Elderoost`,
    csrfToken: req.csrfToken()
  });
});

router.post('/signin', csrfProtection, async (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await User.findOne({ where: { email: `${email}` } });

    if (user) {
      const compared = await bcrypt.compare(password, user.password);

      if (compared) {
        const _user = {
          username: user.username,
          email: user.email,
          is_admin: user.is_admin
        };
        req.session.user = _user;
        // delete req.session.user.password;
        res.redirect('/users/profile');
      } else {
        // res.send({
        //   message: `Password does not match`
        // });
        res.redirect('/users/signin');
      }
    } else {
      // res.send({ message: `Email is not in the database` });
      res.redirect('/users/signin');
    }
  } else {
    // res.send({ message: `Missing email or password` });
    res.redirect('/users/signin');
  }
});

router.get('/signup', csrfProtection, (req, res, next) => {
  res.render('users/sign-up', {
    title: `Create an account on Elderoost`,
    csrfToken: req.csrfToken()
  });
});

router.post('/signup', csrfProtection, async (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    const user = await User.findOne({ where: { email: `${email}` } });

    if (!user) {
      // create new user
      const hash = await bcrypt.hash(password, saltRounds);

      const user = await User.create({
        username: username,
        email: email,
        password: hash
      });

      if (user) {
        const _user = {
          username: user.username,
          email: user.email,
          is_admin: user.is_admin
        };
        req.session.user = _user;
        // delete req.session.user.password;
        res.redirect('/users/profile');
      } else {
        // res.send({ message: `creation failure` });
        res.redirect('/users/signup');
      }
    } else {
      // res.send({
      //   message: `This email already exists; Try logging in or reset your password.`
      // });
      res.redirect('/users/signup');
    }
  } else {
    // res.send({ message: `Please fill out username, email, and password` });
    res.redirect('/users/signup');
  }
});

router.get('/logout', (req, res, next) => {
  req.session.reset();
  res.redirect('/users/signin');
});

router.get('/forgot', csrfProtection, (req, res, next) => {
  res.render('users/forgot', {
    title: `Reset password - Elderoost`,
    csrfToken: req.csrfToken()
  });
});

router.get('/forgot/t/:token', csrfProtection, async (req, res, next) => {
  const { token } = req.params;
  if (token) {
    try {
      const user = await User.findOne({
        where: { reset_password_token: `${token}` }
      });

      if (user) {
        res.render('users/forgot-token', {
          title: `Set new password - Elderoost`,
          token: token,
          csrfToken: req.csrfToken()
        });
      }
    } catch (e) {
      console.error(`ERROR in /forgot/t/:token : ${e}`);
    }
  }
});

router.post('/forgot/t/:token', csrfProtection, async (req, res, next) => {
  const { token } = req.params;
  const { email, password } = req.body;

  if (token && email && password) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
          reset_password_token: token
        }
      });

      if (user) {
        const hash = await bcrypt.hash(password, saltRounds);

        user.password = hash;
        user.reset_password_token = '';
        await user.save();

        // send email async
        const msg = {
          to: `${user.email}`,
          from: `alex.kluew@gmail.com`,
          subject: 'Elderoost : Password was reset.',
          text: `Hello, your password was recently reset. If you did recently reset your password, then please disregard this message. Otherwise, please contact us at alex.kluew@gmail.com about this email.`,
          html: `Hello, your password was recently reset. If you did recently reset your password, then please disregard this message. Otherwise, please contact us at alex.kluew@gmail.com about this email.`
        };

        await sgMail.send(msg);

        res.redirect(`/users/signin?ref=password-reset`);
      }
    } catch (e) {
      console.error(`ERROR in /forgot/t/:token : ${e}`);
    }

    res.redirect(`/forgot/t/${token}`);
  }
});

router.post('/forgot', csrfProtection, async (req, res, next) => {
  const { email } = req.body;

  if (email) {
    try {
      const user = await User.findOne({ where: { email: `${email}` } });

      if (user) {
        const _pd = passGenerator.generate({ length: 64, numbers: true });

        user.reset_password_token = _pd;
        await user.save();

        // send email async
        const msg = {
          to: `${user.email}`,
          from: `alex.kluew@gmail.com`,
          subject: 'Elderoost : Password Reset',
          text: `To reset your password, please go to https://elderoostalpha.herokuapp.com/users/forgot/t/${_pd}`,
          html: `<strong>To reset your password, please go to <a href="https://elderoostalpha.herokuapp.com/users/forgot/t/${_pd}">https://elderoostalpha.herokuapp.com/users/forgot/t/${_pd}</a></strong>`
        };

        await sgMail.send(msg);

        res.render('users/forgot-after');
      }
    } catch (e) {
      console.error(`ERRROR in POST /users/forgot : ${e}`);
    }
  }
});

router.get('/profile', csrfProtection, (req, res, next) => {
  if (req.user) {
    res.render('users/profile', {
      title: `My profile - Elderoost`,
      csrfToken: req.csrfToken()
    });
  } else {
    res.redirect('/users/signin');
  }
});

router.post('/profile', csrfProtection, async (req, res, next) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    // all good we can change the username
    const user = await User.findOne({ where: { email: `${email}` } });

    if (user) {
      const compare = await bcrypt.compare(password, user.password);

      if (compare) {
        if (user.username !== username) {
          const _usernameExists = await User.findOne({
            where: { username: `${username}` }
          });
          if (!_usernameExists) {
            const updatedUser = await User.update(
              { username: username },
              { where: { email: `${email}` } }
            );
          }
        }
      }
      res.redirect('/users/profile');
    } else {
      res.redirect('/users/logout');
    }
  }
});

module.exports = router;
