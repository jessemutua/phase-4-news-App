import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticlesCard';
import '../styles/article-list.css'

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        try {
            const response = await fetch('/articles');
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.log('Error fetching articles:', error);
        }
    }

    function handleDeleteArticle(articleId) {
        const updatedArticles = articles.filter((article) => article.id !== articleId);
        setArticles(updatedArticles);
    }

    return ( <
        div className = "article-list" > {
            articles.map((article) => ( <
                ArticleCard key = { article.id }
                article = { article }
                onDelete = { handleDeleteArticle }
                />
            ))
        } <
        /div>
    );
}

export default ArticleList;