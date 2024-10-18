import StateComponent from '../components/StateComponent';
import UseEffectComponent from '../components/UseEffectComponent';
export const routes = [
    // {
    //   path: "/about",
    //   element: <AboutUs />,
    // },
    // {
    //   path: "/you-might-not-need-an-effect",
    //   element: <UseEffectHook />,
    // },
    {
      path: "/use-effect-hook",
      element: <UseEffectComponent />,
    },
    {
      path: "/",
      element: <StateComponent />,
    },
  ];