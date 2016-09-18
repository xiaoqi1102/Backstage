/**
 * Created by xiaoqi on 2016/9/5.
 */
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section id="app">
                {this.props.children}
            </section>
        )
    }
}
export default  App;