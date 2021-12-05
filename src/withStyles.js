import React, { Component } from "react";
export default function withStyles(OriginalComponent, styles){
    class ProxyComponent extends Component{
        componentDidMount(){
            if(this.props.staticContext){
                this.props.staticContext.csses.push(styles._getCss());
            }
        }
        render(){
            return <OriginalComponent {...this.props} />
        }
    }
    return ProxyComponent;
}