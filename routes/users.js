import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const user = [];

router.get('/', (req, res) => {
    console.log(user)
    res.send(user);
});

router.post('/',(req,res)=>{
    const id = uuidv4();
    const newUser= req.body;
    const finalUser = {...newUser, id:id}
    user.push(finalUser);
    res.send(finalUser);

});

router.get('/user',(req, res)=>{

})

export default router;
