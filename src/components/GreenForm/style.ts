import styled from 'styled-components';
import { Typography, Box, Button } from '@mui/material';

export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledTextTitle = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '2rem',
  color: '#111b21',
}));

export const StyledContainerInputs = styled(Box)(() => ({
  marginTop: '32px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '12px',
}));

export const StyledButtonForm = styled(Button)(() => ({
  width: '90px',
  height: '37px',

  '&.MuiButton-root': {
    marginTop: '48px',
    borderRadius: '24px',
    background: '#008069',
  },

  '&.MuiButton-text': {
    fontWeight: 500,
    color: '#fff',
    textTransform: 'none',
  },
}));
