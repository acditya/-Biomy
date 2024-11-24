import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';
import ResultsPage from './pages/ResultsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </Router>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Order from './pages/Order';
// import ResultsPage from './pages/ResultsPage';
// import Login from './pages/Login';
// import Signup from './pages/SignUp';
// import './App.css';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user is already logged in (e.g., from localStorage)
//     const loggedInUser = localStorage.getItem('user');
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser));
//     }
//   }, []);

//   const handleLogin = (user) => {
//     setUser(user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <Router>
//       <Navbar user={user} handleLogout={handleLogout} />
//       <Switch>
//         <Route path="/login">
//           {user ? <Redirect to="/" /> : <Login setUser={handleLogin} />}
//         </Route>
//         <Route path="/signup">
//           {user ? <Redirect to="/" /> : <Signup setUser={handleLogin} />}
//         </Route>
//         <Route path="/">
//           {user ? (
//             <>
//               <Route path="/" exact component={Home} />
//               <Route path="/order" component={Order} />
//               <Route path="/results" component={ResultsPage} />
//             </>
//           ) : (
//             <Redirect to="/login" />
//           )}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;