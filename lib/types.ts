export const API_KEY = process.env.TMDB_API_KEY

export type movies = {
    id: number
    title: string
    release_date: string
    poster_path: string
    backdrop_path: string
}
