import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Edit.css"
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DisplayPage from './DisplayPage';
import "../components/bootstrap.min.css"

const QuillEditor = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue || '');
  const [obj, setObj] = useState(); 

  const { id } = useParams();


  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'list', 'bullet',
    'link', 'image', 'video',
  ];

  useEffect(() => {
    const docRef = collection(db, "Doccument-app");
    const getDocuments = async () => {
      const data = await getDocs(docRef);
      const initialContent = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).find(item => item.id === id).description;
      setObj(initialContent); 
      setValue(initialContent); 
    };
    getDocuments();
  }, [id]);

  const handleChange = (content) => {
    setValue(content);
    if (onChange) {
      onChange(content);
      setValue(content);
    }
  };

  console.log(value);

    const handleUpdate=async (id)=>{
    const textDoc=doc(db,"Doccument-app",id);
    await updateDoc(textDoc,{description:value})
  
   }

  return (
    <div className="quill-container">
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder="Write something amazing..."
    />
    <Button className='btn btn-success' onClick={() => handleUpdate(id)}>Save</Button>
    <Link to={"/displayPage"}><Button className='btn btn-primary m-3'>Go back</Button></Link>

  </div>
  );
};

export default QuillEditor;
