import React, { useEffect } from 'react';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import auth from '../../Firebase/Firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);


    useEffect(() => {
        if(token){
            toast.success('Successfully login', {id: 'socialLogin'})
            navigate(from, { replace: true }); 
        }
    }, [user, from, navigate, token]);

    if(loading){
        return <Loading/>
    }
    if(error){
        toast.error(error.message, {id: "socilaid"})
    }


    return (
        <div>
            <div className="divider text-base">Or</div>
            <div className='space-y-2'>
                <button onClick={() => signInWithGoogle()} className="flex justify-center space-x-2 shadow hover:bg-gray-100 bg-gray-50 w-full p-3 rounded">
                    <FcGoogle className='text-2xl'/>
                    <span>Continue with Google</span>
                </button>
                <button className="flex justify-center space-x-2 shadow hover:bg-gray-100 bg-gray-50 w-full p-3 rounded">
                    <BsFacebook className='text-2xl text-[#4267B2]'/>
                    <span>Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;