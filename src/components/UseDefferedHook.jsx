import React, { useDeferredValue, useEffect, useState } from 'react';
import Input from './common/Input';
import SearchResult from './SearchResult';
const marbels = [{id: 1 , movie: 'Iron man'}, {id: 2 , movie: 'Spider man'},{id: 3 , movie: 'Captain America'},{id: 4 , movie: 'Hulk'},{id: 5 , movie: 'Thor'},{id: 6 , movie: 'Ant man'}]
function UseDeferedHook(props) {
    const [search, setSearch] = useState('test');
    const deferredQuery = useDeferredValue(search);

    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     const sleepAction = async ()  => {
    //         await sleep(2000)
    //         const filterData =   marbels?.filter(data =>  data?.movie?.toLocaleLowerCase().includes(search));
    //         setMovies(filterData)
    //     }
    //     sleepAction()
    
    // }, [search])
    useEffect(() => {
        console.log({search, deferredQuery})
        console.log('next___________')
    }, [search, deferredQuery])
    return (
        <div className='w-1/2' 
        //  style={{
        //     backgroundColor: search !== deferredQuery ? 'blue' : 'green',
        //   }}
          >
            <Input placeholder="Search Here" value = {search} onChange={e => setSearch(e?.target?.value)}/>
            {/* {search && movies?.map(movie => <p key = {movie?.id}>{movie?.movie}</p>)} */}
            <SearchResult query ={deferredQuery}/>
        </div>
    );
}

export default UseDeferedHook;

// function SearchResult({query}) {
//     const data = [];
//     for(let i = 0; i < 5000 ; i++) {
//         data.push( `### ${i} --> ${query}`)
//     }
//     return (
//         query && data?.map(movie => <p > {movie}</p>) 
//     )
// }