const key = process.env.MOVIEDB_KEY;

export default {
    fetchTrendng: {
        title: 'Trending',
        url: `https://api.themoviedb.org/3/trending/all?api_key=${key}`
    }
}