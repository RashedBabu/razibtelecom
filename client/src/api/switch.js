import axios from "axios";

export const getRibon = async () => {
  return await axios.get("/api/switch");
};
export const create = async (ribonSwitch) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/switch", ribonSwitch);
};

export const geteditRibon = async (id) => {
  return await axios.get(`/api/switch/${id}`);
};
export const editRibon = async (id, ribonSwitch) => {
  return await axios.put(`/api/switch/${id}`, ribonSwitch);
};

export const deleteRibon= async (id) => {
  return await axios.delete(`/api/switch/${id}`);
};

