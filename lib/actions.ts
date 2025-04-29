import { API_KEY } from '@/lib/types';

export const popularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    if (!response.ok) {
        throw new Error("error fetching data");
    }

    const data = await response.json()
    console.log(data.results)
    return data.results
}

export const trendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`)

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

    const data = await response.json()
    console.log(data.results)
    return data.results
}
