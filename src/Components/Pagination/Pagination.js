import React from 'react'
import PropTypes from 'prop-types';
import { getPageNumbers } from './Pagination.utils';
import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = getPageNumbers(currentPage, totalPages)
  return (
    <div className="container">
        <div className="pagination">
            <button 
              data-testid='prev-button'
              className={`button ${currentPage <= 1? 'disabledButton' : ''}`}
              disabled={currentPage <= 1}
              onClick={() => onPageChange(currentPage - 1)} >
                &laquo;
            </button>

            {pageNumbers.map((number) => (
                <button 
                  data-testid={`page-button-${number}`}
                  key={number} 
                  className={`button ${currentPage === number ? 'selected' : ''}`}
                  onClick={() => onPageChange(number)} >
                {number}
                </button>
            ))}
            <button
              data-testid='next-button'
              className={`button ${currentPage >= totalPages? 'disabledButton' : ''}`}
              onClick={() => onPageChange(currentPage + 1)} 
              disabled={currentPage >= totalPages}>&raquo;</button>
        </div>
    </div>
  )
}

Pagination.defalutProps = {
  totalItems: 10,
  itemsPerPage: 5,
  currentPage: 1,
  onPageChange: ()=>{},
}
Pagination.propTypes = {
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,


}
export default Pagination;

