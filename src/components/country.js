import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Country() {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      )
      const data = await res.json()
      console.log(data)
      setCountry(data)
    }

    fetchCountryData()
  }, [name])

  return (
   <h1>asdasdas</h1>
  )
}