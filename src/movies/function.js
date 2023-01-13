const MovieCollection = require("./model");

//CREATING A MOVIE
async function createMovie(movieObject) {
  try {
    const newMovie = await MovieCollection.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createMovie };

//---------------------------------------------------------------------

//DELETING A MOVIE
async function deletedMovie(movieDelete) {
  try {
    const deletedMovie = await MovieCollection.deleteOne({
      [yargsInput.filter]: yargsInput.filterValue,
    });
    console.log("deleted movie count: ", deletedMovie);
  } catch (error) {
    console.log(error);
  }
}

//----------------------------------------------------------------------

//UPDATING AN ACTOR
async function updateActor(newActor) {
  try {
    const updateActor = await MovieCollection.updateOne({ actor: newActor });
    console.log(updateActor);
  } catch (error) {
    console.log(error);
  }
}

//-----------------------------------------------------------------------

//UPDATING DIRECTOR
async function updateDirector(title, newDirector) {
  try {
    const updateDirector = await MovieCollection.updateOne({
      director: newDirector,
    });
    console.log(updateDirector);
  } catch (error) {
    console.log(error);
  }
}

//------------------------------------------------------------------------

//LISTING ALL MOVIES
async function listOfMovies(title, listObject) {
  try {
    const listOfMovies = await MovieCollection.find({});
    console.log(listOfMovies);
  } catch (error) {
    console.log(error);
  }
}
