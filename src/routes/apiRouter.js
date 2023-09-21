import express from 'express';
import {Album,User} from '../../db/models'

const router = express.Router();


router.post("/your-endpoint", async(req, res) => {
    const {title, isOpen} = req.body
    const data = {userId: req.session.user.id, title, isOpen}
    // console.log(data);
    const album = await Album.create(data)
    const response=await Album.findOne({where:{id:album.id},include:{model:User}})
    return res.json(response);


    
    
})
router.delete("/delete/:id", async(req, res)=> {
  const album = await Album.findByPk(req.params.id)
  if(album.userId===req.session.user.id){
  await album.destroy()
  return res.sendStatus(200);
  }
  return res.sendStatus(404).statusMessage('Only for creator');
  // await Album.destroy({ where: {id: req.params.id}})
})


export default router;
