const express = require("express");
const router = express.Router();
const friendController = require("../controller/friendController")


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating


// default endpoint, gets all friends
router.get('/', (req, res) => {
    friendController.getFriends(req, res)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    friendController.filter(req, res)
})

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    friendController.info(req, res)
});

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
router.get('/:id', (req, res) => {
    friendController.friendByID(req, res)
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
// router.post('/', (req, res) => {
//     let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
//     console.log(newFriend) // 'body' will now be an object containing data sent via the request body

//     // we can add some validation here to make sure the new friend object matches the right pattern
//     if (!newFriend.name || !newFriend.gender) {
//         res.status(500).json({error: 'Friend object must contain a name and gender'});
//         return;
//     }
//     else if (!newFriend.id) {
//         newFriend.id = friends.length + 1; // generate an ID if one is not present
//     }

//     // if the new friend is valid, add them to the list and return the successfully added object
//     friends.push(newFriend)
//     res.status(200).json(newFriend)
// })

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    friendController.updateFriend(req, res)
});

module.exports = router;