import { useState, type ChangeEvent, type FormEvent } from "react"
import ApiClient from "../../../utils/ApiClient"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"

interface SignInForm{
    email : string,
    password : string
}
function SignIn(){
    const navigate = useNavigate()
    const [isLoading, setIsLoading] =useState(false)
    const [form, setForm] = useState<SignInForm>({
        email : "",
        password : ""
    })

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await ApiClient.post("/signup", form)
            console.log(response.data);
            if(response.status ===200){
                navigate ("/movies",{
                    replace : true
                })

            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return <div className="container mx-auto">
        <h1>Sign Up</h1>
        <Form onSubmit={onSubmit}>
            <Form.Group  className ="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={form.email}
                    onChange={onHandleChange}
                    name ="email" 
                    type="password"
                    placeholder="Email"/>
            </Form.Group>
            <Form.Group className ="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={form.password}
                    onChange={onHandleChange}
                    name ="password" 
                    type="password"
                    placeholder="Password"/>
            </Form.Group>
            <Button 
            type="submit" 
            variant="primary"
            disabled ={isLoading}>
            {isLoading ? "Loading...": "Sign In"}
            </Button>
         </Form>
        </div>
}

export default SignIn