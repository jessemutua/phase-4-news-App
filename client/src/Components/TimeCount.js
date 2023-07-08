import React, { useEffect, useState } from 'react';
import "../styles/time-count.css"


function TimeCount() {
    const [timeSpent, setTimeSpent] = useState(0);
    const [articleTitles, setArticleTitles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeSpent((prevTimeSpent) => prevTimeSpent + 1);
        }, 1000);

        // Fetch article titles
        fetch('/articles')
            .then((response) => response.json())
            .then((data) => {
                const titles = data.map((article) => article.title);
                setArticleTitles(titles);
            })
            .catch((error) => {
                console.error('Error fetching article titles:', error);
            });

        return () => clearInterval(interval);
    }, []);

    return ( <
        div className = 'sidebar-container' >
        <
        div className = "sidebar" >
        <
        div className = "time-spent" > Time Spent on App: { timeSpent }
        seconds < /div> <
        h3 > Here are some top headlines: < /h3> <
        ul className = "article-list" > {
            articleTitles.map((title, index) => ( <
                li key = { index }
                className = "article-item" > { title } <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default TimeCount;