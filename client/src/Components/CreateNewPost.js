import React, { useState } from 'react';

function CreateNewPost() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [published, setPublished] = useState('');
    const [image, setImage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const randomAuthorId = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000

        const article = {
            title,
            url,
            description,
            authorId: randomAuthorId,
            published,
            image,
        };

        createArticle(article);
    }

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
                // Reset the form fields after creating the article
                setTitle('');
                setUrl('');
                setDescription('');
                setPublished('');
                setImage('');
            } else {
                console.error('Failed to create article');
            }
        } catch (error) {
            console.error('Error creating article:', error);
        }
    }

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
            (e) => setDescription(e.target.value) } > < /textarea> <
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
}

export default CreateNewPost;