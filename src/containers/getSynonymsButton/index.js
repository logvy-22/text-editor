import { connect } from 'react-redux';
import GetSynonymsButton from '../../components/getSynonymsButton';
import { getSynonymsAction as getSynonyms } from '../../sagas/actions';

const mapDispatchToProps = {
  getSynonyms,
};

export default connect(null, mapDispatchToProps)(GetSynonymsButton);
