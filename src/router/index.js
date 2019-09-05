import React from 'react'
//使用了 HTML5 history API 的高阶路由组件
import { HashRouter } from 'react-router-dom'
import { Route} from 'react-router'
import {Index,Information} from '../page/index'

const routes = (
  <HashRouter>
    <div>
      <Route path="/index" component={Index}/>
      <Route path="/information" component={Information} />
    </div>
  </HashRouter>
);

export default routes;