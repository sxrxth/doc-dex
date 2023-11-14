import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { addDoc } from 'firebase/firestore';

function Add({ docRef ,setChange}) {
  const [newTitle, setTitle] = useState('');

  const addDocument = async () => {
    await addDoc(docRef, {
       title: newTitle,
       description:""
    
    
    });
    setChange(true)
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <Form className="w-50">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button onClick={addDocument} variant="dark">
          Create Document
        </Button>
      </Form>
    </div>
  );
}

export default Add;
