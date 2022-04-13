import { useState, useEffect } from "react"
import {Link } from "react-router-dom"
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Countries() {
  const [countries, setCountries] = useState([])


  const fetchCountries = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/all`
    )
    const data = await res.json()
    setCountries(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  console.log(countries)

  return (
    <Row>
      
    {countries.map(({name,capital,flags,population }) => (




 <Col lg="4" md="6" sm="6" xs="12" className="py-5" key={name}>
   <Link to={`/${name.common}`} key={name}>
 <Card>
 
<Card.Body>
<Row>
<Col lg="3" md="3" sm="3" xs="3">
<Card.Img  className='img-fluid' src={flags.png} />
</Col>
<Col lg="9" md="9" sm="9" xs="9">
<Card.Title>{name.common}</Card.Title>
<Card.Text>
{capital}
</Card.Text>
</Col>

</Row>
<Card.Text className="py-3 ">
population: {population}
</Card.Text>
</Card.Body>
</Card>
 
  </Link >
 </Col>

    ))}
  </Row>
  )
}