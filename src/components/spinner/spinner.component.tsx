import {
  SpinnerOverlay,
  SpinnerContainer,
} from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer data-testid='spinner' />
  </SpinnerOverlay>
);

export default Spinner;
