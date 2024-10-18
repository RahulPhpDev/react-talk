import { useEffect, useState } from "react";

const UseEffectComponent = () => {
    const [dogsData, setDogData] = useState([]);
    const [page, setPage] = useState(1);
    const wait = async (page)=> new Promise( resolve => setTimeout(resolve,  page%2 ? 1000:  3000));

    const fetchApi = async ( limit = 10) => {
        console.log('before')

        await wait(page)
        console.log('after')
    return fetch(`https://api.thedogapi.com/v1/breeds?page=${page}&limit=10`)
        .then(json=> json.json())
        .then(data => data)
    }
    function updatePageCount(page) {
        return ++page;
    }
    const clickHandler = async () => {
        setPage(updatePageCount(page))
        // console.log(page);
        // fetchApi().then(data => setDogData(data))
    }
    /** race condition */
    useEffect( () => {
        // let active = true;
        // if (active) {
            fetchApi().then(data => setDogData(data))
        // }
        // return () => {
        //     console.log('un mount method')
        //     active = false;
        // }
    }, [page]) 
    return (
        <div className="w-1/2">
           <button className="text-white bg-blue-700 rounded-lg  p-2.5" onClick = {() => clickHandler()}> Next   Page: {page} </button>

            {/* <RaceCondition /> */}
            <table className="mt-10 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Bread Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Origin
                        </th>
                        </tr>
                </thead>
                <tbody>
                    {dogsData?.map( data => {
                        return (
                            <tr key ={data?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data?.name}
                                </th>
                                <th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data?.country_code }
                                </th>
                              </tr>
                        )
                    })}
            
                </tbody>
            </table>
            
        </div>
    )
}

export default UseEffectComponent;