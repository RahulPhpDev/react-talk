import StateComponent from '../components/StateComponent';
import UseContext from '../components/UseContext';
import UseEffectComponent from '../components/UseEffectComponent';
import UseMemoization from '../components/UseMemoization';
import UseRefHook from '../components/UseRefHook';
export const routes = [
    {
      path: "/use-memoization",
      element: <UseMemoization />,
    },
    {
      path: "/use-ref-hook",
      element: <UseRefHook />,
    },
    {
      path: "/use-effect-hook",
      element: <UseEffectComponent />,
    },
    {
      path: "/use-context-hook",
      element: <UseContext />,
    },
    {
      path: "/",
      element: <StateComponent />,
    },
  ];