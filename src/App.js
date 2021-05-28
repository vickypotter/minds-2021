import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventList from './Components/Events/EventList';
// import ArtistryEvent from "./Components/Events/EventDescription/ArtistryEvent";
import InvenirerEvent from "./Components/Events/EventDescription/InvenirerEvent";
import KodekombatEvent from "./Components/Events/EventDescription/KodekombatEvent";
import NethuntEvent from "./Components/Events/EventDescription/NethuntEvent";
// import RendezvouEvent from "./Components/Events/EventDescription/RendezvouEvent";
import ThinklyticsEvent from "./Components/Events/EventDescription/ThinklyticsEvent";
import FullNav from './Components/NavMenu/FullNav';
import Home from './Components/HomePage/Home';
import Schedule from './Components/SchedulePage/Schedule';
import ScrollToTop from 'react-router-scroll-top'
import './App.css';
import NotFound from './Components/NotFound/NotFound';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <div className="App">
      <Router>
        <FullNav />
        <main>
          <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/#about' component={Home}/>
            <Route exact path='/events' component={EventList}/>
            <Route exact path='/schedule' component={Schedule}/>
            {/* <Route exact path='/artistry' component={ArtistryEvent}/> */}
            <Route exact path='/invenirer' component={InvenirerEvent}/>
            <Route exact path='/kodekombat' component={KodekombatEvent}/>
            <Route exact path='/nethunt' component={NethuntEvent}/>
            {/* <Route exact path='/rendezvous' component={RendezvouEvent}/> */}
            <Route exact path='/thinklytics' component={ThinklyticsEvent}/>
            <Route component={NotFound}/>
          </Switch>
          </ScrollToTop>
        </main>        
      </Router>
    </div>
  );
}

export default App;
