import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import './Homepage.css';

export default function Homepage() {
    function submit() {
        console.log("submitted");
    }

    return (
        <div>
            <img className="homepage-logo" src="/assets/logo_colour.svg" alt="UQLoft Logo" />
        </div>
    );
}