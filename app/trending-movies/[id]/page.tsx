
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    return (
        <div>Trending Movies {id}</div>
    )
}

export default page
