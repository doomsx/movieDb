import { API_KEY, MovieCategory } from '@/lib/types';

const BASE_URL = "https://api.themoviedb.org/3"
export const IMAGE_URL = `https://image.tmdb.org/t/p/w500`

type MovieCategoryKey = keyof typeof MOVIE_CATEGORIES;

const MOVIE_CATEGORIES: Record<string, MovieCategory> = {
    "popular": {
        endpoint: '/movie/popular',
        title: 'Popular Movies',
        description: 'Discover the most popular movies right now',
        revalidate: 3600, // 1 hour
    },
    "trending": {
        endpoint: '/trending/movie/week',
        title: 'Trending Movies',
        description: 'Movies trending this week',
        revalidate: 1800, // 30 minutes
    },
    'top-rated': {
        endpoint: '/movie/top_rated',
        title: 'Top Rated Movies',
        description: 'The highest rated movies of all time',
        revalidate: 7200, // 2 hours
    },
    "upcoming": {
        endpoint: '/movie/upcoming',
        title: 'Upcoming Movies',
        description: 'Movies coming soon to theaters',
        revalidate: 3600, // 1 hour
    },
    'now-playing': {
        endpoint: '/movie/now_playing',
        title: 'Now Playing',
        description: 'Movies currently in theaters',
        revalidate: 1800, // 30 minutes
    }
};

export const fetchMoviesByCategory = async (category: MovieCategoryKey, page = 1) => {
    if (!API_KEY) {
        throw new Error("API key not configured")
    }

    const categoryConfig = MOVIE_CATEGORIES[category]
    if (!categoryConfig) {
        throw new Error(`Invalid Category: ${category}`)
    }

    const url = `${BASE_URL}${categoryConfig.endpoint}?api_key=${API_KEY}&page=${page}`;

    const response = await fetch(url, {
        next:
        {
            revalidate: categoryConfig.revalidate,
            tags: [`movies-${category}`]
        }
    })

    const data = await response.json()
    return { ...data, category: categoryConfig }
}

export const getCategoryConfig = (category: MovieCategoryKey) => {
    return MOVIE_CATEGORIES[category] || null
}

export const getAllCategory = () => {
    return Object.keys(MOVIE_CATEGORIES) as MovieCategoryKey[]
}

export const getMovieDetails = async (id: string) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return await response.json()
}

export const getMovieCredis = async (id: string) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    return await response.json()
}

export const getMovieRecommendations = async (id: string) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`)
    return await response.json()
}

