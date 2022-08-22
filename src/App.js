import { Routes, Route } from 'react-router-dom';
import ViewAllAds from './components/ads/ViewAllAds';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="ads" element={<ViewAllAds />}>
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Routes>

    </div>
  );
}

export default App;
