
import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import TopStories from './TopStories'
import NewStories from './NewStories'
import styles from './App.Module.css'



function App() {







  return (
    <React.Fragment>
      <Header></Header>
      <main className={styles.App}>

        <Switch>

          <Route path='/top' component={TopStories}></Route>

          <Route path='/new' component={NewStories}></Route>
          <Redirect from="/" exact to="/top"/>

        </Switch>


      </main>
      <Footer></Footer>
    </React.Fragment>
  );




}

export default App;
