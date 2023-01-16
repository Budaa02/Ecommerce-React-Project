import { Routes, Route, Link } from "react-router-dom";




export default function Signin() {
    return (
        <div className="container signin">
            <form>
                <h1>Sign up</h1>
                <div className="form-group">
                    <label for="exampleInputName">Name*</label>
                    <input type="name" class="form-control" placeholder="Enter your name" />
                </div>
                <div class="form-group ">
                    <label for="exampleInputEmail1">Email address*</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password*</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <small id="emailHelp" class="form-text text-muted">Must be at least 8 characters.</small>
                </div>

                <button type="submit" style={{ width: "300px" , color:"white", background:"#563d7c"}} class="btn ">Create account</button>


            </form>
            <div className="m-4">
                <small>Already have an account?</small>
                <Link to="/" className="login">Login?</Link>
            </div>

        </div>
    )
}