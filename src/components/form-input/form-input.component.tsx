import {
  FormInputLabel,
  Input,
  Group,
} from './form-input.styles';

import { FormInputProps } from './form-input.types.d';

const FormInput = ({
  label,
  ...otherProps
}: FormInputProps) => (
  <Group>
    <Input
      {...otherProps}
    />
    {
      label ? (
        <FormInputLabel shrink={Boolean(otherProps?.value?.toString().length)}>
          { label }
        </FormInputLabel>
      ) : null
    }
  </Group>
)

export default FormInput;