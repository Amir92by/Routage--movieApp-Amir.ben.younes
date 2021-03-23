import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import movie5 from "../../assets/movie5.jpg"

    const  ModalAddMovie =({addMovie})=> {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      
      <>
        <span variant="primary" onClick={handleShow}> [ + ]</span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Add Movie</Form.Label>
              <Form.Control type="text"
               placeholder="Enter movie name.."
               onChange={(e)=>setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number"
               placeholder="Enter movie rating.." min={1} max={5}
               onChange={(e)=>setRating(e.target.value)}
               
               />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Close</Button>

            <Button variant="primary" 
            onClick={()=> {addMovie({ id:Math.random(), title, img: movie5, rating }) ;handleClose() }} >
            
            Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalAddMovie