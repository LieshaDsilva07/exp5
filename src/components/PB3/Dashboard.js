import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import { Form, Container } from 'react-bootstrap';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const dummyUsers = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      { id: 4, name: 'David', email: 'david@example.com' },
      { id: 5, name: 'Ellie', email: 'ellie@example.com' },
      { id: 6, name: 'Fin', email: 'fin@example.com' }
    ];
    setUsers(dummyUsers);
  }, []);
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2 className="mb-4">User Dashboard</h2>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search users by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <UserTable users={filteredUsers} />
    </Container>
  );
};
export default Dashboard;
