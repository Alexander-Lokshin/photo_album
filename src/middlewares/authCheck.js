export default function authCheck() {
  return function authMiddleware(req, res, next) {
    if (req.session.user) {
      return next();
    }
    return res.sendStatus(403);
  };
}

export const stop = (req, res, next) => {
  if (req.session.user) return next();
  return res.redirect('/');
};
