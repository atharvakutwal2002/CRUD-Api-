import { v4 as uuidv4 } from "uuid";

let user = [];

export const createUser = (req, res) => {
  const id = uuidv4();
  const newUser = req.body;
  const finalUser = { ...newUser, id: id };
  user.push(finalUser);
  res.send(finalUser);
};

export const getUser = (req, res) => {
  console.log(user);
  res.send(user);
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  user = user.filter((user) => {
    user.id !== id;
  });

  res.send(user);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { name, lastname, age } = req.body;
  const userToBeUpdated = user.find((user) => user.id == id);

  if (name) {
    userToBeUpdated.name = name;
  }
  if (lastname) {
    userToBeUpdated.lastname = lastname;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  res.send(userToBeUpdated);
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const founduser = user.find((user) => user.id == id);
  res.send(founduser);
};
