
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ContentWrapper from './containers/ContentWrapper';
import TableView from './containers/TableView';
import GenresView from './containers/GenresView';
import LastMovieView from './containers/LastMovieView';
import { Switch, Route } from "react-router-dom";
import Topbar from './components/Topbar/Topbar';
import ContentRowTop from './components/ContentRowTop/ContentRowTop';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <Topbar />
          <Switch>
            <Route exact path="/">
              <ContentWrapper>
                <ContentRowTop />
                <TableView />
              </ContentWrapper>
            </Route>

            <Route path="/listado-de-peliculas" component={TableView} />
            <Route path="/generos" component={GenresView} />
            <Route path="/ultima-pelicula" component={LastMovieView} />
          </Switch>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
