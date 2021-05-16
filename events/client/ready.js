module.exports = (Discord, client) => {
    client.user.setPresence({
        activity: {
            name: `--help | ${(client.users.cache.size)} user(s)`,
            type: "WATCHING" 
        },
        status: 'online'
      })
     .then(console.log)
    .catch(console.error);
}
