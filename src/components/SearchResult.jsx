// @flow 
import * as React from 'react';

 const SearchResult =   ({query}) => {
    const data = [];
    for(let i = 0; i < 50000 ; i++) {
        data.push( `### ${i} --> ${query}`)
    }

    //    (async ()=> await sleep() )()
        // console.log('after sleep')
    return (
        query && data?.map(movie => <p > {movie}</p>) 
    )
};
export default SearchResult;