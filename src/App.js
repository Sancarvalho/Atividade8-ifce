import React, {Component } from 'react';
import api from './api';
import style  from  './style.css';
class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const resposta = await api.get('good');

    this.setState({ filmes: resposta.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div id='teste'>
        <h1><center>Lista de filmes</center></h1>
        {filmes.map(filme => (
          <center><li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              Gênero: {filme.show.genres}
            </p>
            <p>
              Idioma: {filme.show.language}
            </p>
            <p>
              URL: {filme.show.url}
            </p>
          </li></center>
        ))}
      </div>
    );
  };
};

export default App;
