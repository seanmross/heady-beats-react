import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { observer } from 'mobx-react'

@observer
export default class Cards extends React.Component {
    render(){
        return (
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={ this.props.AlbumStore.albums[0].albumCover } alt="Card image cap" />
                    <CardBody>
                        <CardTitle> { this.props.AlbumStore.albums[0].song } </CardTitle>
                        <CardSubtitle> { this.props.AlbumStore.albums[0].artist } </CardSubtitle>
                        <CardText> { `${this.props.AlbumStore.albums[0].album}, ${this.props.AlbumStore.albums[0].year}` } </CardText>
                        <Button>Go To Album</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={this.props.AlbumStore.albums[1].albumCover} alt="Card image cap" />
                    <CardBody>
                        <CardTitle> {this.props.AlbumStore.albums[1].song} </CardTitle>
                        <CardSubtitle> {this.props.AlbumStore.albums[1].artist} </CardSubtitle>
                        <CardText> {`${this.props.AlbumStore.albums[1].album}, ${this.props.AlbumStore.albums[1].year}`} </CardText>
                        <Button>Go To Album</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        )
    }   
}