import React from 'react';
import PropTypes from 'prop-types';
import facebook from '../image/facebook.svg';
import linkedin from '../image/linkedin.svg';
import instagram from '../image/instagram.svg';
import whatsapp from '../image/whatsapp.svg';
import { Container } from 'reactstrap';

function Copyright() {
  return (
    <h6 className='text-center'>
      {'Copyright © '}
      <a href='https://instagram.com/ari_darsan '>@ari_darsan</a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </h6>
  );
}

export default function Footer(props) {
  return (
    <footer id='footer' data-aos='zoom-in'>
      <div style={{ backgroundColor: '#a2d9ff' }} className='p-4 mt-4'>
        <Container>
          <h6 className='text-center'>Made with Great Effort and Pride</h6>
          <Copyright />
          <div
            style={{
              paddingTop: '1rem',
              display: 'flex',
              margin: 'auto',
              justifyContent: 'center',
            }}
          >
            <a
              href='https://www.facebook.com/darsan.ari'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={facebook}
                alt='facebook'
              />
            </a>
            <a
              href='https://linkedin.com/in/aridarsan'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={linkedin}
                alt='linkedin'
              />
            </a>
            <a
              href='https://instagram.com/ari_darsan'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={instagram}
                alt='instagram'
              />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=6281222288153'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={whatsapp}
                alt='google'
              />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
