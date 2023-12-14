import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Button from'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function BookModal(props) {

    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        await props.onCreate({
            title: event.target.formTitle.value,
            description: event.target.formDescription.value,
            status: event.target.formStatus.value,
        })
        navigate('/') // the forward slash takes to home directory
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>
                </Form>
                <button type="submit">Submit</button>
            </Modal>
        </div>
    )
}
