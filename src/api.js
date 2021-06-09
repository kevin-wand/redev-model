import axios from "axios";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = "https://api.airtable.com/v0/appVEekOW4wk6IJYY/Table%201";
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const showPrevious = async () => {
  try {
    const res = await axios.get(baseURL, config);
    // console.log(res.data.records);
    return res.data.records;
  } catch (error) {
    console.error(error);
  }
};

export const createProject = async (form) => {
  try {
    const res = await axios.post(`${baseURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/${id}`, config);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editProject = async (id, form) => {
  try {
    const res = await axios.put(`${baseURL}/${id}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProject = async (id) => {
  try {
    console.log(id);
    const res = await axios.delete(`${baseURL}/${id}`, config);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
