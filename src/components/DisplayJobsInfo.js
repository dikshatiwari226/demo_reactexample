import React from 'react';
import { Button, Card, Nav , CardDeck} from 'react-bootstrap';
const DisplayJobsInfo = () => {
    return (
       <div><br/><br/>
          <h1 className="text-center">Job Information</h1><br/>
          <div className="container">
            <div className="row">
              <CardDeck>
              <Card border="info" >
                <Card.Img variant="top" src="holder.js/100px160" style={{ height: '15rem' }}/>
                <Card.Body>
                  <Card.Title className="text-center">Job Title</Card.Title>
                  <Card.Title>Company Name:-</Card.Title>
                  <Card.Text><strong>Description:-</strong>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <div className="text-center"><Button variant="primary">Location</Button></div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Post Date</small>
                </Card.Footer>
              </Card>
              <Card border="info" >
                <Card.Img variant="top" src="holder.js/100px160" style={{ height: '15rem' }}/>
                <Card.Body>
                  <Card.Title className="text-center">Job Title</Card.Title>
                  <Card.Title>Company Name:-</Card.Title>
                  <Card.Text><strong>Description:-</strong>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <div className="text-center"><Button variant="primary">Location</Button></div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Post Date</small>
                </Card.Footer>
              </Card>
              <Card border="info" >
                <Card.Img variant="top" src="holder.js/100px160" style={{ height: '15rem' }}/>
                <Card.Body>
                  <Card.Title className="text-center">Job Title</Card.Title>
                  <Card.Title>Company Name:-</Card.Title>
                  <Card.Text><strong>Description:-</strong>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <div className="text-center"><Button variant="primary">Location</Button></div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Post Date</small>
                </Card.Footer>
              </Card>
              </CardDeck>
            </div>
          </div>

       </div>
    );
}
 
export default DisplayJobsInfo;