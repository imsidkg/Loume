'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Loader from '../loader'

type Props = {
    name: string
    id: string
    optimistic?: boolean
    count?: number
}

const Folder = ({ id, name, optimistic, count }: Props) => {
    const pathName = usePathname();
    const router = useRouter();

    function handleFolderClick () {
        router.push(`${pathName}/folder/${id}`)
    }
  return (
    <div onClick={() => handleFolderClick}>
        <Loader state = {false}>
            <p onDoubleClick={(e) => console.log('fired')}>
                {name}
            </p>
            <span>{count || 0}</span>
        </Loader>
    </div>
  )
}

export default Folder