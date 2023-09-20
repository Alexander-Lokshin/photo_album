import express from 'express';
import {Album} from "../../db/models"


const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get("/albums", async(req, res) => {
  const allAlbums = await Album.findAll()
  const initState = {allAlbums}
  res.render("Layout", initState)
})

export default router;
