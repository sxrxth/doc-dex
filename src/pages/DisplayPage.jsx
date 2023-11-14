import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs,deleteDoc, doc } from "firebase/firestore";
import Add from "../components/Add";
import Card from "react-bootstrap/Card";
import { Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../pages/DisplayPage.css"

function DisplayPage() {
  const [documents, setDocuments] = useState();
  const docRef = collection(db, "Doccument-app");
  const [change,setChange]=useState(false)
  

  const deleteDoccument = async (id) =>{
    const doccumentDoc = doc(db,"Doccument-app",id)
    await deleteDoc(doccumentDoc)
    setChange(true)

  }

  useEffect(() => {
    const getDocuments = async () => {
      const data = await getDocs(docRef);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDocuments();
    setChange(false)



  }, [change]);


  return (
<div>
 <div  className=" baaaka">
   <div className="container">
      <Add setChange={setChange} docRef={docRef} />
      <Row className="mt-4">
        {documents?.map((document) => (
          <Col key={document.id} xs={12} sm={6} md={4}>
            <Card className="custom-card">
              <Card.Body className="d-flex flex-column">
                <Link to={`/edit/${document.id}`} className="linkk">
                  <Card.Title>{document.title}</Card.Title>
                  <Card.Text>
                  { document.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0,70)}...
            </Card.Text>
                </Link>
                <Button onClick={() => deleteDoccument(document.id)} variant="white" className="trashh" >
                  <i className="fa-solid fa-trash trashh"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   </div>
   </div>
</div>


  );
}

export default DisplayPage;
