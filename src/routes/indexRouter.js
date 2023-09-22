import express from 'express';
import { Op } from 'sequelize';
import authCheck from '../middlewares/authCheck';
import { Album, User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
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

router.get('/albums', async (req, res) => {
  const allUserAlbums = await Album.findAll({
    where: { userId: req.session?.user?.id },
    include: User,
  }); // order: [['userId', sequelize.OP('fn(abs)-?userId')]]
  // const other = Album.findAll(where: {userId: { [Op.NOT]: req.session?.user?.id }})
  const othersAlbums = await Album.findAll({
    where: { userId: { [Op.ne]: req.session?.user?.id }, isOpen: true },
    include: User,
  });
  const allAlbums = [...allUserAlbums, ...othersAlbums];

  const initState = { allAlbums };
  res.render('Layout', initState);
});




export default router;
