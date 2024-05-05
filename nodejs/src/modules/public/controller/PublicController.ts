import { Router } from "express";

const router = Router();

router.get("/getImages", (req, res) => {
  res.send("success");
});

export default router;
