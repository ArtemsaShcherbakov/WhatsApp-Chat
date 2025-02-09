import { SxProps } from '@mui/material';
import { Input } from './style';

interface ICustomInputProps {
  typeInput: string;
  nameInput?: string;
  valueInput: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styleInput?: SxProps;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  typeInput,
  nameInput,
  valueInput,
  onChange,
  error,
  styleInput,
}) => (
  <Input
    type={typeInput}
    sx={styleInput}
    name={nameInput}
    value={valueInput}
    error={!!error}
    onChange={onChange}
    variant="outlined"
  />
);

export default CustomInput;
