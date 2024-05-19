import React from 'react';

const Pagination = ({ profilesPerPage, totalProfiles, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label='Page navigation'>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'} style={{padding:'5px'}}>
            <button 
              onClick={() => paginate(number)} 
              type="button" 
              className="btn btn-dark"
              aria-current={number === currentPage ? 'page' : undefined}
              aria-label={`Page ${number}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

};

export default Pagination;
