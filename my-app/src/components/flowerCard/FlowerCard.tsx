import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './FlowerCard.module.scss';
import star from '../../assets/star.svg';
import starColor from '../../assets/starColor.svg';

interface IFlowerProps {
    flower: {
        id: number,
        name: string,
        latin_name: string,
        sightings: number,
        profile_picture: string,
        favorite: boolean
    }
}

interface User {
    first_name: string,
    last_name: string,
    id: number
}

function FlowerCard ({flower}: IFlowerProps) {

    const {id, name, latin_name, sightings, profile_picture, favorite} = flower;
    const [user, setUser] = useState<User | null>(null);

    useEffect(() =>{
        //fetchUser();
    }, [])

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

    const handleChange = () =>{
        if(favorite)
            axios.delete(axios.defaults.baseURL + '/v1/flowers/' + id + '/favorites/' + user?.id)
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        axios.post(axios.defaults.baseURL + '/v1/flowers/' + id + '/favorites')
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <div className={styles.cardContainer}>
            <div className={styles.background}/>
            <img src={profile_picture} className={styles.profilePicture}></img>
            <div className={styles.cardTop}>
                <img src={favorite ? starColor : star} onClick={handleChange} className={styles.favoriteButton}></img>
            </div>
            <div className={styles.cardBottom}>
                <h5 className={styles.cardTitle}>{name}</h5>
                <label className={styles.cardLabel}>{latin_name}</label>
                <label className={favorite ? styles.sightingsFavorite : styles.sightings}>{sightings} sightings</label>
            </div>
        </div>
        
    );
}

export default FlowerCard;