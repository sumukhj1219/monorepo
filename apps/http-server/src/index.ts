import express from "express"
import { prisma } from "@repo/db";


const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "hi" })
})

app.post("/signUp", async (req, res) => {
    const { name, password } = req.body
    if (!name || !password)
        return
    const user = await prisma.user.create({
        data: {
            username: name,
            password: password
        }
    })
    res.json({ message: "sign up successfull", user })

})

app.listen(7000)