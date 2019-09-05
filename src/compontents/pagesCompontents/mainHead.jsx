import React, { Component } from 'react';

class mainHead extends Component{
  constructor(){
	super();
	this.state = {
	  head_list:[
	    {value:1,name:'系统'},
	    {value:2,name:'账号'},
	    {value:3,name:'积分'},
	    {value:4,name:'支付'},
	    {value:5,name:'资源'},
	    {value:6,name:'用户'}
	  ]
	}
	// 为了在回调中使用 `this`，这个绑定是必不可少的
	this.selectModule = this.selectModule.bind(this);
  }
  render() {
  	var nav = this.state.head_list.map((item,index) => {
  	  return (<div key={item.value} className="main-heade-nav" onClick={this.selectModule.bind(this,item.name)} value={item.name}>{item.name}</div>)
  	})
	return (
	  <div className="main-head">
	    <div className="main-head-log">
          <img src="https://admin.bopuyun.com/static/images/icon-zhiku-logo.svg" alt="" />
	    </div>
	    {nav}
	  </div> 
    )
  }
  selectModule (item) {
  	// if (item === this.module_selected.name) {
   //    return
   //  }
  };
  
	
}
export default mainHead;