import './App.css';
import ColoredParagraph from './components/paragraph/paragraph';
import Button from './components/button/button';

function App() {
  return (
    <div className="container">
      <ColoredParagraph color="red" textTransform="uppercase"/>
      <Button label="Baixar CV"/>
    </div>
)}

export default App;
