import { getMovieDetails } from "@/lib/actions"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const details = await getMovieDetails(id)
    console.log(details)
    return (
        <section></div>
    )
}

export default page
