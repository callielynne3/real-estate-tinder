// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Login from '../components/Login';
// import * as actions from '../actions/loginActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ email: state.email });

// Don't forget to actually use connect!
// Note that we don't export Login, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
// export default connect(mapStateToProps, actions)(Login);
export default connect(mapStateToProps, null)(Login);
