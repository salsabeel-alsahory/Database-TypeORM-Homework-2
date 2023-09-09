import express from 'express';

const validatePermission = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { name } = req.body;
  const errorList = [];

  if (!name || typeof name !== 'string') {
    errorList.push('Permission name is required and must be a string.');
  }

  if (errorList.length > 0) {
    return res.status(400).json({ error: errorList });
  }

  next();
};

export { validatePermission };
