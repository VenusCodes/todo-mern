const TodoModel = require("../models/Todo");

const create = async (title, userId) => {
  const todo = await TodoModel.create({title, userId});

  return todo;
};

const list = async (userId) => {
  const todos = await TodoModel.find({ userId, isDeleted: false });

  return todos;
};

const update = async (userId, todoId, title) => {
  const todo = await TodoModel.findOneAndUpdate(
    {
      _id: todoId,
      userId,
      isDeleted: false,
    },
    {
      title,
    },
    {
      new: true,
    }
  );

  return todo;
};

const toggle = async (userId, todoId) => {
  const todo = await TodoModel.findOne({
    _id: todoId,
    userId,
    isDeleted: false,
  });

  todo.isCompleted = !todo.isCompleted;

  await todo.save();

  return todo;
};

const trash = async (userId, todoId) => {
  const todo = await TodoModel.findOneAndUpdate(
    {
      _id: todoId,
      userId,
      isDeleted: false,
    },
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  return todo;
};

module.exports = {
  create,
  list,
  update,
  toggle,
  trash,
};
