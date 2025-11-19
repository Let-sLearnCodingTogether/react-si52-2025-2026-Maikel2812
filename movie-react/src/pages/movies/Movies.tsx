import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router";
import ApiClient from "../../utils/ApiClient";
import { Table } from "react-bootstrap";

interface Movie {
    _id: string,
    judul: string,
    tahunRilis: string,
    sutradara: string,
    createdAt : string,
    updatedAt : string
}

function Movies() {
    const [Movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = useCallback(async () => {
        const response = await ApiClient.get("/movie");

        if(response.status == 200){
            setMovies(response.data.data);
        }
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const handleDelete = async (movieId : String)=>{
        const response = await ApiClient.delete(`/movie/${movieId}`)
        
        if (response.status == 200){
            fetchMovies()
        }
    }

    return <div className="container mx-auto">
        <div className="d-flex justify-content-between mb-3">
            <h4>Movies Page</h4>
            <NavLink to="/add-movie" className="btn btn-primary">Add Movie</NavLink>
        </div>
        <div>
            <Table>
                <thead>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tahun Rilis</th>
                    <th>Sutradara</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                    {
                        Movies.length > 0 && Movies.map((movie, index)=>{
                            return <tr key={movie._id}>
                                <td>{index + 1}</td>
                                <td>{movie.judul}</td>
                                <td>{movie.tahunRilis}</td>
                                <td>{movie.sutradara}</td>
                                <button className="btn btn-danger"onClick={()=> handleDelete(movie._id)}>Delete</button>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </div>
    
}

export default Movies;