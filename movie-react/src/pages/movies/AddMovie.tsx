import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";

function AddMovie() {
    return <div>
        <div>
        <h2>Add Movie Page</h2>
        <NavLink to="/">Movie Page</NavLink>
        </div>
        <Button variant="btn btn-primary"> List Movie </Button>
    </div>
    
}

export default AddMovie;