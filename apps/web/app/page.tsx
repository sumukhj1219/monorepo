"use server"
import React from 'react'
import { prisma } from "@repo/db";


const page = async() => {
  const user = await prisma.user.findFirst()

  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  )
}

export default page