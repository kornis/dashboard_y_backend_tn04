
import './App.css';
import { useEffect, useState } from 'react';
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

  const [movie, setMovie] = useState();
  
  useEffect( () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=7e31b006";
  
    async function fetchMovie(url) {
      const result =  await fetch(url)
      const data = await result.json()
      //setTimeout(() => setMovie(data), 5000)
      setMovie(data);
    }

    fetchMovie(url);
  },[]);

  const searchMovie = async (title) => {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=7e31b006`;
    const result = await fetch(url)
    const data = await result.json();
    setMovie(data);
  }

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <Topbar busqueda={ searchMovie } />
          <Switch>
            <Route exact path="/">
              <ContentWrapper>
                <ContentRowTop pelicula={ movie } />
                <TableView />
              </ContentWrapper>
            </Route>

            <Route path="/listado-de-peliculas" component={ TableView } />
            <Route path="/generos" component={GenresView} />
            <Route path="/ultima-pelicula" component={ LastMovieView } />
          </Switch>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
