import React, {Component} from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

export default class bookshelf extends Component {
  static propTypes = {
  OnbooksShelf: PropTypes.array.isRequired,onChangeBook: PropTypes.func.isRequired
  }

  render () {
   
    const names = ["currentlyReading", "wantToRead", "read"]
    const shelveNames = ["Currently Reading", "Want To Read", "Read"]
    return (
      <div>
     
        {names.map((shelf, index) => {
          return(
            <div key={index} className="list-books-content">
      
              <div>
                <div>
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelveNames[index]}</h2>
      
        <div className="bookshelf-books">
       
          <ol className="books-grid">
               
                        {this.props.OnbooksShelf.sort(sortBy('title'))
              .filter(book => book.shelf === shelf)
          
              .map(book => (
               <Book  onChangeBook={this.props.onChangeBook}
          
               key={book.id}
           
           book={book}  /> )) }
            
                      </ol>
                      </div>
         
                      </div>
                     </div>
                     </div>
                           </div>
                             )}
                            )}
                 </div>
          )
         }
  }

