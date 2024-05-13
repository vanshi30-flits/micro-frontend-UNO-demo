import React from 'react';
import './pagination.css';
import PaginationPageCompo from './PaginationPageCompo';
const Pagination = ({totalData,currentPage,dataPerPage,handlePageNumberClick,handleRightPageShiftBtn,handleLeftPageShiftBtn}) => {
    
    return (
        <>
            <div className='pagination-outermost-container'>
                <nav>
                    <ul className='pagination-container'>
                        <li>
                            <button className='pagination-nav-btn' onClick={handleLeftPageShiftBtn} > <i class="fa-solid fa-arrow-left"></i> </button>
                        </li>
                        <PaginationPageCompo dataPerPage={dataPerPage} currentPage={currentPage} totalData={totalData} handlePageNumberClick={handlePageNumberClick}/>
                        <li>
                            <button className='pagination-nav-btn' onClick={handleRightPageShiftBtn}> <i class="fa-solid fa-arrow-right"></i> </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination
