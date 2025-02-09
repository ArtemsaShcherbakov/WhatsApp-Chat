import styled from 'styled-components';
import Logo from '../../assets/icons/arrow-download.svg';

interface StyledArrowDownloadProps {
  styleIcon: React.CSSProperties; // Accept the styleIcon prop with inline styles
}

export const StyledArrowDownload = styled(Logo)<StyledArrowDownloadProps>`
  width: ${props => props.styleIcon?.width || 'auto'};
  height: ${props => props.styleIcon?.height || 'auto'};
  fill: ${props => props.styleIcon?.color || 'currentColor'};
`;
