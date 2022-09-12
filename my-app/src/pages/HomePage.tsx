import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import HomeSearch from '../components/homeSearch/HomeSearch';
import FlowerList from '../components/flowerList/FlowerList';
import { fetchFlowers, Flower } from "../service/Flower.service";


const HomePage = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]); 

    const fetchData = async () => {
        const {data} = await fetchFlowers();
        setFlowers(data.flowers);
      };

    useEffect(() =>{
        fetchData();
    }, []);

    return(
        <div>
            <Header></Header>
            <HomeSearch></HomeSearch>
            {flowers && <FlowerList flowers={flowers}></FlowerList>}
        </div>
    );
}

export default HomePage;