import React,{Component} from 'react'

import TransitionGroup from 'react-addons-transition-group';

import {findDOMNode} from 'react-dom'

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Box extends Component{
    componentWillEnter(cb){
        const el=findDOMNode(this)
        TweenMax.fromTo(el,0.3,{y:100,opacity:0},{y:0,opacity:1.0,onComplete:cb});
    }
    componentWillLeave(cb){
        const el=findDOMNode(this)
        TweenMax.fromTo(el,0.3,{y:0,opacity:1.0},{y:100,opacity:0,onComplete:cb});
    }
    render(){
        return(
        <div className="box">
            <style >{`
            .box{
              color:red;
              background:blue;
              width:50px;
              height:50px;
              margin-top:10px;
            }
          `}</style>
        </div>
        )
    }
}

class Box2 extends Component{
    
    render(){
        return(
        <div className="box2">
            <style >{`
            .box{
              color:red;
              background:blue;
              width:50px;
              height:50px;
              margin-top:10px;
            }
          `}</style>
        </div>
        )
    }
}

class Box3 extends Component{
    componentWillEnter(cb){
        const el=findDOMNode(this)
        TweenMax.fromTo(el,0.3,{x:100,opacity:0},{x:0,opacity:1.0,onComplete:cb});
    }
    componentWillLeave(cb){
        const el=findDOMNode(this)
        TweenMax.fromTo(el,0.3,{x:0,opacity:1.0},{x:100,opacity:0,onComplete:cb});
    }
    render(){
        return(
        <div className="box3">
            <style >{`
            .box3{
              color:red;
              background:brown;
              width:50px;
              height:50px;
              margin-top:10px;
            }
          `}</style>
        </div>
        )
    }
}

class AnimateBox extends Component{
    // getInitialState(){
    //     return {
    //         shouldShowBox: true
    //     }
    // }
    constructor(props){
        super(props)
        this.state={
            shouldShowBox:true
        }
    }
    toggleBox(){
        this.setState({
      shouldShowBox: !this.state.shouldShowBox
        });
    }
    render(){
        return (

            <div className="animate-box">
                <style>{`
                    .example-enter {
                    opacity: 0.01;
                    }

                    .example-enter.example-enter-active {
                    opacity: 1;
                    transition: opacity 500ms ease-in;
                    }

                    .example-leave {
                    opacity: 1;
                    }
                    .box2{
                        color:red;
                        background:green;
                        width:50px;
                        height:50px;
                        margin-top:10px;
                    }
                    .example-leave.example-leave-active {
                    opacity: 0.01;
                    transition: opacity 300ms ease-in;
                    }
                                        `}</style>
                <div>
                    <button onClick={this.toggleBox.bind(this)}>
                            Button
                        </button>
                    <TransitionGroup>
                        {this.state.shouldShowBox&&<Box/>}
                    </TransitionGroup>
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {this.state.shouldShowBox&&<Box2/>}
                    </ReactCSSTransitionGroup>
                     <TransitionGroup>
                        {this.state.shouldShowBox&&<Box3/>}
                    </TransitionGroup>
                </div>
                
            </div>
            
        )
    }
}

export default AnimateBox;