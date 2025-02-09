import ArrowDownloadIcon from '../../../icons/ArrowDownloadIcon';
import LogoIcon from '../../../icons/LogoIcon';
import TitleLogoIcon from '../../../icons/TitleLogoIcon';
import {
  LogoContainer,
  StyledContainerHeader,
  StyledDownloadButton,
} from './style';

const Header: React.FC = () => (
  <StyledContainerHeader>
    <LogoContainer>
      <LogoIcon style={{ color: '#25d366' }} />
      <TitleLogoIcon style={{ color: '#25d366' }} />
    </LogoContainer>
    <StyledDownloadButton endIcon={<ArrowDownloadIcon />}>
      Скачать
    </StyledDownloadButton>
  </StyledContainerHeader>
);

export default Header;
