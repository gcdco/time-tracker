import { Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Export from './components/Export';
import InvoiceList from './components/InvoiceList';
import Invoice from './components/Invoice';
import NewProject from './components/NewProject';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

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
        <Route exact path="/newproject" render={() => <NewProject />} />
        {/* <Route exact path="/projects" render={() => <ProjectList />} /> */}
        <Route exact path="/projects/:id" render={routeProps => <Project {...routeProps} />} />
        <Route exact path="/tasks" render={() => <TaskList />} />
        <Route exact path="/addtask" render={() => <AddTask />} />
      </Switch>
    </div>
  );
}

export default App;
