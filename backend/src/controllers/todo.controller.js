const todoService = require("../services/todo.service");

const create = async (req, res, next) => {
  try {
    const todo = await todoService.create(req.body.title, req.userId);

    return res.json(todo);
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const todos = await todoService.list(req.userId);

    return res.json(todos);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const todo = await todoService.update(
      req.userId,
      req.params.id,
      req.body.title
    );

    return res.json(todo);
  } catch (error) {
    next(error);
  }
};

const toggle = async (req, res, next) => {
  try {
    const todo = await todoService.toggle(req.userId, req.params.id);

    return res.json(todo);
  } catch (error) {
    next(error);
  }
};

const trash = async (req, res, next) => {
  try {
    const todo = await todoService.trash(req.userId, req.params.id);

    return res.json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  list,
  update,
  toggle,
  trash,
};
