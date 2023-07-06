import React from 'react';

function ArticleCard({ article }) {
    return ( <
        div className = "article-card" >
        <
        img src = { article.image }
        alt = { article.title }
        /> <
        h3 > { article.title } < /h3> <
        /div>
    );
}

export default ArticleCard;