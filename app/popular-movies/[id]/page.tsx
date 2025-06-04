
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    return (
        <div>Popular Movie {id}</div>
    )
}

export default page
