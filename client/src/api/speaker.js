import axios from "axios";

export const getBattery = async () => {
  return await axios.get("/api/speaker");
};
export const create = async (speaker) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/speaker", speaker);
};

export const geteditBattery = async (id) => {
  return await axios.get(`/api/speaker/${id}`);
};
export const editBattery = async (id, speaker) => {
  return await axios.put(`/api/speaker/${id}`, speaker);
};

export const deleteSpeaker = async (id) => {
  return await axios.delete(`/api/speaker/${id}`);
};

