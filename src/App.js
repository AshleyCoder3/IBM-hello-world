
function App() {
  const currDate = new Date();
  return (
    <div>
      <h1>Ashley Burns</h1>
      <h2>It is {currDate.toLocaleDateString()} and the time is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
