import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Input = styled(TextField)(() => ({
  width: '100%',
  maxWidth: '320px',

  '& .MuiOutlinedInput-root': {
    height: '51px',
    borderRadius: '24px',
    border: '1px solid #0a0a0a',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0a0a0a',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#008069',
    },
  },
}));
