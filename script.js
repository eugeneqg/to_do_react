"use strict";

let numberOfFiles;

function start() {
    numberOfFiles = +prompt("Сколько фильмов вы посмотрели?", "");
    while (numberOfFiles == "" || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

//start();


const personalMovieDB = {

    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    private: false,

};

function rememberMyFilms() {

    for (let i=0; i<2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько вы его оценили?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}


//rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }

}

//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeMyGenres() {

    for (let i=0; i<3; i++) {
        let num = i+1;
        if (personalMovieDB.genres != null || personalMovieDB.genres != "") {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${num}`,"");
        } else {
            i--;
        }

    }
}

writeMyGenres();



