import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Question from './Components/Questions/Question';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className=''>
      <Header></Header>
      <Product></Product>
      <Question></Question>
    </div>
  );
}

export default App;
