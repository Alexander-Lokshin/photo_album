import express from 'express';
import fs from 'fs/promises';
import sharp from 'sharp';
import { Op } from 'sequelize';
import upload from '../middlewares/multerMid';
import { Photo, Album } from '../../db/models';
import { checkAuthor } from '../middlewares/authMiddleware';

const apiPhotoRouter = express.Router();

apiPhotoRouter.post('/', upload.single('file'), async (req, res) => {
  console.log('12121212');
  try {
    // проверяем наличие файла
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    // создаем имя файла с расширением webp и привязкой к дате
    const name = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    // создаем пост в бд
    const photo = await Photo.create({
      description: req.body.description,
      fullName: name,
      miniName: name,
      albumId: req.body.albumId,
    });
    const postWithUser = await Photo.findByPk(photo.id, { include: Album });
    // отправляем пост
    res.json(postWithUser);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPhotoRouter.delete('/:id', checkAuthor, async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    fs.unlink(`./public/img/${photo.img}`).catch((e) => console.log(e));
    if (!photo) {
      res.status(404).json({ message: 'Post not found' });
    }
    await photo.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPhotoRouter.post('/word', (req, res) => {
  console.log(req.body);
  res.end();
});

export default apiPhotoRouter;
