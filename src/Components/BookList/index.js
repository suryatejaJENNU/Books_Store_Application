import { Component } from "react";

import Header  from "../Header";

import Books  from "../Books";

import './index.css'

class BookList extends Component {
    state = {BooksList: [],isMounted:false}

    async componentDidMount() {
        try {
          const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
          const data = await response.json();
          const updatedData = data.books.map((book) => (
            {
                image :book.image,
                id:book.isbn13,
                price:book.price,
                subtitle:book.subtitle,
                title:book.title,
                url:book.url
            }
          ))
          this.setState({BooksList:updatedData,isMounted:true})
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

    render() {
        console.log("welocome to books")
        const {BooksList,isMounted} = this.state
        console.log(BooksList,isMounted)
        return (

            <>
            <Header />
             {isMounted && <ul className = "books-page-container">
              {BooksList.map((each) => (
                <Books bookData = {each} key = {each.id} />
              ))}
             </ul>}
            </>
        )
    }
}

export default BookList