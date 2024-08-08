import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Container>
      <Row>
        <Col id="text-center py-3">
          <p>ProShop &copy; {currentYear} </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Footer
