"use strict";


const numberOfFiles = prompt("Сколько фильмов вы посмотрели,", "");

const personalMovieDB = {

    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    private: false,

};

console.log(personalMovieDB["count"]);

const movie1 = prompt("Один из последних просмотренных фильмов?", ""),
    score1 = prompt("На сколько вы его оценили?", ""),
    movie2 = prompt("Один из последних просмотренных фильмов?", ""),
    score2 = prompt("На сколько вы его оценили?", "");



personalMovieDB.movies = {

    movie1: score1,
    movie2: score2,

};

console.log(personalMovieDB);



