import './App.css';
import './Style.css';
import MainPanel from './Components/MainPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './Screens/MainScreen';

function AppContent() {
  console.log("this is change only dev branch4")
  console.log("this is change only dev branch1")
  console.log("this is change only dev branch2")
  console.log("this is change only dev branch3")

  console.log("test one !!!!!!!!!")

  return (
    <Routes>
      <Route exact path="/main" element={<MainPanel />} />
       <Route exact path="/" element={<MainScreen />} />
       <Route exact path="/*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
