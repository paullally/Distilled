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
  let curtitle = "Currency"
  let langtitle = "Language"
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

    country.forEach((country) =>{
      population=country.population
      flag = country.flags.png
      capital = country.capital
      currencies = Object.keys(country.currencies)
      Object.values(country.languages).forEach(language=>{
        languages.push(language)
      })
      if (country.borders)
      {
        borders = Object.values(country.borders)
      }
      
    
      
    })
    if(currencies.length>1)
    {
      curtitle = "Currencies"
    }
    if(languages.length>1)
    {
      langtitle = "Languages"
    }
    if(borders.length>0)
    {
      return (
        <div key={name}>
         
          <Row className =  "d-flex justify-content-center py-5 "  >
         
         <Col lg="6" className =  "d-flex justify-content-start " >
         <Link to={`/`}   className="btn btn-danger my-4">Back</Link>
       
   
        </Col>
        <Col lg="12" className =  "d-flex justify-content-center " >
          <img src={flag} alt="Country Flag"></img>
        </Col>
        <Col lg="7" className="py-3" >
         <Card >
         <Card.Title className="py-2 px-3">{name}</Card.Title>
         <Card.Title className="py-2 px-3">Capital: {capital}</Card.Title>
         <Card.Title className="py-2 px-3">Population: {population}</Card.Title>
         <Card.Title className="py-2 px-3">{curtitle}: {currencies}</Card.Title>
         <Card.Title className="py-2 px-3">{langtitle}: {languages.map((language) => (
            <span key={language}>  {language}</span>
    ))}
    </Card.Title>
         </Card>
        </Col>
        <Col  lg ="7" className= "py-3 " >
             <h4 className= "py-3 mx-1 " >Bordering Countries: </h4>
          <Row className="px-3">
          {borders.map((border) => (
         <Col lg="2" md="2" sm="4" xs="4"  className=" mb-2 border-tile mx-1  text-center" key={border}>{border}</Col>
    ))}
          </Row>
       
        </Col>
        
        
      
    
      </Row>
        </div>
        
      )

    }
  else
  {
    return (
      <div key={name}>
         
      <Row className =  "d-flex justify-content-center py-5 "  >
     
     <Col lg="6" className =  "d-flex justify-content-start " >
     <Link to={`/`}   className="btn btn-danger my-4">Back</Link>
    </Col>
    <Col lg="12" className =  "d-flex justify-content-center " >
      <img src={flag} alt="Country Flag"></img>
    </Col>
    <Col lg="7" className="py-3" >
     <Card >
     <Card.Title className="py-2 px-3">{name}</Card.Title>
     <Card.Title className="py-2 px-3">Capital: {capital}</Card.Title>
     <Card.Title className="py-2 px-3">Population: {population}</Card.Title>
     <Card.Title className="py-2 px-3">{curtitle}: {currencies}</Card.Title>
     <Card.Title className="py-2 px-3">{langtitle}: {languages.map((language) => (
        <span key={language}>  {language}</span>
))}
</Card.Title>
     </Card>
    </Col>
    <Col  lg ="7" className= "py-3 " >
         <h4 className= "py-3 mx-1 " >No Bordering Countries: </h4>

   
    </Col>
    
    
  

  </Row>
    </div>
    
      
    )
  }
}





