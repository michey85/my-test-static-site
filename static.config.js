import path from 'path';
import axios from 'axios';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'q9wagk5qt0q4',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '5T-ZwgP8VsnmrSsRou23CFig1ej2wFerryDEJKCniJg',
});

client.getEntries();

export default {
    getRoutes: async () => {
        const { data: posts } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        const { items } = await client.getEntries();
        console.log(items);
        return [
            {
                path: '/blog',
                getData: () => ({
                    items,
                }),
                children: items.map((post) => ({
                    path: `/post/${post.sys.id}`,
                    template: 'src/containers/Post',
                    getData: () => ({
                        post,
                    }),
                })),
            },
        ];
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
};
