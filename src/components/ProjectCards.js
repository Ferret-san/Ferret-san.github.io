import React from 'react'
import Img from "gatsby-image"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/"}}
        ) {
        edges {
          node {
            frontmatter {
              type
              title
              description
              tools
              hyperlink
              image {
                childImageSharp{
                    sizes(maxWidth: 590) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <header>

          <div className="project-line-numbers">
            <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45
              46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90
              91 92 93 94 95 96 97 98 99 
            </p>
          </div>

        <div className="project-divider">
        </div>
       
        {data.projects.edges.map(({ node }) => (
          <a href={node.frontmatter.hyperlink}>
        <div className="project-container" >
           

          <div className="project-leftside">

            <div className="project-text">  
              <p className="project-type">{node.frontmatter.type}</p>
              <p className="project-title">{node.frontmatter.title}</p>
              <p className="project-excerpt">{node.frontmatter.description}</p>
            </div>
            <div className="project-tools">
              <p>{node.frontmatter.tools}</p>
            </div>

          </div>

          <div className="project-image-container">
            <Img className="project-image" sizes={node.frontmatter.image.childImageSharp.sizes} /> 
          </div>
          
        </div>
        </a>
      ))}
      </header>
    )}
  />
)