import 'normalize.css';
import React from 'react';
import Container from '@material-ui/core/Container';

export default ({ children }) => (
  <Container maxWidth="sm">
    <h1>Ginko Express Anime North 2020</h1>
    {children}
  </Container>
);