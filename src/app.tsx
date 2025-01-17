import { useLocation } from '@solidjs/router';
import { type Component } from 'solid-js';
import Home from './components/home';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <>
      <Home />
    </>
  );
};

export default App;
