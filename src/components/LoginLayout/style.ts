import styled from 'styled-components';
import { Box, Container } from '@mui/material';

export const StyledPageContainer = styled(Container)(() => ({
  height: '100vh',
  backgroundColor: '#fff5f8',

  '&.MuiContainer-root': {
    margin: 0,
    maxWidth: '100%',
    padding: '14px 40px 14px 40px',
  },
}));

export const StyledContainerForm = styled(Container)(() => ({
  marginTop: '28px',
  padding: '60px 68px 60px 68px',
  border: '1px solid #000',
  borderRadius: '25px',
  backgroundColor: ' #fff',

  '&.MuiContainer-root': {
    maxWidth: '840px',
  },
}));

export const StyledContentForm = styled(Box)(() => ({
  padding: '60px 68px 60px 68px',
}));
