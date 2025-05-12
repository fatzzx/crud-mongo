import animeRepository from "../repository/anime.repository.js";

const createAnime = async ({ title, synopsis, genre, imageUrl }) => {
  if (!title || !synopsis || !genre) {
    throw { status: 400, message: "All fields are required" };
  }

  return await animeRepository.createAnime({
    title,
    synopsis,
    genre,
    imageUrl,
  });
};

const getAllAnimes = async () => {
  return await animeRepository.getAllAnimes();
};

const getAnimeById = async (id) => {
  const anime = await animeRepository.getAnimeById(id);
  if (!anime) throw { status: 404, message: "Anime not found" };
  return anime;
};

const updateAnimePUT = async (id, data) => {
  const { title, synopsis, genre, imageUrl } = data;
  if (!title || !synopsis || !genre) {
    throw { status: 400, message: "All fields are required" };
  }

  const updated = await animeRepository.updateAnime(id, data);
  if (!updated) throw { status: 404, message: "Anime not found" };
  return updated;
};

const updateAnimePATCH = async (id, data) => {
  const updated = await animeRepository.updateAnime(id, data);
  if (!updated) throw { status: 404, message: "Anime not found" };
  return updated;
};

const deleteAnime = async (id) => {
  const deleted = await animeRepository.deleteAnime(id);
  if (!deleted) throw { status: 404, message: "Anime not found" };
  return true;
};

export default {
  createAnime,
  getAllAnimes,
  getAnimeById,
  updateAnimePUT,
  updateAnimePATCH,
  deleteAnime,
};
