import {useEffect, useState} from 'react';
import axios from 'axios';
import SignUpModal from '../signUp/SignUpModal';
import LoginModal from '../login/LoginModal';
import LogoutModal from '../logout/LogoutModal';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import profilePic from '../../assets/profile-holder.svg';

interface User {
    first_name: string,
    last_name: string,
    id: number
}

function Header () {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    console.log(user?.first_name)


    useEffect(() =>{
        fetchUser();
    }, []);

    const fetchUser = () =>{
        axios.get(axios.defaults.baseURL + '/v1/users/me',  {
            headers: {
                Authorization: localStorage.getItem('token') || ''
            }
        })
        .then(res =>{
            setUser(res.data.user)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const openSignUpModal = () => {
        setIsOpen(true);
    }
    const openLoginModal = () => {
        setLoginModalIsOpen(true);
    }
    const openLogoutModal = () => {
        setLogoutModalIsOpen(true);
    }
    const authorized = () => {
        return localStorage.getItem('token') !== null;
    }

    console.log(",",authorized() && user)


    return(
        <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={styles.logoPic}></img>
                    <h3 className={styles.logo}>FlowrSpot</h3>
                </div>
                <div className={styles.navigationContainer}>
                    <a className={styles.headerButton}>Flowers</a>
                    <a className={styles.headerButton}>Latest sightings</a>
                    <a className={styles.headerButton}>Favourites</a>
                    { !authorized() && <a className={styles.headerLoginButton} onClick={openLoginModal}>Login</a>}
                    { !authorized() && <button className={styles.newAccountButton} onClick={openSignUpModal}>New account</button>}
                    { authorized() &&  user && <a className={styles.headerButton} onClick={openLogoutModal}>{user.first_name} {user.last_name}</a>}
                    { authorized() && user && <img src={profilePic} className={styles.profilePicture} onClick={openLogoutModal}></img>}
                    <SignUpModal close={setIsOpen} modalIsOpen={modalIsOpen}></SignUpModal>
                    <LoginModal close={setLoginModalIsOpen} modalIsOpen={loginModalIsOpen}></LoginModal>
                    <LogoutModal close={setLogoutModalIsOpen} modalIsOpen={logoutModalIsOpen}></LogoutModal>
                </div>
        </header>
    );
}

export default Header;