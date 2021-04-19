import React from 'react';
import Header from './components/Header';
import Container from 'react-bootstrap'
import EmployeeDirectory from './components/EmployeeDirectory';


function App() {
  return (
<>
  <Header />
    <Container>
      <EmployeeDirectory />
    </Container>
</>
  )
}

export default App;
