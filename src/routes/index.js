import StateComponent from '../components/StateComponent';
import UseEffectComponent from '../components/UseEffectComponent';
import UseRefHook from '../components/UseRefHook';
export const routes = [
    // {
    //   path: "/about",
    //   element: <AboutUs />,
    // },
    {
      path: "/use-ref-hook",
      element: <UseRefHook />,
    },
    {
      path: "/use-effect-hook",
      element: <UseEffectComponent />,
    },
    {
      path: "/",
      element: <StateComponent />,
    },
  ];