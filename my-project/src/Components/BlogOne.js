import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BlogOne.css';

export class BlogOne extends Component {
  render() {
    return (
      <div>
        This Is BlogOne Page and blogpage2 blogpage3

        
        <Link to = "/ContUs"><button>Blog Page</button></Link>
      </div>
    )
  }
}

export default BlogOne