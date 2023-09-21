export default function authCheck(isAuth) {
   return function authMiddleware(req, res, next) {
     if (!!req.session?.user === isAuth) {
       return next();
     }
     return res.sendStatus(403);
   };
 }