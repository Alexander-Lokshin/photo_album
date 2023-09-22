export default function stop(req, res, next) {
  if (req.session.user) return next();

  return res.redirect('/');
}
