import { body, validationResult } from 'express-validator';

export const validateLogin = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Valid email is required'),

    body('password')
        .notEmpty().withMessage('Passsword is required')
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
