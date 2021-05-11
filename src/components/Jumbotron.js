import { Container } from "reactstrap";


const Jumbotron = () => {
  return (
    <>
      <div className='pt-2 pb-2' style={{ backgroundColor: '#a2d9ff' }}>
        <Container style={{ marginTop: '6%' }}>
          <div
            style={{
              textAlign: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            className='mt-5 pt-4 pb-4'
          >
            <h5>Welcome Back,</h5>
            <h2 className='display-4' style={{ fontWeight: 'bold' }}>
              Jhon Doe
            </h2>
            <p>
              Let's manage your{' '}
              <span style={{ fontWeight: 'bold' }}>Bank Account</span> easily
              again
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Jumbotron;
