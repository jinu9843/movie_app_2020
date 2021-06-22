import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({title,year,summary,poster,genres}){ //Movie캄포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형컴포넌트로 작성한다
    //MOvie 에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 props-types를 사용한다.
    return( 
        <div className="movie">
            <Link
                to={{
                    pathname: 'movie-detail',
                    state: {
                                year, title, summary, poster, genres
                           }
                }}
            >
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title"> {title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index)=> {
                       return <li key={index} className = "movie__genre">{genre}</li>;
                    })
                    }
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>    
    );
}

Movie.propTypes = 
{
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //DTO랑 비슷한듯   데이터에서 화면에 보여질것만쏙쏙 뺴내와서 정의한다.

export default Movie;