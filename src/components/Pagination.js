import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='page-list'>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href='!#'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
