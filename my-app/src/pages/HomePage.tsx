import styles from './HomePage.module.scss';
import Header from '../components/header/Header';
import HomeSearch from '../components/homeSearch/HomeSearch';
import FlowerList from '../components/flowerList/FlowerList';
import axios from 'axios';
import { useState, useEffect } from 'react';

function HomePage () {
    const [flowers, setFlowers] = useState([]);

    useEffect(() =>{
        fetchFlowers();
    }, []);

    const fetchFlowers = () =>{
        axios.get(axios.defaults.baseURL + '/v1/flowers')
            .then(res =>{
                setFlowers(res.data.flowers);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    return(
        <div>
            <Header></Header>
            <HomeSearch></HomeSearch>
            <FlowerList flowers={flowers}></FlowerList>
        </div>
    );
}

export default HomePage;