import React from 'react';
import PropTypes from 'prop-types';

function Movie({id,title,year,summary,poster}){ //Movie캄포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형컴포넌트로 작성한다
    //MOvie 에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 props-types를 사용한다.
    return( 
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{title}</p>

            </div>
        </div>    
    );
}

Movie.propTypes = 
{
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}; //DTO랑 비슷한듯   데이터에서 화면에 보여질것만쏙쏙 뺴내와서 정의한다.

export default Movie;