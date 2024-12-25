import Link from "next/link";

export default async function Home() {

    return (
        <>
            <h1>Home Page</h1>
            <Link href='/popular-movies' className="underline text-blue-500">Popular Movies</Link>
        </>
    )
}
