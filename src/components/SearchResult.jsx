// @flow 
import * as React from 'react';

 const SearchResult =   ({query}) => {
    console.log('search result')
    const data = [];
    for(let i = 0; i < 10000 ; i++) {
        data.push( `### ${i} --> ${query}`)
    }

    //    (async ()=> await sleep() )()
        // console.log('after sleep')
    return (
        query && data?.map(movie => <p > {movie}</p>) 
    )
};
export default React.memo( SearchResult);