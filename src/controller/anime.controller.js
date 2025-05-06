import animeService from "../service/anime.service.js";

const create = async (req, res) => {
  return animeService.create(req, res);
};

const getAll = async (req, res) => {
  return animeService.getAll(req, res);
};

const getById = async (req, res) => {
  return animeService.getById(req, res);
};

const updatePUT = async (req, res) => {
  return animeService.updatePUT(req, res);
};

const updatePATCH = async (req, res) => {
  return animeService.updatePATCH(req, res);
};

const deleteAnime = async (req, res) => {
  return animeService.deleteAnime(req, res);
};

export default { create, getAll, getById, updatePUT, updatePATCH, deleteAnime };
