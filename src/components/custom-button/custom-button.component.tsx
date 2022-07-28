import { ButtonProps, BUTTON_TYPE_CLASSES } from './custom-button.types';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './custom-button.styles';

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
);

const CustomButton = ({
  children,
  buttonType,
  isLoading,
  ...otherProps 
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton
    disabled={isLoading}
    {...otherProps}
    >
    { isLoading ? <ButtonSpinner /> : children }
  </CustomButton>
};

export default CustomButton;