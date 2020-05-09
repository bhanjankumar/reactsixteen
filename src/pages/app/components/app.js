import React,{PureComponent} from 'react';
import Header from '../../common/header-container';
import Footer from '../../common/components/footer';
import HomePage from '../../home/home-container';
import SearchPage from '../../search/search-container';


class AppComponent extends PureComponent{

    
    render(){
        const {loginSuccess} = this.props;
        return(
            <div>
                   <Header/>
                   {loginSuccess == false ?
                    (<HomePage />):''
                   }
                   {loginSuccess==true ?
                    (<SearchPage/>):''
                   }
                    <Footer/>
            </div>
        )
    }
}

export default AppComponent;