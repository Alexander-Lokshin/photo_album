import express from 'express';
import { Album, User } from '../../db/models';

const router = express.Router();

router.post('/your-endpoint', async (req, res) => {
  const { title, isOpen } = req.body;
  const data = { userId: req.session.user.id, title, isOpen };
  // console.log(data);
  const album = await Album.create(data);
  const response = await Album.findOne({ where: { id: album.id }, include: { model: User } });
  return res.json(response);
});
router.delete('/delete/:id', async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  if (album.userId === req.session.user.id) {
    await album.destroy();
    return res.sendStatus(200);
  }
  return res.sendStatus(404).statusMessage('Only for creator');
  // await Album.destroy({ where: {id: req.params.id}})
});

router.patch('/edit/:id', async (req, res) => {
  const albumId = req.params.id;
  const { title, isOpen } = req.body;

  try {
    const [updatedRowCount, updatedAlbums] = await Album.update(
      { title, isOpen },
      { where: { id: albumId } },
    );

    if (updatedRowCount === 1) {
      // Обновление прошло успешно
      return res.sendStatus(200);
    }
    // Нет записи для обновления или произошла другая ошибка
    return res.sendStatus(404); // Например, можно отправить статус 404, если запись не найдена
  } catch (error) {
    console.error('Error updating album', error);
    return res.sendStatus(500); // Ошибка сервера
  }
});

export default router;
