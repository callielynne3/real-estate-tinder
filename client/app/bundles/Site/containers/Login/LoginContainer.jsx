import { connect } from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = (state) => ({ email: state.email });

export default connect(mapStateToProps, null)(Login);
