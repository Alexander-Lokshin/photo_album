import express from 'express';
import authCheck from '../middlewares/authCheck';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
router.get('/signup', authCheck(false), (req, res) => {
   const initState = {};
   res.render('Layout', initState);
 });
 router.get('/login', authCheck(false), (req, res) => {
   const initState = {};
   res.render('Layout', initState);
 });

export default router;
