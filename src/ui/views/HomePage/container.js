import { connect } from 'react-redux';
import { chartOperations } from 'store/modules/TopChart';
import HomePage from './component';

const mapDispatchToProps = {
  ...chartOperations
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
