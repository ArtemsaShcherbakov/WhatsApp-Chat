import { useState } from 'react';
import CustomInput from '../../components/UI/CustomInput';
import {
  StyledTextTitle,
  StyledContainer,
  StyledContainerInputs,
  StyledButtonForm,
} from './style';

type EventInputType = React.ChangeEvent<HTMLInputElement>;

const initStateDataGreen = {
  idInstance: '',
  apiTokenInstance: '',
};

const GreenForm: React.FC = () => {
  const [dataGreen, setDataGreen] =
    useState<typeof initStateDataGreen>(initStateDataGreen);

  const handleInput = (event: EventInputType): void => {
    const value: string = event.target.value;
    const nameField: string = event.target.name;

    setDataGreen({ ...dataGreen, [nameField]: value });
  };

  return (
    <StyledContainer>
      <StyledTextTitle variant="h5">
        Введите данные из системы GREEN-API
      </StyledTextTitle>
      <StyledContainerInputs>
        <CustomInput
          typeInput="text"
          onChange={handleInput}
          valueInput={dataGreen.idInstance}
          nameInput="idInstance"
        />
        <CustomInput
          typeInput="text"
          onChange={handleInput}
          valueInput={dataGreen.apiTokenInstance}
          nameInput="apiTokenInstance"
        />
      </StyledContainerInputs>
      <StyledButtonForm>Далее</StyledButtonForm>
    </StyledContainer>
  );
};

export default GreenForm;
