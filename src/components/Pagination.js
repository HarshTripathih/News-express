import React from 'react'
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import axios from 'axios';


const Pagination = (props) => {
    const apiKey = '8drawH6vEa5a27acx7LazwyzOhOqNPh4SclSFgoZ65s';
    const pageCount = props.news ? Math.ceil(props.totalResults / props.pageSize) : 0;
    console.log(pageCount)
    if (pageCount === 1) { return null };
    const pages = _.range(1, pageCount + 1);


    const pagination = async (pageNo) => {
        const url = 'https://api.newscatcherapi.com/v2/search?';
        await axios.get(url,{
            params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: `${props.page - 1}`, page_size: `${props.pageSize}` },
            headers: {
                // 'x-api-key': 'fHYlr3uUwTZTypQkwdqd11MBdmRf9lD1We8-1bIL_Ds'
                'x-api-key': `${apiKey}`
            }
        }).then((res) => {
            props.setPage(pageNo);
            props.setArticles(res.data.articles);
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <nav>
            <ul className='pagination pagination-lg'>
                {pages.map(value => (
                    <li key={value} className={value === props.page ? "page-item active" : "page-item"}>
                        <a onClick={() => pagination(value)} className="page-link">{value}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination