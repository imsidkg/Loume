'use client'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const params  = useParams()
    console.log(params)
  return (
    <div>
        {JSON.stringify(params)}
    </div>
  )
}

export default page