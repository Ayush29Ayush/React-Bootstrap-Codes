// import React from 'react'
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const AlertExample = () => {
  return (
    // <div>
    //   {[
    //     "primary",
    //     "secondary",
    //     "success",
    //     "danger",
    //     "warning",
    //     "info",
    //     "light",
    //     "dark",
    //   ].map((variant) => (
    //     <Alert key={variant} variant={variant}>
    //       This is a {variant} alert—check it out!
    //     </Alert>
    //   ))}
    // </div>

    <div>
      <Container className="text-center">
        <Card>
          {/* <Alert variant="danger">Danger</Alert> */}
          {/* <Alert variant="primary"> */}
          {/* <Alert variant="primary" dismissible> */}
          <Alert show={true} variant="primary" dismissible>
            <Alert.Heading>This is a primary alert heading</Alert.Heading>
            <p>This is the body of this alert.</p>
            <div>This is a div of this alert.</div>
          </Alert>
        </Card>
      </Container>
    </div>
  );
};

export default AlertExample;
