export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const READ_TOKEN = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN

export type movies = {
    id: number
    title: string
    release_date: string
    poster_path: string
    backdrop_path: string
}

export type previewMovies = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
}

export type MovieCategory = {
    endpoint: string;
    title: string;
    description: string;
    revalidate: number;
};

export type PaginationProps = {
    totalPages: number
    currentPage: number
    baseUrl: string
}

type Genre = {
    id: string
    name: string
}

export type MovieDetailsType = {
    original_title: string
    overview: string
    release_date: string
    tagline: string
    poster_path: string;
    backdrop_path: string;
    genres: Genre[]
    runtime: number
    vote_average: number
    vote_count: number
}

export type movieImageType = {
    file_path: string
}

