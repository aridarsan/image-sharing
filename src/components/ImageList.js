/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import swal from 'sweetalert';
import '../App.css';

const ImageList = () => {

    const history = useHistory();
    const [list, setList] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    const getList = () => {
      axios
        .get(url)
        .then((res) => {
          setList(res.data);
          // console.log(list);
        })
        .catch((err) => {
          console.log(err);
          swal({
            icon: 'warning',
            title: 'Failed load data',
            text: 'Please try again',
            type: 'warning',
            buttons: false,
            timer: 3000,
          });
        });
    };

    useEffect(() => {
      getList();
    }, []);

    return (
      <>
        <Container fluid className='mb-3 mt-3'>
          <Row>
            {list.length !== 0 ? (
              list.map((list, index) => (
                <>
                  <Col lg='3' md='4' sm='6' xs="6" className='mb-4' key={index}>
                    <Card
                      className='card'
                      onClick={() => {
                        history.push(`/detail`);
                      }}
                      style={{borderRadius:"8%", overflow:"hidden"}}
                    >
                        <img style={{borderRadius:"8%", overflow:"hidden"}} src={list.thumbnailUrl} alt="imager"/>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <Col
                lg='12'
                className='m-auto mb-5 text-center'
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Spinner color='primary' />
                <h5>Loading....</h5>
                <Button color='primary' onClick={getList}>
                  Retry
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  };


export default ImageList;
