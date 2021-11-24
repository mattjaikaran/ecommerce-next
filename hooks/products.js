import axios from 'axios'

export const getProducts = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
   console.log(error); 
  }
}

export const getProductsByCategory = (url, category) => {
  try {
    const response = await axios.get(`${url}/${category}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getProductById = (url, id) => {
  try {
    const response = await axios.get(`${url}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}