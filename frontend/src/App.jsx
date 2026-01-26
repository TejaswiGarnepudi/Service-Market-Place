import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <LoginPage />
    <div>
      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path='/HomePage' element={<Homepage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path='/Notifications' element={<Notifications/>}/>
          <Route path='/ServiceDetails' element={<ServiceDetails/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          {/* <Route path='/user/:userId' element={<UserProfile/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
