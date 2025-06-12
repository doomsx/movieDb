import Card from "@/components/Card"
import { notFound } from "next/navigation"
import { fetchMoviesByCategory, getAllCategory, getCategoryConfig } from "@/lib/actions"
import { movies } from "@/lib/types"
import Link from "next/link"
import Pagination from "@/components/Pagination"

export async function generateStaticParams() {
    const categories = getAllCategory()
    return categories.map((category) => ({
        category: category
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const categoryConfig = getCategoryConfig((await params).category);

    if (!categoryConfig) {
        return {
            title: 'Movies Not Found',
        };
    }

    return {
        title: `${categoryConfig.title} - TMDb`,
        description: categoryConfig.description,
        openGraph: {
            title: categoryConfig.title,
            description: categoryConfig.description,
        },
    };
}

const page = async ({ params }: { params: Promise<{ category: string, page: string }> }) => {
    const { category, page } = (await params)
    const pageNumber = parseInt(page, 10)

    const categoryConfig = getCategoryConfig(category)
    if (!categoryConfig || isNaN(pageNumber)) return notFound()

    const data = await fetchMoviesByCategory(category, pageNumber)

    return (
        <section className="uppercase text-center my-10">
            <h1 className="capitalize text-2xl font-bold">{category} movies</h1>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                {data.results.map((movie: movies) => (
                    <Link href={`/movies/details/${movie.id}`} key={movie.id} >
                        <Card movie={movie} />
                    </Link>
                ))}
            </div>
            <Pagination currentPage={pageNumber} totalPages={data.total_pages} baseUrl={`/movies/${category}/page`} />
        </section>
    )
}

export default page
