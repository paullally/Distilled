import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
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
    <Row>
      
    {country.map(({name,capital,flags,population }) => (




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