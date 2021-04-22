import React from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';

export default function Post() {
    const { post } = useRouteData();
    return (
        <div>
            <Link to='/blog/'>{'<'} Back</Link>
            <br />
            <h3>{post.fields.name}</h3>
            <p>{post.fields.description}</p>
            <img src={post.fields.featuredImage.fields.file.url} />
        </div>
    );
}
