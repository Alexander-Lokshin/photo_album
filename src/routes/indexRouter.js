import express from 'express';
import { Op } from 'sequelize';
import stop from '../middlewares/authCheck';
import { Album, User, Photo } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});
router.get('/signup', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});
router.get('/login', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/albums', stop, async (req, res) => {
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

router.get('/albums/:albumId', stop, async (req, res) => {
  console.log(req.params.albumId)
  const allUserPhotos = await Photo.findAll({
    where: { albumId: req.params.albumId },
    include: Album,
  });
  const initState = { allUserPhotos };
  res.render('Layout', initState);
});

export default router;
