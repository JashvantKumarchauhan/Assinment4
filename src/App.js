import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.type === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header toggleTheme={toggleTheme} />
          <Sidebar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/tables" component={Tables} />
            <Route path="/charts" component={Charts} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/kanban" component={KanbanPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
