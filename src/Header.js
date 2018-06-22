import React, {Component} from 'react'
import Headroom from 'react-headroom'

export default class Header extends Component {
    render () {
 return (
<Headroom>
   <div className="list-books-title">
 <h1>MyReads</h1>
 </div>
          </Headroom>
        )
    }
}

