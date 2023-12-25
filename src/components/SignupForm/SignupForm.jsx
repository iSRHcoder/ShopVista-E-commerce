import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const { addUserDataHandler } = useContext(UserContext);

  const user = {
    name: name,
    userName: userName,
    email: email,
    password: password,
  };

  const isValidateForm = () => {
    if (!name || !userName || !email || !password) {
      setIsError(true);
      setIsSignup(false);
      return false;
    }
    setIsSignup(true);
    setIsError(false);
    return true;
  };

  const signupBtnClickHandler = () => {
    if (isValidateForm()) {
      addUserDataHandler(user);
      setIsSignup(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  const resetFormHandler = () => {
    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="d-inline-block">
        <Row className="mb-2">
          <Col>Name :</Col>
          <Col>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>User Name :</Col>
          <Col>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>Email :</Col>
          <Col>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>Password :</Col>
          <Col>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button onClick={signupBtnClickHandler}>Sign Up</Button>
          </Col>
          <Col>
            <Button variant="link" onClick={resetFormHandler}>
              Reset Form
            </Button>
          </Col>
        </Row>
      </div>
      {isError && (
        <div className={styles.errorMsg}>
          <h5 className="text-danger">Please fill all the fields...!</h5>
        </div>
      )}
      {isSignup && (
        <div className={styles.successMsg}>
          <h5 className="text-success">User created Successfully...!</h5>
          <p>You will be re-directed to the Login page in 3 seconds</p>
        </div>
      )}
    </>
  );
};

export default SignupForm;
