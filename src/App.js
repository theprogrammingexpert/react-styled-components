import './App.css';
import { Button, ButtonContainer } from './components/Button';

function App() {
  return (
    <ButtonContainer>
      <Button primary={true}>Primary Button</Button>
      <Button primary={false}>Secondary Button</Button>
    </ButtonContainer>
  );
}

export default App;
