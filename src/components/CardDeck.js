import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { observer } from 'mobx-react'

@observer
export default class Cards extends Component {
    render(){
        let store = this.props.store.albums
        return (
            <CardDeck>
                {
                    store.map(album => (
                        <Card key={album.id}>
                            <CardImg top width="100%" src={album.albumCover} alt="Card image cap" />
                            <CardBody>
                                <CardTitle> {album.song} </CardTitle>
                                <CardSubtitle> {album.artist} </CardSubtitle>
                                <CardText> {`${album.albumTitle}, ${album.year}`} </CardText>
                                <Button>Go To Album</Button>
                            </CardBody>
                        </Card>
                    ))
                }
            </CardDeck>
        )

    }   
}