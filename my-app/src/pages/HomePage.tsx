import styles from './HomePage.module.scss';
import Header from '../components/header/Header';
import HomeSearch from '../components/homeSearch/HomeSearch';
import FlowerList from '../components/flowerList/FlowerList';

function HomePage () {

    return(
        <div>
            <Header></Header>
            <HomeSearch></HomeSearch>
            <FlowerList></FlowerList>
        </div>
    );
}

export default HomePage;