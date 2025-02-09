import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const StyledContainerHeader = styled(Box)(() => ({
  width: '100%',
  height: '52px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
}));

export const StyledDownloadButton = styled(Button)(() => ({
  width: '162px',
  height: '52px',

  '&.MuiButton-root': {
    color: '#111b21',
    textTransform: 'none',
    borderRadius: '26px',
    background: '#25d366',
    border: '1px solid #111b21',
  },
}));
