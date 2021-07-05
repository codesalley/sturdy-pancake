import React from 'react'
import { useRouter } from 'next/router'



const Page = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (<h2>here {params} </h2>)
}

export default Page