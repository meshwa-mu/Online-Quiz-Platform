import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/login", async (req, res) => {
  const { username, password } = req.body

  if (!username.endsWith(".edu")) {
    return res.status(400).json({ msg: "Username must contain .edu" })
  }

  if (password.length !== 6 || isNaN(password)) {
    return res.status(400).json({ msg: "Password must be 6 digits" })
  }

  let user = await User.findOne({ username })

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10)

    user = new User({
      username,
      password: hashedPassword
    })

    await user.save()
  } else {
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" })
    }
  }

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  )

  res.json({
    msg: "Login Success",
    token
  })
})

export default router