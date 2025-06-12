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
