import React, { Fragment } from "react";
import PostsPerPage from "./PostsPerPage"

const Pagination = ({ postsPerPage, totalPosts, setDisplayedRows, data, setPostsPerPage, indexOfLastPost }) => {
  const pageNumbers = [];

  //*looping over the total length of the data array (the full data array that was recieved)
  //*and calculating the total number of the pages thats needed to be displayed at the scroll div
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item ml-2">
            <a
              onClick={() => {
                const FirstDisplayedIndex = postsPerPage * (number - 1);
                // console.log("first index that should be displayed",FirstDisplayedIndex);
                // console.log("the data is ", data);

                //***slicing the displayed rows according to
                //****the number of the page that was clicked ((page#) * (postsPerPage))
                let newDisplayedRows=[];

                if (totalPosts % postsPerPage === 0) {
                  
                 newDisplayedRows = data.slice(
                    FirstDisplayedIndex,
                    FirstDisplayedIndex + postsPerPage
                  );
                  
                }

                // console.log('totalPosts % postsPerPage !== 0', totalPosts % postsPerPage !== 0)
                
                if (totalPosts % postsPerPage !== 0) {
                  newDisplayedRows = data.slice(
                    FirstDisplayedIndex,
                    FirstDisplayedIndex ? totalPosts + (totalPosts - FirstDisplayedIndex) : postsPerPage
                    )
                  }
                setDisplayedRows(newDisplayedRows);
              }}
              //   href="!#"
              style={{ color: "#47567d" }}
              className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    < PostsPerPage  setPostsPerPage={setPostsPerPage}
      // =>{      
      //     console.log(postsPerPage);
          
      //     setPostsPerPage(postsPerPage)
      //     }} sss
          />
    </Fragment>
  );
};

export default Pagination;
