
import {Link} from 'react-router-dom'

import './index.css'

const Books = (props) => {
    const {bookData} = props
    const {subtitle, image,title ,url, price, id} = bookData
    console.log(title)
    console.log(subtitle)
    return (
        <li type = "None" className='book-container'>
           <Link to={`/books/${id}`}>
            <img src = {image} alt = {title} className="book-image"/>
            </Link>
            <h1 className="book-title">{title}</h1>
            <p className="book-subtitle">{subtitle}</p>
            <p className="book-price">{price}</p>
           
        </li>
    )
}


export default Books