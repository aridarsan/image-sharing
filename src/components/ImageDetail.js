/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';
import NavBar from './NavBar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router';

const ImageDetail = () => {
  const [isSave, setIsSave] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  // const getList = () => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setAccount(res.data);
  //       // console.log(account);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       swal({
  //         icon: 'warning',
  //         title: 'Failed to load data',
  //         text: 'Please wait',
  //         type: 'warning',
  //         buttons: false,
  //         timer: 3000,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  const saveButton = (id, item) => {
    localStorage.setItem(id, item);
    setIsSave(true);
  };

  const removeButton = (id) => {
    localStorage.removeItem(id);
    setIsSave(false);
  };

  return (
    <>
      {/* Navbar */}
      <NavBar />
      <div className='pt-2 pb-2 mt-7'>
        <Container>
          <Row>
            <Card style={{ borderRadius: '40px', overflow: 'hidden' }}>
              <CardBody>
                <Row>
                  <Col lg='6'>
                    <img
                      src='https://via.placeholder.com/600/9c184f'
                      alt='site-img'
                      style={{ width: '100%', borderRadius: '5%' }}
                      className='mb-2'
                    />
                  </Col>
                  <Col lg='6'>
                    <Row className='mb-2 mt-3'>
                      <Col lg='9' md='9' sm='9' xs='6'>
                        <Row>
                          <Col lg='4' md='3' sm='6'>
                            <p>facebook.com</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        lg='1'
                        md='3'
                        sm='6'
                        xs='6'
                        className='m-auto ml-auto'
                      >
                        {isSave !== true ? (
                          <Button
                            color='primary'
                            onClick={() => saveButton(2, 'wkwkwk')}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            color='danger'
                            onClick={() => removeButton(2)}
                          >
                            Remove
                          </Button>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2>Lionel Messi</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum consequatur nostrum possimus quidem
                          consectetur saepe nam porro aspernatur veritatis magni
                          nobis, libero voluptatum, quos reiciendis voluptate
                          beatae, ipsum deleniti! Deleniti!
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='9' md='9' sm='9' xs='6'>
                        <Row>
                          <Col lg='2' md='3' sm='6'>
                            <img
                              src='https://via.placeholder.com/600/9c184f'
                              alt='site-img'
                              style={{ width: '50px', borderRadius: '100%' }}
                            />
                          </Col>
                          <Col lg='10' md='9' sm='3' xs='6'>
                            <h6>Facebook</h6>
                            <p>160k Followers</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg='1' md='3' sm='6' xs='6' className='m-auto ml-6'>
                        <Button color='light'>Follow</Button>
                      </Col>
                    </Row>
                    <Row className='mt-5'>
                      <Col lg='2'>
                        <Button color='light'>
                          <strong>Comments</strong>
                        </Button>
                      </Col>
                    <p style={{bottom:"0", left:"0"}} className="mt-3">This image saved by <strong>Rousli at Tayep </strong>and <strong>1K other</strong></p>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ImageDetail;
