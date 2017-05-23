import Slide from './Slide';
import { WithStore } from '../';

export default WithStore(Slide, state => ({
  visibleSlides: state.visibleSlides,
  totalSlides: state.totalSlides,
}));
