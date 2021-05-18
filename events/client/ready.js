module.exports = (Discord, client) => {
    client.user.setPresence({
        activity: {
            name: `--help`,
            type: "WATCHING"
        },
        status: 'online'
      })
     .then(console.log)
    .catch(console.error);
}
