import { connect } from 'react-redux';
import TextBlock from '../../components/textField';
import { checkStylesAction } from '../../sagas/actions';

const mapDispatchToProps = {
  checkStylesAction,
};

export default connect(null, mapDispatchToProps)(TextBlock);
