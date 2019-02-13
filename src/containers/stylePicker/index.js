import { connect } from 'react-redux';
import StylePicker from '../../components/stylePicker';
import { chosenStylesSelect } from '../../selectors';

const mapStateToProps = state => ({
  chosenStyles: chosenStylesSelect(state),
});

export default connect(mapStateToProps)(StylePicker);
