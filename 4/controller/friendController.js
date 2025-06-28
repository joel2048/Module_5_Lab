const friends = require('../models/friends')

module.exports = {
    getFriends: (req, res) => {
        res.json(friends)
    },

    filter: (req, res) => {
        console.log(req.query)
        let filterLetter = req.query.letter
        let filterGender = req.query.gender;
        let matchingFriends = [...friends];

        if (filterLetter) {
            matchingFriends = matchingFriends.filter(friend => friend.name.toLowerCase().startsWith(filterLetter.toLocaleLowerCase()))
        }


        if (filterGender) {
            matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
        }
        
        if (matchingFriends.length > 0) {
            // return valid data when the gender matches 
            res.status(200).json(matchingFriends)
        } else {
            // and an error response when there are no matches
            res.status(404).json({error: "No friends matching gender "+filterGender})
        }  
    },

    info: (req, res) => {
        console.log(req.headers);

        const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;

        res.json({
            'user-agent': userAgent,
            'content-type': contentType,
            accept: accept
        });
    },

  friendByID: (req, res) => {
        console.log(req.params);

        let friendID = parseInt(req.params.id);
        let friendByID = friends.find(friend => friend.id === friendID);

        if (friendByID) {
            res.json(friendByID);
        } else {
            res.status(404).json({ error: 'Friend not found' });
        }
  },

  updateFriend: (req, res) => {
        let friendId = parseInt(req.params.id);
        let updatedFriend = req.body;

        // Replace the old friend data for friendId with the new data from updatedFriend
        let index = friends.findIndex(friend => friend.id === friendId);

        if (index !== -1) {
            friends[index] = { ...friends[index], ...updatedFriend, id: friendId };
            res.json({ message: 'Friend updated successfully', data: friends[index] });
        } else {
            // Modify this response with the updated friend, or a 404 if not found
            res.status(404).json({ error: 'Friend not found' });
        }
  }
};