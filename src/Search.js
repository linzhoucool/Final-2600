import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class Search extends Component {
  
  static propTypes = {
    OnbooksShelf: PropTypes.array,
    onChangeBook: PropTypes.func.isRequired
  }
  state = {
    query: '',
    books: []
  }
  changeQuery = (query) => {
    
    if (!query) {
     
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (this.props.OnbooksShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
   placeholder="Search by title or author"
              onChange={(event) => this.changeQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
    <ol className="books-grid">
    <div className="bookshelf-books">
     <ol className="books-grid">
      {this.state.books.sort(sortBy('title'))
      .map(book => (
                    <Book 
                      onChangeBook={this.props.onChangeBook}
                      key={book.id}
                      book={book}
                    />
      ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search