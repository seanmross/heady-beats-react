import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardDeck from './CardDeck'

class Landing extends Component{
    render(){
        return (
            <div style={{marginTop:'10rem'}}>
                <Container>
                    <Row>
                        <Col>
                            <h3>Landing</h3>
                        </Col>
                    </Row>
                    <Row>
                        <CardDeck />
                    </Row>
                </Container>
            </div>
        )
    }
}
 export default Landing