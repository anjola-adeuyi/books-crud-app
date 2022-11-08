import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Add, Books, Update } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
