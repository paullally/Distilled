import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Card,Row,Col } from 'react-bootstrap';
export default function Country() {
  const [country, setCountry] = useState([])
  const { name } = useParams()
  let population;
  let flag;
  let capital;
  let currencies = []
  let languages = []
  let borders = []
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
    country.forEach((country) =>{
      population=country.population
      flag = country.flags.png
      capital = country.capital
      languages = Object.values(country.languages)
      borders = Object.values(country.borders)
      Object.values(country.currencies).forEach(currency=>{
        currencies.push(currency.name)
      })
      
    })
  return (
    <Row >
    <Col lg="12" className=" d-flex justify-content-center ">
      <img src={flag}></img>
    </Col>
    <Col lg="12" className="py-5" >
     <Card>
     <Card.Title>{name}</Card.Title>
     </Card>
    </Col>
  </Row>
  )
}