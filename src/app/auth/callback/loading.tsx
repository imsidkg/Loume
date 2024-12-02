import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div>
        <Loader2 color='red'/>
    </div>
  )
}

export default loading