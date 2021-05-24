import { Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Export from './components/Export';
import InvoiceList from './components/InvoiceList';
import Invoice from './components/Invoice';
import ProjectList from './components/ProjectList';
import ClientList from './components/ClientList';
import Client from './components/Client';
import Project from './components/Project';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <ProjectList />} />
        <Route exact path="/export" render={() => <Export />} />
        <Route exact path="/invoices" render={() => <InvoiceList />} />
        <Route exact path="/invoices/:id" render={(routeProps) => <Invoice {...routeProps} />} />
        <Route exact path="/projects" render={() => <ProjectList />} />
        <Route exact path="/projects/:id" render={routeProps => <Project {...routeProps} />} />
        <Route exact path="/tasks" render={() => <TaskList />} />
        <Route exact path="/clients" render={() => <ClientList />} />
        <Route exact path="/clients/:id" render={routeProps => <Client {...routeProps} />} />
        {/* <Route exact path="/addtask" render={() => <AddTask />} /> */}
      </Switch>
    </div>
  );
}

export default App;
