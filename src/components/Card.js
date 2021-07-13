import { useState } from 'react';
import style from './Card.module.css';
import Tag from "./Tag";

function Card({item}) {

    const [isShowed, setIsShowed] = useState(false);

    const toggleDescription = (e, item) => {
        e.preventDefault();
        if (!isShowed) {
            document.getElementById(`description-${item.author_id}`).innerHTML=item.description;
        } else {
            document.getElementById(`description-${item.author_id}`).innerHTML='';
        }
        setIsShowed(!isShowed)
    }

    return(
        <div className={style.card}>
            <img className={style.responsiveImg} src={item.media.m} alt={item.title} />
            <br />
            <a href={item.link} target='_blank' rel="noreferrer">{item.title}</a> <small>by {item.author}</small>
            <br />
            { !isShowed && <a href='/' onClick={(e) => toggleDescription(e, item)}>See Description</a> }
            { isShowed && <a href='/' onClick={(e) => toggleDescription(e, item)}>Hide Description</a> }
            <div id={`description-${item.author_id}`}/>
            {item.tags !== '' &&
                <small>Tags: {item.tags.split(' ').map(tag => <Tag tag={tag} key={tag} />)}</small>
            }
        </div>
    )
}

export default Card;