import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';
import './News.css';
import Spinner from './Spinner';

const News = (props) => {
    const [news, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [filterVal, setFilterVal] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);
    const [loading, setLoading] = useState(true);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // const apiKey = 'NKrj1tlMqqHXLQVbvl2e0di_XIGRHjt_jbyrSXBJPoI';
    // const apiKey = 'fHYlr3uUwTZTypQkwdqd11MBdmRf9lD1We8-1bIL_Ds';
    // const apiKey ='vQ0BKG6vDkFVA6bTa5msyrpWTeKb8MT2ZKXuYQo5OQU';
    // const apiKey = '8drawH6vEa5a27acx7LazwyzOhOqNPh4SclSFgoZ65s';
    // const apiKey = 'NQXGhHOpCu7aIn4yFPcq4URHBzp68mnEjLM-WBqMZQk';
    // const apiKey = 'Fv-kTL0B5nQFA3Q_diOMUSxy3vVo0EMTXa2agl-GJYY';
    // const apiKey = '0gutv6dEJ0zTNUO4PVl6kEUva5gsXOkfmikKHdx3yH0';
    // const apiKey = '8yAua9PKXVXnwY6l5F2ZTfHMehPzMk6re2nR7OXyclI';
    const apiKey = process.env.REACT_APP_APIKEY;
    useEffect(() => {

        const getNews = async () => {
            const url = 'https://api.newscatcherapi.com/v2/search?';
            setLoading(true);
            await axios.get(url, {
                params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: setPage, page_size: 'props.pageSize' },
                headers: {
                 
                    'x-api-key': `${apiKey}`
                }
            }).then((res) => {
                // console.log(res.data.articles);
                setArticles(res.data.articles);
                setTotalResults(res.data.total_hits);
                // console.log(res.data.total_hits);
                setSearchApiData(res.data.articles);
                setLoading(false)
            }).catch((err) => console.log(err));
        }
        document.title = `${capitalizeFirstLetter(props.category)} - News`;
        getNews();
    }, [setPage])

    //Pagination component
    const pageCount = news ? Math.ceil(totalResults / props.pageSize) : 0;
    // console.log(pageCount)
    if (pageCount === 1) { return null };
    const pages = _.range(1, pageCount + 1);


    const pagination = async (pageNo) => {
        const url = 'https://api.newscatcherapi.com/v2/search?';
        await axios.get(url, {
            params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: 'page-1', page_size: 'props.pageSize' },
            headers: {
               
                'x-api-key': `${apiKey}`
            }
        }).then((res) => {
            setPage(pageNo);
            setArticles(res.data.articles);
        }).catch((err) => {
            console.log(err);
        })
    }

    //Creating filter search
    const handleFilter = (e) => {
        e.preventDefault()

        if (e.target.value === "") {
            const url = 'https://api.newscatcherapi.com/v2/search?'
            axios.get(url, {
                params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: 'page', page_size: 'props.pageSize' },
                headers: {
               
                    'x-api-key': `${apiKey}`
                }
            }).then((res) => {
                setArticles(res.data.articles);
            }).catch((err) => console.log(err));
        } else {
            const filterResult = searchApiData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setArticles(filterResult)
        }
        setFilterVal(e.target.value)

    }


    //handel Previous button 
    const handlePrevClick = async () => {
        const url = `https://api.newscatcherapi.com/v2/search?`;
        // console.log(page - 1)
        await axios.get(url, {
            params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: page - 1, page_size: 'props.pageSize' },
            headers: {
                
                'x-api-key': `${apiKey}`
            }
        }).then((res) => {
            setPage(page - 1);
            setArticles(res.data.articles);

        }).catch((err) => { console.log(err) })
    }

    //handel Next button
    const handleNextClick = async () => {
        // console.log(totalResults / props.pageSize);
        // console.log("next")
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

        }
        else {
            const url = `https://api.newscatcherapi.com/v2/search?`;
            await axios.get(url, {
                params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: page + 1, page_size: 'props.pageSize' },
                headers: {
                    
                    'x-api-key': `${apiKey}`
                }
            }).then((res) => {
                setPage(page + 1);
                console.log(page + 1);
                setArticles(res.data.articles);

            }).catch((err) => { console.log(err) })
        }
    }




    return (
        <>
            <form className='search-form' >
                <input
                    placeholder="Search for the news..."
                    value={filterVal}
                    onChange={(e) => handleFilter(e)}
                />
            </form>

            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Top {capitalizeFirstLetter(props.category)} News Headlines</h1>
            <div className='container d-flex justify-content-between'>
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <nav>
                    <ul className='pagination pagination-lg'>
                        {pages.map(value => (
                            <li key={value} className={value === page ? "page-item active" : "page-item"}>
                                <a onClick={() => pagination(value)} className="page-link">{value}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
            {loading && <Spinner />}
            <div className='container'>
                <div className="row">
                    {news.map((element) => {
                        return <div className="col-md-4" key={element.link}>
                            <NewsItems
                                title={element.title ? element.title : ""}
                                description={element.excerpt ? element.excerpt : ""}
                                imageUrl={element.media}
                                newsUrl={element.link}
                                author={element.authors ? element.authors : ""}
                                date={element.published_date}
                                source={element.clean_url}
                            />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <nav>
                        <ul className='pagination pagination-lg'>
                            {pages.map(value => (
                                <li key={value} className={value === page ? "page-item active" : "page-item"}>
                                    <a onClick={() => pagination(value)} className="page-link">{value}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 600,
    category: 'business',
}

News.prop = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News