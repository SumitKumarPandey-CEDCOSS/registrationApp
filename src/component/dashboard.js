import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function Dashboard() {
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('formData')) || []);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    const entry = data[index];
    setEditedData({ ...entry });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    const updatedData = [...data];
    updatedData[editIndex] = editedData;
    setData(updatedData);
    sessionStorage.setItem('formData', JSON.stringify(updatedData));
    setEditIndex(-1);
  };

  const handleCancel = () => {
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    const confirmation = window.confirm('Are you sure you want to delete this entry?');
    if (confirmation) {
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
      sessionStorage.setItem('formData', JSON.stringify(updatedData));
    }
  };

  return (
    <div className='App'>
      <h1>Welcome to the Dashboard</h1>
      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>
                  {editIndex === index ? (
                    <input
                      type='text'
                      name='firstname'
                      value={editedData.firstname}
                      onChange={handleInputChange}
                    />
                  ) : (
                    entry.firstname
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type='text'
                      name='lastname'
                      value={editedData.lastname}
                      onChange={handleInputChange}
                    />
                  ) : (
                    entry.lastname
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type='text'
                      name='mobile'
                      value={editedData.mobile}
                      onChange={handleInputChange}
                    />
                  ) : (
                    entry.mobile
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type='email'
                      name='email'
                      value={editedData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    entry.email
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type='password'
                      name='password'
                      value={editedData.password}
                      onChange={handleInputChange}
                    />
                  ) : (
                    entry.password
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <>
                      <Button variant='success' onClick={handleUpdate}>
                        Save
                      </Button>
                      <Button variant='secondary' onClick={handleCancel}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant='primary' onClick={() => handleEdit(index)}>
                        Edit
                      </Button>
                      <Button variant='danger' onClick={() => handleDelete(index)}>
                        Delete
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Dashboard;
