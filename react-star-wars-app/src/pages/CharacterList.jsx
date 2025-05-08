import { useEffect } from "react";
import { useState } from "react";
import { getCharacter, getCharacters } from "../services/swapiService";

function CharacterList(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInfo, setPageInfo] = useState({
        count: 0,
        next: null,
        previous: null
    });

    useEffect(() =>{
       const fetchCaracters = async () => {
         try {
              setLoading(true);
              const data = await getCharacters(currentPage);
              setCharacters(data);
              setPageInfo({
                count: data.info.count,
                next: data.info.next,
                previous: data.info.previous
              });
              setError(null);
         } catch (error) {
            setError(error.message);
         }finally {
            setLoading(false);
         }
       };
       
       fetchCaracters();
    }, [currentPage]);


    const handleNextPage= () => {
        if (pageInfo.next){
            setCurrentPage((prevPage) =>  prevPage + 1);
        }
    }

    const handlePreviousPage =()=> {
        if ( pageInfo.previous){
            setCurrentPage((prevPage) => prevPage -1 );
        }
    }

    if ( loading) {
        return <div>Cargando personaje...</div>
    }

    if (error){
        return <div>ERROR: {error}</div>
    }


    return (
       <div>
        <h1>Personajes de Star Wars</h1>
        <div className="card-grid">
            {
                characters.map((character) => {
                     <h1>Tarjeta</h1> 
                })
            }
        </div>

        <div className="page-control">
          <button
            className="btn"
            onClick={handlePreviousPage}
            disabled={!pageInfo.previous}
            style={{opacity: pageInfo.previous ? 1 : 0.5}}
          >
            </button>           
          <span>Pagina {currentPage}</span>
          <button
            className="btn"
            onClick={handleNextPage}
            disabled={!pageInfo.next}
            style={{opacity: pageInfo.previous ? 1 : 0.5}}
          >

          </button>
        </div>
       </div>
    )
}