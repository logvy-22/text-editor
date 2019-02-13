import { connect } from 'react-redux';
import Synonyms from '../../components/synonyms';
import { synonymsListSelect } from '../../selectors';
import { synonymSelectAction as handleSynonymSelect } from '../../sagas/actions';

const mapStateToProps = state => ({
  synonymsArray: synonymsListSelect(state),
});

const mapDispatchToProps = {
  handleSynonymSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Synonyms);
