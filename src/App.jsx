import Navber from './components/navBar/NavBar';
import styles from './App.module.scss';
import Route from './routes/Route';
import HomePage from './pages/HomePage';
import MetalcraftPage from './pages/MetalcraftPage';
import AboutPage from './pages/AboutPage';
// import LogInPage from './pages/LogInPage';
import Footer from './components/footer/Footer';

function App() {

  return (
      <div className={styles.container}>
        <Navber />
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/MetalcraftPage'>
          <MetalcraftPage />
        </Route>
        <Route path='/AboutPage'>
          <AboutPage />
        </Route>
        {/* <Route path='/LogInPage'>
          <LogInPage />
        </Route> */}
        <Footer />
      </div>
  )
}

export default App;
