/**
 * Created by xiaoqi on 2016/9/5.
 */
import React from 'react';


class Doctor extends React.Component{
    render(){
        let {params:{id}}=this.props;
        return(
            <section id="doctor">
                <h3>doctor,doctor Id is {id}</h3>
            </section>
        )
    }
};

export  default  Doctor;