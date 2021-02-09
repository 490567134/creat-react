import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/main';
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/lib/locale/zh_CN';
import { HashRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Main />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
