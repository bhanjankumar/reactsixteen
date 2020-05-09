import {connect} from 'react-redux';

import AppComponent from './components/app';
import * as action from './app-action';


const mapStateToProps = (state, currentProps) => {
  const loginSuccess = state.Search && state.Search.loginSuccess;
    return{
      loginSuccess
    }
}

export default connect(mapStateToProps,action)(AppComponent);