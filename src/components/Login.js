import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Login extends Component{
    render(){
        return(
            <div style={{ marginTop: '10rem' }}>
                <Container>
                    <Row>
                        <Col>
                            <h3>Login</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}