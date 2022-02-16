// import './App.css';
import './index.css';

import Nav from './component/nav';
import Footer from './component/footer';
import Body from './component/body';
import Form from './component/form';


function App() {
  return (
    <div className="App">

		<Nav logoname = 'Gooditech' />

		<Footer />
		<Body />
    <Form />
    

     
    </div>
  );
}

export default App;
