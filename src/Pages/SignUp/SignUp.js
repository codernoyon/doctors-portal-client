import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Components/Loading/Loading';
import toast from 'react-hot-toast';
import PageTitle from '../../Components/PageTitle/PageTitle';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            toast.success('Successfully signup', { id: 'singup' })
            navigate(from, { replace: true });
        }
    }, [user, from, navigate, token]);



    if (updateError) {
        toast.error(updateError?.message, { id: "updateError" })
    };


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };


    return (
        <section>
            <PageTitle title={"Signup"} />
            <div className="container mx-auto lg:px-6">
                <div className="flex h-screen items-center justify-center">
                    {
                        loading || updating ? <Loading /> : <div className='w-full sm:w-[60%] lg:w-96 p-5 shadow rounded-lg'>
                            <h3 className="text-xl text-center font-semibold mb-3s">Sign Up</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full' action="">
                                <div className="form-control w-full mb-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })}
                                        placeholder='Full name' type="text" className="input input-bordered w-full focus:input-primary" />
                                    {errors.name?.type === 'required' && <small className='text-red-400 mt-1'>{errors.name.message}</small>}
                                </div>
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
                                    })}
                                        type="password" placeholder='Password ' className="input input-bordered focus:input-primary w-full mb-1" />
                                    {errors.password?.type === 'required' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                    {errors.password?.type === 'minLength' && <small className='text-red-400 mt-1'>{errors.password.message}</small>}
                                </div>
                                <button className='bg-[#3A4256] text-white input w-full mb-1'>Signup</button>
                                <div className="flex justify-center space-x-2">
                                    <small>Already have an account?</small>
                                    <Link className='text-sm text-primary' to='/login'>Login</Link>
                                </div>
                                {
                                    error?.message && <small className="w-full block mt-1 text-red-400 text-center p-2 bg-red-100 rounded">{error.message}</small>
                                }
                            </form>
                            <SocialLogin />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default SignUp;