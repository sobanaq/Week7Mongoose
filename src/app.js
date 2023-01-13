const yargs = require("yargs");
const mongoose = require("mongoose");
require("./db/connection");
const MovieCollection = require("./movies/model");
const { createMovie } = require("./movies/function");
const { deletedMovie } = require("./movies/function");
const { updateActor } = require("./movies/function");
const { updateDirector } = require("./movies/function");
const { listOfMovies } = require("./movies/function");

async function app(yargsInput) {
  if (yargsInput.create) {
    //code to add movie goes here
    const movieObject = {
      title: yargsInput.title,
      actor: yargsInput.actor,
      director: yargsInput.director,
    };
    await createMovie(movieObject);
    //--------------------------------------------------------------------------------------------------------------------
  } else if (yargsInput.read) {
    //code to list all movies goes here
    const listofMovies = {
      title: yargsInput.title,
      actor: yargsInput.actor,
      director: yargsInput.director,
    };
    await listOfMovies(listofMovies);
    //--------------------------------------------------------------------------------------------------------------------
  } else if (yargsInput.updateActor) {
    //code to update actor goes here
    const updateActor = yargsInput.actor;
    console.log(newActor);
    await updateActor(updateActor);
    console.log("Actor updated");
    //--------------------------------------------------------------------------------------------------------------------
  } else if (yargsInput.updateDirector) {
    //code to update director goes here
    const updateDirector = yargsInput.director;
    console.log(newDirector);
    await updateDirector(updateDirector);
    console.log("Director updated");
    //--------------------------------------------------------------------------------------------------------------------
  } else if (yargsInput.delete) {
    //code to delete movie goes here
    const movieDelete = { title: yargsInput.title };
    await deletedMovie(movieDelete);
    console.log(movieDelete.title), "Movie deleted.";
    //--------------------------------------------------------------------------------------------------------------------
  } else {
    console.log("Command not reognised");
  }
  await mongoose.disconnect();
}

app(yargs.argv);
