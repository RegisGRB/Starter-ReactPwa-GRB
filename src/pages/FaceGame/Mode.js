const Mode = {
  FAST: {
    item: 1,
    itemAdd:4,
    CountdownTime: 1,
    CountdownAdd: 0,
    ImageType: "x",
  },
  Movies: {
    item: 3,
    itemAdd:1,
    CountdownTime: 0.5,
    CountdownAdd: 0.1,
    ImageType: "movies",
  },
  ReverseMovies: {
    item: 29,
    itemAdd:-1,
    CountdownTime: 3.6,
    CountdownAdd: -0.1,
    ImageType: "movies",
  },
  Ranked: {
    item: 3,
    itemAdd:1,
    CountdownTime: 1,
    CountdownAdd: 0.1,
    ImageType: "x",
  },
};
export default Mode;
