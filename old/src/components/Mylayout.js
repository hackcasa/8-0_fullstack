import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import MyProduct from './Myproduct';
import axios from 'axios'

function newProduct(pro){
  var config = {
    method: 'get',
    url: 'https://dummyjson.com/products/'+pro,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

function Mylayout() {

  const [products, setProducts] = useState({})
  const [showNav, setShowNav] = useState(true)
  const [pageno, setPageNo] = useState(1)

  useEffect(() => {

      console.log("useeffect called")
      newProduct(pageno)
  })

  const changePro = () => {
    setPageNo(pageno+1)
  }
  
  return (
    <Container fluid>
        <Row>
          <Col md={2}>
          Hackcasa
          </Col>
          <Col md={6}>
            {showNav ? (<SearchBar/>) : (<></>)}
          </Col>
          <Col md={4}>
            <div onClick={() => {changePro()}}> show hide</div>
          </Col>
        </Row>
        <Row>
          
        </Row>
    </Container>
  );
}

export default Mylayout;





// component load
// data change
// props
// state