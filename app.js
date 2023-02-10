const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a65079eb9e01b7d851c7b429e5089a2a&page=4'
const IMG_URL = 'https://image.tmdb.org/t/p/w800'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a65079eb9e01b7d851c7b429e5089a2a&query="'
const form = document.getElementById('form');
const search = document.getElementById('search')

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})

getMovies(API_URL)

