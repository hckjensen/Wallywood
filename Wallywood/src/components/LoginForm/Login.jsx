import { useForm } from 'react-hook-form';
import { useAuth } from '../Providers/AuthProvider';
import axios from 'axios';
import styles from './Login.module.scss';


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginData, setLoginData } = useAuth();

    const onSubmit = async data => {
        const endpoint = `http://localhost:3000/login`
        try {
            const response = await axios.post(endpoint, data);
            sessionStorage.setItem('access-token', JSON.stringify(response.data));
            setLoginData(response.data);
            console.log(response);
        } catch (error) { console.error(error) }

        console.log(data);
        // Here you can handle the form submission...
    };

    const logout = () => {
        // Clear the session storage
        sessionStorage.removeItem('access-token');
        // Reset the login data state
        setLoginData(null);
    };

    return (
        <>
            {!loginData ? (
                <form method="POST" className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Burgernavn:
                        <input type="username" {...register('username', { required: true })} />
                        {errors.username && <span>This field is required</span>}
                    </label>
                    <label>
                        Password:
                        <input type="password" {...register('password', { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </label>
                    <input className={styles.button} type="submit" value="Log In" />
                </form>
            ) : (
                <>
                    <p>You are already logged in </p>
                    <button onClick={logout}>Logout</button>
                </>

            )}
        </>
    );

};

export default LoginForm;