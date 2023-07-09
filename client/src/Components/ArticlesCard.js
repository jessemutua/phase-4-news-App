import React, { useState } from 'react';
import '../styles/article-card.css'

function ArticleCard({ article, onDelete }) {
    const [additionalData, setAdditionalData] = useState(null);

    function fetchAdditionalData() {
        fetch(`/articles/${article.id}`)
            .then((response) => response.json())
            .then((data) => {
                // Update the state with the fetched additional data
                setAdditionalData(data);
            })
            .catch((error) => {
                console.error('Error fetching additional data:', error);
            });
    };

    function handleDelete() {
        fetch(`/articles/${article.id}`, {
                method: 'DELETE',
            })
            .then((response) => response.json())
            .then((data) => {
                // Call the onDelete callback to inform the parent component about the deletion
                onDelete(article.id);
            })
            .catch((error) => {
                console.error('Error deleting article:', error);
            });
    }
    return ( <
        div className = "article-card" >
        <
        img src = { article.image }
        alt = { article.title }
        /> <
        h3 > { article.title } < /h3> {
            additionalData ? ( <
                div >
                <
                p > { additionalData.description } < /p> <
                a href = { additionalData.url }
                target = "_blank"
                rel = "noopener noreferrer" >
                Read More <
                /a> <
                /div>
            ) : ( <
                button onClick = { fetchAdditionalData } > Show more < /button>        
            )
        } <
        button className = 'delete'
        onClick = { handleDelete } > Delete < /button> <
        /div>
    );
}

export default ArticleCard;