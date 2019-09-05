import React, { Component } from 'react';

class mainHead extends Component{
  constructor(){
	  super();
	  this.state = {
	    module_list:[
        {value:1,name:'系统信息',url:'',items:[{value:4,name:'系统首页',url:'index',items:[]}]},
        {value:2,name:'系统设置',url:'',items:[{value:5,name:'系统信息',url:'information',items:[]}]},
        {value:3,name:'图文中心',url:'',items:[{value:6,name:'图片管理',url:'management',items:[]}]},
	    ] 
	  }
    // 为了在回调中使用 `this`，这个绑定是必不可少的
  this.selectModule = this.selectModule.bind(this);
  }
  render() {
  	const nav = this.state.module_list.map((group,index) => {
  	  return (
        <ul>
          <li key={index} className="sub-nav-group">{group.name}</li>
          {
            group.items.map((i,index) =>{
              return (
                <li key={index} className="sub-nav-item" onClick={this.selectModule.bind(this,i.url)}>
                  {i.name}
                </li>

              )  
            })
          }
        </ul> 
  	  )
  	})
    return (
      <div className="sub-nav-warp">{nav}</div>
      )
  }
  selectModule (item) {
    var url  = '/'+item
    window.location.href = url
  };
  	 
	
}
export default mainHead;