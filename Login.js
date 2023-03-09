import React from 'react'
import {Form, Button, Container} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault() //form에서 쓰면 refresh하는걸 방지해줌
    console.log("login user function issue")
    setAuthenticate(true)
    navigate("/")
  }

  return (
    <div>
    <Container className='login-form'>
      <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Login

                // {/* 로그아웃(메인) 화면으로 */}
                // <div className='' onClick={main}>
                
                // </div>