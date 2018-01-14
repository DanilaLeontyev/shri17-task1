module.exports.index = function(req, res) {
  res.send(`
    <html>
      <head>
        <title>Shri 2018</title>
        <script src="scripts/test.js"></script>
      </head>
      <h1>Hello</h1>
    </html>
    `);
};

module.exports.users = function(req, res) {
  // Comment out this line:
  //res.send("respond with a resource");

  // And insert something like this instead:
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
};
