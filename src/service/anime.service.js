import animeRepository from "../repository/anime.repository.js";

const create = async (req, res) => {
  try {
    const { title, description, releaseDate, genre } = req.body;

    if (!title || !description || !releaseDate || !genre) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAnime = await animeRepository.createAnime({
      title,
      description,
      releaseDate,
      genre,
    });

    return res.status(201).json(newAnime);
  } catch (error) {
    console.error("Error creating anime:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const animes = await animeRepository.getAllAnimes();
    return res.status(200).json(animes);
  } catch (error) {
    console.error("Error fetching animes:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await animeRepository.getAnimeById(id);

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    return res.status(200).json(anime);
  } catch (error) {
    console.error("Error fetching anime by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePUT = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, releaseDate, genre } = req.body;

    if (!title || !description || !releaseDate || !genre) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedAnime = await animeRepository.updateAnime(id, {
      title,
      description,
      releaseDate,
      genre,
    });

    if (!updatedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    return res.status(200).json(updatedAnime);
  } catch (error) {
    console.error("Error updating anime:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePATCH = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, releaseDate, genre } = req.body;

    const updatedAnime = await animeRepository.updateAnime(id, {
      title,
      description,
      releaseDate,
      genre,
    });

    if (!updatedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    return res.status(200).json(updatedAnime);
  } catch (error) {
    console.error("Error updating anime:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnime = await animeRepository.deleteAnime(id);

    if (!deletedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    return res.status(200).json({ message: "Anime deleted successfully" });
  } catch (error) {
    console.error("Error deleting anime:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  create,
  getAll,
  getById,
  updatePUT,
  updatePATCH,
  deleteAnime,
};
