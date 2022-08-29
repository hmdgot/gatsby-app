import React from 'react';
import { Link, graphql } from 'gatsby';

export default ({data}) => (
    <React.Fragment>
        <h2>{data.site.siteMetadata.title}</h2>
        <p>{data.site.siteMetadata.description}</p>
        <div> </div>
        <p> About Page</p>
        <Link to="/"> Back to Home</Link>
    </React.Fragment>
)

export const query = graphql `
  query  { 
    site {
      siteMetadata {
      author,
      description,
      title
      }
    }
}
`