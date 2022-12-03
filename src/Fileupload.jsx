import React from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Fileupload() {

    const [file, setFile] = useState(null);

    const UPLOAD_ENDPOINTedit = 'http://localhost:8000/api/fileinsert';


    const handleSubmitmembereditdetails = async (e) => {
        e.preventDefault();

        let res = await uploadFile();
       
console.log(res);

    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('profile', file)

        return await axios.post(UPLOAD_ENDPOINTedit,
            formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }

    const handleOnChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }



  return (
    <>
          <div className='container mt-5'>
              <span></span>
            
              <Form onSubmit={handleSubmitmembereditdetails}>
                  <div className='row'>
                      <div className='col-8'>
                          <Form.Control
                                    type="file"
                                    onChange={handleOnChange}   
                                />
                      </div>
                      <div className='col-4'>
                      <Button className="mem-btn" constiant="primary" type="submit">
                        Submit
                      </Button>
                      </div>
                      
                  </div>
              </Form>
          </div>

    </>
  )
}