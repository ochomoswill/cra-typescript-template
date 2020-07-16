import React, { FunctionComponent } from 'react';
import { Button } from 'antd';

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = (props) => {
  return (
    <main
      style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="foo.bar">I'm a link. Click me, please!</a>
    </main>
  );
};

export default App;
