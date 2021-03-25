import './css/App.css';
import Header from './Header';
import BodyContent from './Content';
import Footer from './Footer';

const App = ()=> {
  return (
      <div className="App">
          <Header />
          {/*<div className="sticky-footer"><div>*/}
          <BodyContent />
          <Footer />
      </div>
  );
}

export default App;
