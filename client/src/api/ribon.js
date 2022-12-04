import axios from "axios";

export const getRibon = async () => {
  return await axios.get("/api/ribon");
};
export const create = async (ribon) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/ribon", ribon);
};

export const geteditRibon = async (id) => {
  return await axios.get(`/api/ribon/${id}`);
};
export const editRibon = async (id, ribon) => {
  return await axios.put(`/api/ribon/${id}`, ribon);
};

export const deleteRibon = async (id) => {
  return await axios.delete(`/api/ribon/${id}`);
};
