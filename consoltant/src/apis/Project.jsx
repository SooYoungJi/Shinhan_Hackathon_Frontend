import { axios } from "./Axios";

export const getProjects = async () => {
  try {
    const response = await axios.get(`/projects?portfolioId=4`);
    console.log("get projects data success : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get projects failed:", error);
    throw error;
  }
};

export const postProjects = async () => {
  try {
    const response = await axios.post(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post projects failed:", error);
    throw error;
  }
};

export const putProjects = async () => {
  try {
    const response = await axios.put(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put projects failed:", error);
    throw error;
  }
};

export const deleteProjects = async () => {
  try {
    const response = await axios.delete(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete projects failed:", error);
    throw error;
  }
};
