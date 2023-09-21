import { Album } from '../../db/models';

export default async function checkAuthor(req, res, next) {
  const { id: albumId } = req.params;
  const album = await Album.findOne({ where: { id: albumId } });
  if (album.userId === req.session?.user?.id) {
    return next();
  }
  return res.sendStatus(403);
}