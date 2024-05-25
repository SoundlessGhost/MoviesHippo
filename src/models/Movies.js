const { Schema, models, model } = require("mongoose");

const MoviesSchema = new Schema(
  {
    MoviesName: {
      type: String,
      required: true,
    },
    MoviesTitle: {
      type: String,
      required: true,
    },
    AvailableAudio: {
      type: String,
      required: true,
    },
    ReleaseDate: {
      type: String,
      required: true,
    },
    Runtime: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    MoviesTrailer: {
      type: String,
      required: true,
    },
    Download: {
      type: String,
      required: true,
    },
    Slider: {
      type: String,
      required: true,
    },
    Active: {
      type: String,
      required: true,
    },
    MainMovies: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Movies = models?.Movies || model("Movies", MoviesSchema);
