import express from "express";
// import {verifyToken} from "../middleware/verifyToken.js";
// import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
    console.log("router works");
});
router.post("/test", (req, res) => {
    console.log("router works");
});
router.put("/test", (req, res) => {
    console.log("router works");
});
router.delete("/test", (req, res) => {
    console.log("router works");
});
// router.get("/:id", getPost);
// router.post("/", verifyToken, addPost);
// router.put("/:id", verifyToken, updatePost);
// router.delete("/:id", verifyToken, deletePost);

export default router;