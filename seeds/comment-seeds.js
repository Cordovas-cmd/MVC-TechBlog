  
const { Comment } = require('../models');

const commentData = [{
        comment_text: "I hope I get hired.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Where are my TA's ;-;",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I want to do the right thing!!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Where do I go? What do I do?",
        user_id: 4,
        post_id: 4
    }
];

// here we edit more than one record at a time by utilizing bulkCreate
// we will use the above array of objects to seed our database with some sample comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;