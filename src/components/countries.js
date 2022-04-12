import React from 'react';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const Countries = ({countryData}) => {
    return (
        
        <Row>
            {countryData.map((country, index) => (
          
                   
                    <Col lg="3" className="py-5" key={index}>
                    <Card>
                    
  <Card.Body>
 <Col lg="3">
 <Card.Img  className='img-fluid' src={country.flags.png} />
 </Col>
    <Card.Title>{country.name.common}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
                    
              
                    </Col>
                    
         
            
            ))}
        </Row>
    )
};

export default Countries