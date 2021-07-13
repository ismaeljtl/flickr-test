import style from './Tag.module.css';

export default function Tag({tag}) {
    return (
        <div className={style.tag}>{tag}</div>
    )
}