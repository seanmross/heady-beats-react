import React, { Component } from 'react';
import {
    Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

// Custom theme
const slate = {
    bg: {
        backgroundColor: '#3B3F44'
    },
    brand: {
        color: '#FFFFFF'
    },
    item: {
        color: '#9E9E93'
    }
}

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar light fixed={'top'} expand={'md'} style={ slate.bg }>
                <Container>
                    <NavbarBrand style={ slate.brand }>
                        <h1 className='display-5'>headybeats</h1>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem  >
                                <NavLink style={slate.item}>Search</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink style={slate.item}>Playlists</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={slate.item}>
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Account
                                    </DropdownItem>
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}