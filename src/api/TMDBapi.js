export const getMoviesFromSearch = (search) => {
    const url =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${search}`;

    return fetch(url)
        .then(data => data.json())
        .catch(err => console.error(err))
}   