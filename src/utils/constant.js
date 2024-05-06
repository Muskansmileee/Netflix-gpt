export const USER_AVATAR =
  "https://assets.leetcode.com/users/avatars/avatar_1650197078.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_POSTER = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = "open api key "; //remove it , dont push

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
