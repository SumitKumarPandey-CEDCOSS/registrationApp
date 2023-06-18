import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
function Registration (props) {
  const [data, setdata] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    password: ''
  })

  const handleMethod = event => {
    setdata(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const history = useHistory()

  const save = () => {
    alert('Information saved successfully')

    const existingData = sessionStorage.getItem('formData')
    let updatedData = []

    if (existingData) {
      const parsedData = JSON.parse(existingData)
      updatedData = [...parsedData, data]
    } else {
      updatedData = [data]
    }

    sessionStorage.setItem('formData', JSON.stringify(updatedData))
    history.push('/dashboard')
  }

  return (
    <div className='App'>
      <Container className='d-flex justify-content-center'>
      <div className='mt-3'>
        <h4>Registration Page</h4>
        <Form className='mt-3'>
          <Form.Group as={Row} className='mb-3' controlId='firstname'>
            <Form.Label column sm='4'>
              First Name
            </Form.Label>
            <Col sm='8'>
              <Form.Control
                type='text'
                value={data.firstname}
                placeholder='First Name'
                onChange={handleMethod}
                name='firstname'
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='lastname'>
            <Form.Label column sm='4'>
              Last Name
            </Form.Label>
            <Col sm='8'>
              <Form.Control
                type='text'
                value={data.lastname}
                placeholder='Last Name'
                onChange={handleMethod}
                name='lastname'
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='mobile'>
            <Form.Label column sm='4'>
              Mobile No.
            </Form.Label>
            <Col sm='8'>
              <Form.Control
                type='text'
                value={data.mobile}
                placeholder='Mobile No.'
                onChange={handleMethod}
                name='mobile'
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='email'>
            <Form.Label column sm='4'>
              Email
            </Form.Label>
            <Col sm='8'>
              <Form.Control
                type='email'
                value={data.email}
                placeholder='Email'
                onChange={handleMethod}
                name='email'
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='password'>
            <Form.Label column sm='4'>
              Password
            </Form.Label>
            <Col sm='8'>
              <Form.Control
                type='password'
                value={data.password}
                placeholder='Password'
                onChange={handleMethod}
                name='password'
              />
            </Col>
          </Form.Group>
          <div className='mt-3'>
          <Button variant='primary' onClick={save}>
            Submit
          </Button>
          </div>
        </Form>
      </div>
      </Container>
    </div>
  )
}

export default Registration
