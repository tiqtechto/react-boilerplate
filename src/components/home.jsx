import React from 'react';
import PageData from './common/PageData';

class Home extends React.Component{
    render(){
        return(
            <div>
                <PageData title='Home' description='this is a home page' />
                this is home
            </div>
        );
    }
}

export default Home;