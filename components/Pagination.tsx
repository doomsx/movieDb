"use client"

import { useRouter } from "next/navigation"

const Pagination = (page = 1) => {
    const router = useRouter()

    const handlePageChange = (page: number) => {
        router.push(`${page}`)
    }

    return (
        <div>
            <button onClick={() => handlePageChange(page + 1)}>page</button>
        </div>
    )
}

export default Pagination
