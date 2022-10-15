let numberofFilms = +prompt(`How many movies have you seen?`)
let filmGenres = prompt(`What kind of movie do you often watch?`)
let actorsFilm = prompt(`Who is your favorite actor?`)
let personalMovieDB = {
    count:numberofFilms,
    movies:{},
    actors:actorsFilm,
    genres:filmGenres,
    privat:''
}
for(let i = 0; i < 2; i++){
    let firstQ = prompt(`One of the last movies you saw?`);
    let secondQ = prompt(`How much you could have rated it?`);

    if (firstQ == '' || firstQ == null || secondQ =='' || secondQ == null){
        --i;
    }else{
        personalMovieDB.movies[firstQ] = secondQ
    }
}
if(personalMovieDB.count < 10 ){
    console.log(`Fewer films have been viewed!`);
}else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log('You are a classic audience!');
}else if (personalMovieDB.count >= 30){
    console.log('You are a movie enthusiast!');
}else{
    console.log('There was an error!');
}
console.log(personalMovieDB);
