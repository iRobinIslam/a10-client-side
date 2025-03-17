import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
    const navigate = useNavigate();
    const [error, seterror] = useState("");
    const { CreateUser, updateprofile } = useContext(AuthContext);
    const [ setsuccess] = useState(false);

    const handlesignup = (e) => {
        e.preventDefault();
        seterror("");
        setsuccess(false);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photourl = e.target.photourl.value;

        if (!/[a-z]/.test(password)) {
            seterror("Password must contain at least one lowercase letter.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            seterror("Password must contain at least one uppercase letter.");
            return;
        }
        if (password.length < 6) {
            seterror("Password must be at least 6 characters long.");
            return;
        }

        CreateUser(email, password)
            .then((result) => {
                updateprofile(name, photourl)
                    .then(() => {
                        console.log(result.user);
                        setsuccess(true);
                        e.target.reset();
                        navigate("/");

                        Swal.fire({
                            icon: "success",
                            title: "Registration Successful",
                            html: `Welcome, <span style="font-weight: bold; color: #4caf50;">${name}</span>! Your account has been created.`,
                            confirmButtonText: "OK",
                        });

                        const newUser = { email, name };

                        // Save new user info to database
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(newUser),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log("User created in DB:", data);
                            });
                    })
                    .catch(() => {
                        seterror("Failed to update profile");
                    });
            })
            .catch((error) => {
                seterror(error.message || "The Email is Already Taken");
                setsuccess(false);
            });
    };

    return (
        <div className="hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-lg p-6">
                <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-sm shadow-lg p-6">
                    <h1 className="text-center text-3xl font-bold text-white">Register Now</h1>
                    <form onSubmit={handlesignup} className="card-body space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" name="photourl" placeholder="Profile Photo URL" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-500" required />
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn btn-primary w-full text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500 border-none hover:from-blue-500 hover:to-purple-500">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    {error && <p className="text-red-500 font-bold text-center">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Signup;