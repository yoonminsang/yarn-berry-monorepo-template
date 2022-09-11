import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@common/components';
import { COMMON_CONST } from '@common/const';
import { useInterval } from '@common/hooks';
import { ICommon } from '@common/types';
import { isKorean } from '@common/utils/validations';
import Loading from 'components/Loading';

function App() {
  const [count, setCount] = useState(0);
  useInterval(() => console.log('useInterval'), 1000);
  console.log(COMMON_CONST);
  const common: ICommon = {
    common: 'sdf',
  };
  useEffect(() => {
    console.log('common', common);
    console.log('sdf isKrorea', isKorean('sdf'));
    console.log('sdf isKrorea', isKorean('ㅁㄴㅇ'));
  }, []);
  return (
    <div className="App">
      <Loading />
      <Button>버튼</Button>
      <Button isLoading>버튼</Button>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
