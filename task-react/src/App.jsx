import './index.css';
import LoginState from './components/loginform/LoginState';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ToggleButton from './components/task1/ToggleButton';
import Todo from './components/Todo';


const router = createBrowserRouter([
  {path:"/", element: <Home></Home>,
    children:[
      {path:"/form", element: <LoginState></LoginState>},
      {path:"/toggle", element: <ToggleButton></ToggleButton>},
      {path:"/todo", element: <Todo></Todo>}
    ]
  },
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
