import { API_URL, TOKEN_API } from "../utils/config";
//****************METHOD GET*****************************
export const getAllMovies = async () => {
  let data = await fetch(`${API_URL}/peliculas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());

  return data;
};

export const getTodayMovies = async () => {
  let data = await fetch(`${API_URL}/peliculas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());

  if (data.length) data = data.filter((item) => item.category === "hoy");

  return data;
};

export const getWeekMovies = async () => {
  let data = await fetch(`${API_URL}/peliculas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());

  if (data.length) data = data.filter((item) => item.category === "semanal");

  return data;
};
export const getComingSoonMovies = async () => {
  let data = await fetch(`${API_URL}/peliculas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());

  if (data.length) data = data.filter((item) => item.category === "proxima");
  return data;
};
export const getBanners = async () => {
  let data = await fetch(`${API_URL}/banners`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};
export const getMovie = async (id) => {
  let data = await fetch(`${API_URL}/peliculas/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};
export const getAllCombos = async () => {
  let data = await fetch(`${API_URL}/combos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};

export const getMoviesByPage = async (id) => {
  let data = await fetch(`${API_URL}/peliculaspage?page=${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};

export const getCombosByPage = async (id) => {
  let data = await fetch(`${API_URL}/combospage?page=${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};
export const getAllPromotions = async (id) => {
  let data = await fetch(`${API_URL}/promotions`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};
export const getPromotionsbyPage = async (id) => {
  let data = await fetch(`${API_URL}/promotionpage?page=${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization": TOKEN_API,
    },
  }).then((response) => response.json());
  return data;
};

/************************** METHOD POST ********************/
export const sendSuscribe = async (email) => {
  let data = {
    email,
  };
  let response = await fetch(`${API_URL}/subscriptionsAdd`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Authorization": TOKEN_API,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return response;
};

export const sendClaimForm = async (data) => {
  let response = await fetch(`${API_URL}/claim`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Authorization": TOKEN_API,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return response;
};

export const sendMoviesByFilter = async (category) => {
  let data = {
    category,
  };

  let response = await fetch(`${API_URL}/peliculasByFilter`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Authorization": TOKEN_API,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return response;
};
