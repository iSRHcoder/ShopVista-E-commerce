import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import route from "./../../routes/routes.json";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { UserContext } from "../../Contexts/UserContext";
import { useSelector } from "react-redux";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { isAuth, logoutHandler } = useContext(AuthContext);
  const { userData } = useContext(UserContext);

  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white fs-5 fw-bold text-decoration-none"
      : "text-decoration-none text-white";

  const { lightToDarkHandler, isDark, darkToLightHandler } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill fs-5"
    : "bi bi-moon-fill fs-5";

  const darkClickHandler = isDark ? darkToLightHandler : lightToDarkHandler;

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header>
      <Navbar
        bg="primary"
        expand="md"
        variant="dark"
        className={styles.AppHeader}
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src="/Images&svg's/logo-svgrepo-com.svg"
                alt="shop-vista-logo"
                style={{ width: "2rem", marginRight: "1rem" }}
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to={route.PRODUCTS} className={activeClasses}>
                  Products
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={route.SUPPORT} className={activeClasses}>
                  Support
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={route.CONTACT_US} className={activeClasses}>
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>

            {!isAuth && (
              <>
                <NavLink to={route.LOGIN}>
                  <Button className="me-2" variant="outline-warning">
                    LogIn
                  </Button>
                </NavLink>
                <NavLink to={route.SIGNUP}>
                  <Button className="me-2" variant="outline-warning">
                    SignUp
                  </Button>
                </NavLink>
              </>
            )}

            {isAuth && (
              <>
                <NavLink>
                  <Button
                    className="me-2"
                    variant="outline-warning"
                    onClick={logoutHandler}
                  >
                    LogOut
                  </Button>
                </NavLink>
                <Button className="me-2">
                  <i className="bi bi-person-fill fs-5"></i>
                  {userData.userName}
                </Button>
                <NavLink to={route.CART} className={activeClasses}>
                  <Button className="me-2">
                    <i className="bi bi-cart4 fs-5">{cartCount}</i>
                  </Button>
                </NavLink>
              </>
            )}

            <Button onClick={darkClickHandler}>
              <i className={iconClasses}></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
