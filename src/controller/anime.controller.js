import animeService from "../service/anime.service.js";
import User from "../models/User.js";

const create = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can create animes" });
    }

    const anime = await animeService.createAnime(req.body);
    return res.status(201).json(anime);
  } catch (error) {
    console.error("Create Anime Error:", error);
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const getAll = async (req, res) => {
  try {
    const animes = await animeService.getAllAnimes();
    return res.status(200).json(animes);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const getById = async (req, res) => {
  try {
    const anime = await animeService.getAnimeById(req.params.id);
    return res.status(200).json(anime);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const updatePUT = async (req, res) => {
  try {
    const anime = await animeService.updateAnimePUT(req.params.id, req.body);
    return res.status(200).json(anime);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const updatePATCH = async (req, res) => {
  try {
    const anime = await animeService.updateAnimePATCH(req.params.id, req.body);
    return res.status(200).json(anime);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const remove = async (req, res) => {
  try {
    await animeService.deleteAnime(req.params.id);
    return res.status(200).json({ message: "Anime deleted successfully" });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error" });
  }
};

const addAnimeToUserList = async (req, res) => {
  const { animeId, status, score } = req.body;

  if (!animeId) {
    return res.status(400).json({ message: "Anime ID is required" });
  }

  try {
    const user = await User.findById(req.user.id);

    const animeAlreadyInList = user.animeList.some(
      (item) => item.anime.toString() === animeId,
    );
    if (animeAlreadyInList) {
      return res.status(400).json({ message: "Anime already in your list" });
    }

    user.animeList.push({ anime: animeId, status, score });
    await user.save();

    return res.status(200).json({ message: "Anime added to your list" });
  } catch (error) {
    console.error("Error adding anime to user list:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateAnimeInUserList = async (req, res) => {
  const { animeId, status, score } = req.body;

  if (!animeId) {
    return res.status(400).json({ message: "Anime ID is required" });
  }

  try {
    const user = await User.findById(req.user.id);

    const animeIndex = user.animeList.findIndex(
      (item) => item.anime.toString() === animeId,
    );
    if (animeIndex === -1) {
      return res.status(400).json({ message: "Anime not found in your list" });
    }

    if (status) user.animeList[animeIndex].status = status;
    if (score) user.animeList[animeIndex].score = score;

    await user.save();

    return res.status(200).json({ message: "Anime updated in your list" });
  } catch (error) {
    console.error("Error updating anime in user list:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserAnimeList = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("animeList.anime");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ animeList: user.animeList });
  } catch (error) {
    console.error("Error fetching user anime list:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  create,
  getAll,
  getById,
  updatePUT,
  updatePATCH,
  remove,
  addAnimeToUserList,
  updateAnimeInUserList,
  getUserAnimeList,
};
