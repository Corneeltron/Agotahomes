const cookieController = {};


sessionsController.setCookie = (req, res, next) => {
  const random = Math.floor(Math.random() * 100).toString()
  res.cookie('agotaHomesCookies', random)
  return next()
}

sessionsController.setSSIDCookie = (req, res, next) => {
  res.cookie('SSIDCookie', res.locals.id, {httpOnly: true})
  console.log('res.locals.id in SSIDCookieController', res.locals.id)
  return next()
}

module.exports = cookieController;