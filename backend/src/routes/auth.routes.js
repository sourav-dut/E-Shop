import express from 'express'
import { loginController, registrationController } from '../controller/auth.controller.js';
import { deleteUserByIdController, getAllUsersController, getUserByIdController, updateUserByIdController } from '../controller/user.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';
const router = express.Router();

//////////////// User Authentication ///////////////////////////
router.post("/registration", registrationController);
router.post("/login", loginController);


//////////////// User Operation ///////////////////////////
router.get("/get-all", authMiddleware, getAllUsersController);
router.get("/get-user", authMiddleware, getUserByIdController);
router.delete("/delete-user", authMiddleware, deleteUserByIdController);
router.put("/update-user", authMiddleware, updateUserByIdController);

export default router;