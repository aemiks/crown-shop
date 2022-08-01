import { Routes, Route, } from 'react-router-dom';

import Home from "./routers/home/home.component";
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Authentication from './routers/authentication/authentication.component';

const App = () => {

  return (
    <Routes>

      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
