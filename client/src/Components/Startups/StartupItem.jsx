import s from "../Sliders/Slider.module.css"
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p></p>
      </Modal.Body>
    </Modal>
  );
}
const StartupItem = (props) =>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [modalShow, setModalShow] = React.useState(false);
    return(

            <div className={s.card}>
                <div className={s.imgHover}> 
                        <img src={props.img} alt=""  className={s.topImg}/>
                        <Button className={s.hover_text} variant="primary" onClick={() => setModalShow(true)}>
                        Більше інформації
                        </Button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                </div>
                    <p className={s.title}>{props.title}</p>
                    {/* <p className={s.text}> {props.description}</p> */}
                <div className={s.buttons}>
                    <button className={s.money}>Підтримати</button>
                    <Button variant="primary" onClick={handleShow} className={s.talk}>
        Зв'язатися
      </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
    )
}

export default StartupItem