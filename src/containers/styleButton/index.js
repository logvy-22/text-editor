import { connect } from 'react-redux';
import StyleButton from '../../components/styleButton';
import { chooseStyleAction as handleChooseStyle } from '../../sagas/actions';

const mapDispatchToProps = {
  handleChooseStyle,
};

export default connect(null, mapDispatchToProps)(StyleButton);
