import Anime from "../models/Anime";

const createAnime = async (animeData) => {
  return await Anime.create(animeData);
};

const getAllAnimes = async () => {
  return await Anime.find();
};

const getAnimeById = async (id) => {
  return await Anime.findById(id);
};

const updateAnime = async (id, animeData) => {
  return await Anime.findByIdAndUpdate(id, animeData, { new: true });
};

const deleteAnime = async (id) => {
  return await Anime.findByIdAndDelete(id);
};
