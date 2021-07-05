import React from 'react'
import { useRouter } from 'next/router'
const MyNote = () => {
    const router = useRouter()
    const { id } = router.query

    return (<h2> my note {id} </h2>)
}

export default MyNote