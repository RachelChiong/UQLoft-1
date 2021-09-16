import React from 'react';
import Banner from '../components/Banner';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
//import DropDown
import { Dropdown } from 'react-bootstrap';
import './Homepage.css';
/*  Look into this website tutorial for creating the searchable dropdown 
    https://dzone.com/articles/fast-searchable-dropdown-inputs-with-react */

export default function Homepage() {
    return (
       <Container>
            <Banner />
            <h3>Crowd sourced, student-made platform for finding answers to all of your papers</h3>

        //inside of return
        <div className="dropdown">
                <Dropdown>
                <Dropdown.Toggle        
                variant="secondary btn-sm" 
                id="dropdown-basic">
                    Language
                </Dropdown.Toggle>
                <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                    <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        </div>


        </Container>
    );
}