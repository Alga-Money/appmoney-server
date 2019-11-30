const {User} = require('../models/user');

module.exports = {
    singnup(req,res) {
        
    },
    async store (req,res) {
        try {
            
        const usrer = await User.create(req.body);
        } catch (error) {
            res.status(400).send()    
        }
        const usrer = await User.create(req.body);
        

    }
}