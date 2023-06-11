const express = require("express");
const router = express.Router();
const answer_model = require("../models/answer_collection.js");
const user_model = require("../models/user_collection.js");

// GET REQUESTS

router.get("/:id", verifyToken, async (req, res) => {
    try {
        // Check if user is allow to get the content
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        const user = await user_model.findOne({ token: token })
        if (!user.access)
            return res.status(403).json({ response: "Cannot access the content." });

        
        const message = await answer_model.findById(req.params.id);
        res.status(200).json({ response: message});
    } catch (err) {
        res.status(500).json({ response: err.message });
    }
});



module.exports = router;