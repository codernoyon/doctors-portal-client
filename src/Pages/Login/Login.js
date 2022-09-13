import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);


    useEffect(() => {
        if(token){
            toast.success('Successfully login', { id: 'login' })
            navigate(from, { replace: true });
        }
    },[user, from, navigate, token]);

    let loginError;

    if (error) {
        loginError = <p className="text-red-400 text-center text-sm mt-2 bg-red-100 p-2 rounded">{error?.message}</p>
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();


    };
    
    
    return (
        <section>
            <PageTitle title={"Login"}/>
            <div className="container mx-auto lg:px-6">
                <div className="flex h-screen items-center justify-center">
                    {
                        loading ? <Loading /> : <div className='w-full sm:w-[60%] lg:w-96 p-5 shadow rounded-lg'>
                            <h3 className="text-xl text-center font-semibold mb-3s">Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full' action="">
                                <div className="form-control w-full mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Emaild is required"
                                        },

                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Provide a valid email"
                                        }
                                    })}
                                        placeholder='example@gmail.com' type="email" className="input input-bordered w-full focus:input-primary" />
                                    {errors.email?.type === 'required' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                    {errors.email?.type === 'pattern' && <small className='text-red-400 mt-1'>{errors.email.message}</small>}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Must be 6 character or longer"
                                        }
                                    })} placeholder="Password"
                                        type="password" className="input input-bordered w-full mb-1 focus:input-primary" />
                                    {errors.password?.type === 'required' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                    {errors.password?.type === 'minLength' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                </div>
                                <small className='mb-1 block'>Forget Password?</small>
                                <button className='bg-[#3A4256] text-white input w-full mb-1'>Login</button>
                                <div className="flex justify-center space-x-2">
                                    <small>New to doctors Portal's?</small>
                                    <Link className='text-sm text-primary' to='/signup'>Create new account</Link>
                                </div>
                                {loginError}
                            </form>
                            <SocialLogin />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Login;