import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import HomeSearch from '../components/homeSearch/HomeSearch';
import FlowerList from '../components/flowerList/FlowerList';
import { fetchFlowers, Flower } from "../service/Flower.service";
import BurgerMenu from '../components/burgerMenu/BurgerMenu';


const HomePage = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]); 
    const [showMenu, setShowMenu] = useState(false);

    const fetchData = async () => {
        const {data} = await fetchFlowers();
        setFlowers(data.flowers);
      };

    useEffect(() =>{
        fetchData();
    }, []);

    return(
        <div>
            <Header menuIsOpen={setShowMenu}></Header>
            {!showMenu && <HomeSearch></HomeSearch>}
            {!showMenu && flowers && <FlowerList flowers={flowers}></FlowerList>} 
            {showMenu && <BurgerMenu close={setShowMenu}></BurgerMenu>}
        </div>
    );
}

export default HomePage;