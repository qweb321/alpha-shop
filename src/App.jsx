import './App.css';
import StepProgress  from './components/StepProgress';
import StepForm  from './components/StepForm';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header />
    <div className="Container">
      <StepProgress />
      <StepForm />
    </div>
    </>
  );
}

export default App;
