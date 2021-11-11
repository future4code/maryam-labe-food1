import React, { useState } from 'react';
import Router from './Routes/Routers';
import MyContext from './Contexts/myContext'

const App = () => {
  const [cart, setCart] = useState('')

  return (
    <MyContext.Provider value ={{cart, setCart}}>
      <Router />
    </MyContext.Provider>
  );
}

export default App;