import Slider from './Slider';
import { WithStore } from '../';

export default WithStore(Slider, state => ({
  visibleSlides: state.visibleSlides,
  totalSlides: state.totalSlides,
}));
