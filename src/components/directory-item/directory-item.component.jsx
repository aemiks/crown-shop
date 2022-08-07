import './directory-item.styles.scss'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const DirectoryItem = ({title, imageUrl}) => {
    return (
            <div className="directory-container">
                <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
                }} />
                <Link className="directory-body-container" to={`/shop/${title}`}>
                <h2>{title}</h2>
                <p>Shop now</p>
                </Link>

            </div>
    )
}

export default DirectoryItem;