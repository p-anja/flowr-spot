import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import HomeSearch from '../components/homeSearch/HomeSearch';
import FlowerList from '../components/flowerList/FlowerList';
import { fetchFlowers, Flower, searchFlowers } from "../service/Flower.service";
import BurgerMenu from '../components/burgerMenu/BurgerMenu';
import { useAppSelector } from '../utils/hooks';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/signUp/SignUpForm';
import LogoutForm from '../components/logout/LogoutForm';
import styles from './HomePage.module.scss';


const HomePage = () => {
    const showMenu = useAppSelector((state) => state.auth.openMenu);
    const [flowers, setFlowers] = useState<Flower[]>([]); 
    const [searchTerm, setSearchTerm] = useState(null);
    const showLoginForm = useAppSelector((state) => state.auth.openLoginForm);
    const showSignUpForm = useAppSelector((state) => state.auth.openSignUpForm);
    const showLogoutForm = useAppSelector((state) => state.auth.openLogoutForm);

    const fetchData = async () => {
        const {data} = await fetchFlowers();
        setFlowers(data.flowers);
      };

    const fetchSearchResults = async () =>{
        const {data} = await searchFlowers(searchTerm);
        setFlowers(data.flowers);
    }

    useEffect(() =>{
        if(searchTerm === null)
            fetchData();
        else
            fetchSearchResults();
    }, [searchTerm]);

    const homePageRenderCondition = () =>{
        return !showMenu && !showLoginForm && !showSignUpForm && !showLogoutForm;
    }

    const burgerMenuRenderCondition = () =>{
        return showMenu && !showLoginForm && !showSignUpForm && !showLogoutForm;
    }

    return(
        <div>
            <Header />
            {homePageRenderCondition() && <HomeSearch setSearchTerm={setSearchTerm}/>}
            {homePageRenderCondition() && flowers && <FlowerList flowers={flowers} />} 
            {!!flowers && <p className={styles.info}>No flowers found.</p>}
            {burgerMenuRenderCondition() && <BurgerMenu />}
            {showLoginForm && <LoginForm />}
            {showSignUpForm && <SignUpForm />}
            {showLogoutForm && <LogoutForm />}
        </div>
    );
}

export default HomePage;