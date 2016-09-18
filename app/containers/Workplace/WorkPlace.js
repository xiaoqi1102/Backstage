/**
 * Created by xiaoqi on 2016/9/6.
 */
import React from 'react';
import Row from '../../components/Row'
import Col from '../../components/Col'
import TopBar from './../Topbar/Topbar'
import LeftNavBar from './../LeftNavBar/LeftNavBar';
import './workPlace.less'
class WorkPlace extends React.Component{
    render(){
        return(
            <section id="workplace">
                <TopBar/>
                <Row>
                    <Col className={'leftMenu'} >
                        <LeftNavBar/>
                    </Col>
                    <Col className="mainContent">
                        {this.props.children}
                    </Col>
                </Row>
            </section>
        )
    }
};

export  default WorkPlace;