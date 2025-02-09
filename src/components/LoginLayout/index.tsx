import { PropsWithChildren } from 'react';
import Header from './Header';
import {
  StyledPageContainer,
  StyledContainerForm,
  StyledContentForm,
} from './style';

const LoginLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledPageContainer>
    <Header />
    <StyledContainerForm>
      <StyledContentForm>{children}</StyledContentForm>
    </StyledContainerForm>
  </StyledPageContainer>
);

export default LoginLayout;
