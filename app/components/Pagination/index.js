/**
 * Created by xiaoqi on 16/9/11.
 */
import React ,{PropTypes}from 'react';
import classNames from 'classnames';
import PaginationButton from '../PaginationButton/index.js';
import elementType from 'react-prop-types/lib/elementType';
import RaiseButton from 'material-ui/RaisedButton'

const style = {
    margin: 5,
    minWidth:40
};
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    renderPageButtons(){
        let pageButtons = [];
        let startPage, endPage, hasHiddenPagesAfter;
        let {
            maxButtons,
            activePage,
            items,
            onSelect,
            ellipsis,
            buttonComponentClass
        } = this.props;
        if(maxButtons){
            let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
            startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
            hasHiddenPagesAfter = startPage + maxButtons <= items;

            if (!hasHiddenPagesAfter) {
                endPage = items;
                startPage = items - maxButtons + 1;
                if (startPage < 1) {
                    startPage = 1;
                }
            } else {
                endPage = startPage + maxButtons - 1;
            }
        }else {
            startPage=1;
            endPage=items;
        }
        for (let pageNumber=startPage;pageNumber<=endPage;pageNumber++){
            pageButtons.push(
                <PaginationButton
                    key={pageNumber}
                    eventKey={pageNumber}
                    onClick={onSelect}
                >
                    <RaiseButton  primary={pageNumber===activePage} style={style} label={pageNumber}/>
                </PaginationButton>
            )
        }
        return pageButtons;
    };
    renderFirst(){
        if (!this.props.first) {
            return null;
        }

        return (
            <PaginationButton
                key="first"
                eventKey={1}
                disabled={this.props.activePage === 1 }
                onClick={this.props.onSelect}>
                {this.props.first === true ? <RaiseButton   disabled={this.props.activePage === 1 } style={style} label={'\u00ab'}/> : this.props.first}
            </PaginationButton>
        );
    };
    renderLast() {
        if (!this.props.last) {
            return null;
        }

        return (
            <PaginationButton
                key="last"
                eventKey={this.props.items}
                disabled={this.props.activePage >= this.props.items}
                onClick={this.props.onSelect}>
                {this.props.last === true ? <RaiseButton disabled={this.props.activePage >= this.props.items} style={style} label={'\u00bb'}/> : this.props.last}
            </PaginationButton>
        );
    };
    renderNext(){

        let {eventKey,activePage,onSelect,items,next}=this.props;
        if (!next) {
            return null;
        }
        return(
        <PaginationButton
            key="next"
            eventKey={activePage + 1}
            disabled={activePage >= items}
            onClick={onSelect}
        >
            <RaiseButton  disabled={activePage >= items} style={style} label={'\u203a'}/>
        </PaginationButton>

        )
    };
    renderPrev(){
        let {prev,eventKey,activePage,onSelect,items}=this.props;
        if(!prev){
            return null
        }
        return(
        <PaginationButton
            key="prev"
            eventKey={activePage-1}
            disabled={activePage===1}
            onClick={onSelect}>
            <RaiseButton  disabled={activePage===1} style={style} label={'\u2039'}/>
        </PaginationButton>
        )
    };
    render(){
        return(
            <ul >
                {this.renderFirst()}
                {this.renderPrev()}
                {this.renderPageButtons()}
                {this.renderNext()}
                {this.renderLast()}
            </ul>
        )
    }
}
Pagination.defaultProps={
    activePage: 1,
    items: 1,
    maxButtons: 0,
    first: false,
    last: false,
    prev: false,
    next: false,
    ellipsis: true,
    //buttonComponentClass: SafeAnchor,
    bsClass: 'pagination'
};
Pagination.prototypes={
    activePage: React.PropTypes.number,
    items: React.PropTypes.number,
    maxButtons: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    /**
     * When `true`, will display the default node value ('&laquo;').
     * Otherwise, will display provided node (when specified).
     */
    first: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.node
    ]),
    /**
     * When `true`, will display the default node value ('&raquo;').
     * Otherwise, will display provided node (when specified).
     */
    last: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.node
    ]),
    /**
     * When `true`, will display the default node value ('&lsaquo;').
     * Otherwise, will display provided node (when specified).
     */
    prev: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.node
    ]),
    /**
     * When `true`, will display the default node value ('&rsaquo;').
     * Otherwise, will display provided node (when specified).
     */
    next: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.node
    ]),
};
export  default  Pagination;