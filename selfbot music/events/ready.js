const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("//play || knifecodez || //volume", {type: "PLAYING"});

    utils.log(`Logged in as ${client.user.tag} !`);

};