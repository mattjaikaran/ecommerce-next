import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_CLIENT_API}/categories`

export const getCategories = async () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  try {
    setLoading(true)
    const response = await axios.get(URL)
    console.log('response.data', response.data)
    setCategories(response.data.categories)
    return categories
  } catch (err) {
    setError(true)
    return err.message
  } finally {
    setLoading(false)
  }
}