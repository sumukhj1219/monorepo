import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const server = new WebSocketServer({
    port:5000
})

server.on("connection", (socket)=>{
    prisma.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there from ws server")
})