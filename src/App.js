import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{ // App 컴포넌트는 클래스라서 (함수가 아니라서)return문을 사용할수 없고 그래서 함수 형태의 App컴포넌트처럼JSX를 반환할수가 없다 클래스형 컴포턴트에서는 JSX를 반환하기 위해 render()함수를 사용한다.
 
  state = {
    isLoading: true,
    movies: [], 
  }

  // getMovie = async() => {
  //   const movies = await axios.get('http://yts-proxy.now.sh/list_movies.json');
  //   console.log('###',movies.data.data.movies);
  // }

  getMovie = async() => {
    const {data:{data:{movies}}} = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading :false});
    }

  componentDidMount(){
    //영화 데이터 로딩!
    this.getMovie();
  }

  render(){
    const { isLoading, movies } = this.state;
    return( <section calss="container">
          {isLoading ? 
          (<div class="loader">
            <span class="loader__text">
          'Loading......'</span></div>) : (
            <div class="movies">
            {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id ={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
            ))}
           </div>        
       )}</section>
  );
 }
}

export default App;
