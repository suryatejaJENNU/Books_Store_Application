import { Component } from "react";

import Header from "../Header";

import { FaCirclePlus ,FaCircleMinus} from "react-icons/fa6";

import './index.css'

class BookDetails extends Component {

    state = {bookddetails:[],quantity:0,cartDetails:[]}

    async componentDidMount () {
        const {match} = this.props
        const {params} = match 
        const {id} = params
        console.log(id)
        try {
            const response = await fetch(`https://api.itbook.store/1.0/books/${id}`)
            const data = await response.json()
            console.log(data.title)
            this.setState({bookddetails:data})
            console.log(data)
        }
        catch(error) {
            error.console.log("Eroor while Fetching",error)
        }
    }

     onIncrement = () => {
        this.setState(pre => ({quantity:pre.quantity+1}))
    }

    onDecrement = () => {
        const {quantity} = this.state
        if (quantity > 0) {
            this.setState(pre => ({quantity:pre.quantity-1}))
        }
    }

    addBooksToCart = () => {
        const {quantity,bookddetails} = this.state
        const d = [bookddetails.title,bookddetails.price,quantity]
        this.setState((pre) => ({cartDetails: [...pre.cartDetails,d],quantity:0}))
    }
    render() {
        const {bookddetails,quantity,cartDetails} = this.state
        const {title,authors,desc,image,isbn10,isbn13,language,pages,price,publisher,rating,subtitle,url,year} = bookddetails
        console.log(cartDetails)
        return (
            <>
            <Header />
            <div className="details-container"> 
                <div>
                <img src = {image} alit="title" className="detail-image"/>
                <br></br>
                <button type = "button" className="checkout" onClick={this.addBooksToCart}>Add to Cart</button>
                <div className="quantity-class">
                    <button type = "buttion" className="quantity-button" onClick={this.onIncrement}>
                    <FaCirclePlus />
                    </button>
                    <p>{quantity}</p>
                    <button type = "button" className="quantity-button" onClick={this.onDecrement}>
                     <FaCircleMinus/>
                    </button>
                </div>
                </div>
                <ul type = "None">
                    <li className="align">
                        <p className = "styling-elements">Price</p>
                        <p>{price}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">Rating</p>
                        <p>{rating}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">Author</p>
                        <p>{authors}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">publisher</p>
                        <p>{publisher}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">Published</p>
                        <p>{year}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">Pages</p>
                        <p>{pages}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">Language</p>
                        <p>{language}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">ISBN-10</p>
                        <p>{isbn10}</p>
                    </li>
                    <li className="align">
                        <p className = "styling-elements">ISBN-13</p>
                        <p>{isbn13}</p>
                    </li>
                </ul>
            </div>

            </>
        )
    }
}

export default BookDetails