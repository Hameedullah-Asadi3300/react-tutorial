import Modal from './Modals.js';
  

function App() {
  return (
    <div className="App">

      {/* The Modal hoever is nested inside the APP component, but it is not part of the <div id="root"></div>*/}
      <Modal />
     
    </div>
  );
}
export default App;
