const page = async ({ params }: { params: Promise<{ category: string }> }) => {
    const category = (await params).category
    console.log(category)
    return (
        <section className="uppercase text-center">{category} movies</section>
    )
}

export default page
