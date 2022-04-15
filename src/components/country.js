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
      setCountry(data)
    }

    fetchCountryData()
  }, [name])



    console.log(country)
    country.forEach((country) =>{
      population=country.population
      flag = country.flags.png
      capital = country.capital
      languages = Object.values(country.languages)
      if (country.borders != null)
      {
        borders = Object.values(country.borders)
      }
      else
      {
        borders.push("None")
      }
      
      Object.values(country.currencies).forEach(currency=>{
        currencies.push(currency.name)
      })
      
    })

  return (
    <Row className =  "d-flex justify-content-center py-5 "  >
    <Col lg="12" className =  "d-flex justify-content-center " >
      <img src={flag}></img>
    </Col>
    <Col lg="7" className="py-5" >
     <Card >
     <Card.Title className="py-3 px-3">{name}</Card.Title>
     <Card.Title className="py-3 px-3">Capital: {capital}</Card.Title>
     <Card.Title className="py-3 px-3">Population: {population}</Card.Title>
     <Card.Title className="py-3 px-3">currencies: {currencies}</Card.Title>
     <Card.Title className="py-3 px-3">languages: {languages}</Card.Title>
     </Card>
    </Col>
    <Col lg="7"  >
    <h4 >Bordering Countries</h4>
    </Col>
 
  </Row>
  )
}