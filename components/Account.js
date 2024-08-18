// src/components/Account.js
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'animate.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is included

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Validate input fields
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'username':
        newErrors.username = value.trim() ? '' : 'Username is required';
        break;
      case 'email':
        newErrors.email = /\S+@\S+\.\S+/.test(value) ? '' : 'Valid email is required';
        break;
      case 'password':
        newErrors.password = value.length >= 6 ? '' : 'Password must be at least 6 characters long';
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (isSignUp) {
      localStorage.setItem('user', JSON.stringify(formData));
      setAlertMessage('Sign Up Successful');
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        setAlertMessage('Sign In Successful');
      } else {
        setAlertMessage('Invalid credentials');
      }
    }
    setShowAlert(true);
  };

  // Validate all fields
  const validate = () => {
    const { username, email, password } = formData;
    let isValid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (isSignUp && !username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Render tooltips
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.children}
    </Tooltip>
  );

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light" id="account">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          {showAlert && (
            <Alert variant={alertMessage.includes('Successful') ? 'success' : 'danger'} className="animate__animated animate__fadeIn mb-3">
              {alertMessage}
            </Alert>
          )}
          <div className="bg-white p-4 rounded shadow-lg animate__animated animate__fadeIn">
            <h2 className="text-center mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <Form onSubmit={handleSubmit}>
              {isSignUp && (
                <Form.Group className="mb-3">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip({ children: errors.username })}
                  >
                    <Form.Label>Username</Form.Label>
                  </OverlayTrigger>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    className={errors.username ? 'animate__animated animate__shakeX' : ''}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip({ children: errors.email })}
                >
                  <Form.Label>Email</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  className={errors.email ? 'animate__animated animate__shakeX' : ''}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip({ children: errors.password })}
                >
                  <Form.Label>Password</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  className={errors.password ? 'animate__animated animate__shakeX' : ''}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-2">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button> <br></br>
              <Button variant="secondary" onClick={() => setIsSignUp(!isSignUp)} className="w-100">
                Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
