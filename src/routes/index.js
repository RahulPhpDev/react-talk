import StateComponent from '../components/StateComponent';
import UseContext from '../components/UseContext';
import UseDefferedHook from '../components/UseDefferedHook';
import UseEffectComponent from '../components/UseEffectComponent';
import UseMemoization from '../components/UseMemoization';
import UseRefHook from '../components/UseRefHook';
import Todos from '../components/UserReducer/Todos';
export const routes = [
  {
    path: "/use-reducer-hook",
    element: <Todos />,
  },
  {
    path: "/use-defered-hook",
    element: <UseDefferedHook />,
  },{
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