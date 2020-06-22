import React,{ Component,useState } from 'react';
import Style from '../styles/HomeStyle.module.css'
import DrawerApp from '../components/Drawer'
import { Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';
import Header from '../components/PageHeader'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.setState = {

        }
    }

    render() {
        return (
            <>
            <Navbar className={`m-2 ${Style.Navbar}`} light expand="md" fixed>
            <NavbarBrand >
                <DrawerApp/>
            </NavbarBrand>
                <Collapse isOpen={true} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                    <NavItem>
                    </NavItem>
                    <DropdownToggle nav caret>
                        All Kategori 
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        All Times
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            <Container fluid={true}>

            </Container>
            </>
        )
    }
}

export default HomePage