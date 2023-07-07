import React, { useState, useEffect } from 'react';

function CreateNewPost() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [published, setPublished] = useState('');
    const [image, setImage] = useState('');
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    async function fetchAuthors() {
        try {
            const response = await fetch('/authors');
            const data = await response.json();
            setAuthors(data);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Find the author with the matching name
        const selectedAuthor = authors.find((author) => author.name === authorName);

        // If author is found, create the article with the author's ID
        if (selectedAuthor) {
            const article = {
                title,
                url,
                description,
                authorId: selectedAuthor.id,
                published,
                image,
            };

            createArticle(article);
        } else {
            console.error('Author not found');
        }
    };

    async function createArticle(article) {
        try {
            const response = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });

            if (response.ok) {
                console.log('Article created successfully');
                // Reset form fields
                setTitle('');
                setUrl('');
                setDescription('');
                setAuthorName('');
                setPublished('');
                setImage('');
            } else {
                console.error('Failed to create article');
            }
        } catch (error) {
            console.error('Error creating article:', error);
        }
    };

    return ( <
        div >
        <
        h2 > Create Article < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Title: < /label> <
        input type = "text"
        value = { title }
        onChange = {
            (e) => setTitle(e.target.value) }
        /> <
        /div> <
        div >
        <
        label > URL: < /label> <
        input type = "text"
        value = { url }
        onChange = {
            (e) => setUrl(e.target.value) }
        /> <
        /div> <
        div >
        <
        label > Description: < /label> <
        textarea value = { description }
        onChange = {
            (e) => setDescription(e.target.value) } >
        < /textarea> <
        /div> <
        div >
        <
        label > Author Name: < /label> <
        input type = "text"
        value = { authorName }
        onChange = {
            (e) => setAuthorName(e.target.value) }
        /> <
        /div> <
        div >
        <
        label > Published: < /label> <
        input type = "text"
        value = { published }
        onChange = {
            (e) => setPublished(e.target.value) }
        /> <
        /div> <
        div >
        <
        label > Image: < /label> <
        input type = "text"
        value = { image }
        onChange = {
            (e) => setImage(e.target.value) }
        /> <
        /div> <
        button type = "submit" > Create < /button> <
        /form> <
        /div>
    );
};

export default CreateNewPost