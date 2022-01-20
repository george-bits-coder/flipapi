const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://kooappclone:kooappclone@cluster0.6nomy.mongodb.net/test");
};
