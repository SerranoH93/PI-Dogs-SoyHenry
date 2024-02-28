import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({currentPage, onPageChange, pageSize, totalIteams}) => {
    
    const totalPages = Math.ceil(totalIteams / pageSize);    

    const handlePageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    }

    return (
        <div className={styles.paginationContainer}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage===1}>
                Previus
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage===totalPages}>
                Next
            </button>
        </div>
    )
}

export default Pagination;