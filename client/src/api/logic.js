import axios from "axios";

export const getDisplay = async () => {
  return await axios.get("/api/logic");
};

export const create = async (logic) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/logic", logic);
};

export const geteditUser = async (id) => {
  return await axios.get(`/api/logic/${id}`);
};
export const editUser = async (id, logic) => {
  return await axios.put(`/api/logic/${id}`, logic);
};

// export const geteditDisplay = async (id) => {
//   return await axios.get(`/api/display/${id}`);
// };

export const deleteLogic = async (id) => {
  return await axios.delete(`/api/logic/${id}`);
};
