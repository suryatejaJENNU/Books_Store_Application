import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';

import Home from './Components/Home/index.js'

import BookDetails  from './Components/BookDetails/index.js';

import BookList  from './Components/BookList/index.js';

import Cart from './Components/Cart/index.js';

import Checkout  from './Components/Checkout/index.js';

import NotFound from './Components/NotFound/index.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/books" component = {BookList} />
        <Route exact path = "/books/:id" component = {BookDetails} />
        <Route exact path = "/cart" component = {Cart} />
        <Route exact path = "/checkout" component = {Checkout} />
        <Route exact path = "/not-found" component = {NotFound} />
        <Redirect to = "/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
