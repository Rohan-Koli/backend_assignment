import { body, validationResult } from 'express-validator';

export const validateTask = [
  body("title")
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 5 }).withMessage("Title must be at least 5 characters long"),

  body("description")
    .notEmpty().withMessage("Description is required")
    .isLength({ min: 11 }).withMessage("Description must be at least 11 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];