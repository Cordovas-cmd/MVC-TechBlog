const { Post } = require('../models');

const postData = [{
        title: "Fear of Job Insecurity",
        content: "What if I don't get a new secure job?",
        user_id: 1

    },
    {
        title: "So much to learn!",
        content: "So little time",
        user_id: 2
    },
    {
        title: "It's better to burn out then to fade away",
        content: "I always say say say",
        user_id: 3
    },
    {
        title: "WELCOME TO THE NHK",
        content: "What even is daylight anymore?",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
