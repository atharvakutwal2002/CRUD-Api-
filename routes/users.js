import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let user = [];

router.get("/", (req, res) => {
  console.log(user);
  res.send(user);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const newUser = req.body;
  const finalUser = { ...newUser, id: id };
  user.push(finalUser);
  res.send(finalUser);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const founduser = user.find((user) => user.id == id);
  res.send(founduser);
});

router.delete('/:id',(req,res)=>{
    const id= req.params.id;

    user= user.filter((user)=>{
        user.id!==id;
    })

    res.send(user);
})

router.patch()

export default router;
