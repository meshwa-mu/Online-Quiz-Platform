import express from "express"
import Result from "./models/Result.js"
import authMiddleware from "./middleware/authMiddleware.js"

const router = express.Router()

router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { score, time } = req.body

    const result = new Result({
      username: req.user.username,
      score,
      time
    })

    await result.save()

    res.json({ msg: "Result Saved" })

  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Server Error" })
  }
})

router.get("/", async (req, res) => {
  const data = await Result.find()
  res.json(data)
})

export default router