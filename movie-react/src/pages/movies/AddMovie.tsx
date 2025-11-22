import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router";
import ApiClient from "../../utils/ApiClient";

interface FormMovie{
    judul : string,
    tahunRilis : string,
    sutradara : string
}
function AddMovie() {
    const [form, setForm] = useState<FormMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : ""
    })

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target

        setForm({
            ...form,
            [name] : value
        })

    }

    const handleSubmit = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try{
            const response = await ApiClient.post('/movie',form)
            console.error();
        }
            catch(error){
                console.log(error);
            }

    }
    return <div>
        <h2>Add Movie Page</h2>
        <NavLink to="/">List Movies</NavLink>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className = "mb-3"controlId="FormJudul"> 
                    <Form.Label>Judul</Form.Label>
                    <Form.Control value= {form.judul} onChange = {handleInputChange} name="judul" type="text"placeholder="Judul Film"/>
                </Form.Group>
                <Form.Group className = "mb-3" controlId="FormTahunRilis"> 
                    <Form.Label>Tahun Rilis</Form.Label>
                    <Form.Control value= {form.tahunRilis} onChange = {handleInputChange} name="tahunRilis" type="text"placeholder="Tahun Rilis"/>
                </Form.Group>
                <Form.Group className = "mb-3" controlId="FormSutradara"> 
                        <Form.Label>Sutradara</Form.Label>
                        <Form.Control value= {form.sutradara} onChange = {handleInputChange} name="sutradara" type="text"placeholder="Sutradara"/>
                </Form.Group>

                <Button type="submit" variant="primary">
                    Simpan
                </Button>
            </Form>    
        </div>
        </div>
}

export default AddMovie;