import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header title="상단 제목1" value={100} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
