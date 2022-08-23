import React, { useState } from 'react';
import { Config, Page, ComponentDidMount } from '@common/index';
import worker from './worker/worker';
import './css/home.scss';

// 主页
export default Page(({ history }) => {
  ComponentDidMount(() => {
    console.log('====Config', Config);
    console.log('====准备调用接口', Config.api);
  });
  const [result, setResult] = useState(0)
  function handleClick() {
    var myWorker = new Worker(worker);

    myWorker.postMessage(12);
    myWorker.onmessage = (e) => {
      console.log('来自worker的数据：' + e.data);
      setResult(e.data);
    }
  }

  return (
    <div className="comp-home">
      <div className="title">Demo项目</div>
      <img className="img" src={require('./img/logo.svg')} />
      <a
        onClick={() => {
          history.push('/user');
        }}
      >
        个人中心
      </a>
      <button onClick={handleClick}>点击事件</button>
      <p>{result}</p>
    </div>
  );
});
