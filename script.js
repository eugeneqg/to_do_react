"use strict";

let numberOfFiles = +prompt("Сколько фильмов вы посмотрели?", "");

for (let i=1; i<2; i++) {
    while (numberOfFiles.length == 0) {
        numberOfFiles = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

const personalMovieDB = {

    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    private: false,

};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман");
}


    for (let i=0; i<2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько вы его оценили?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }



console.log(personalMovieDB);
console.log(personalMovieDB.movies);



