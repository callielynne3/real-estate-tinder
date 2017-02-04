// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
// import * as actions from '../actions/loginActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ message: state.message });

// Don't forget to actually use connect!
// Note that we don't export Welcome, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
// export default connect(mapStateToProps, actions)(Welcome);
export default connect(mapStateToProps, null)(Welcome);
