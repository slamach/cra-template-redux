import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World!</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
