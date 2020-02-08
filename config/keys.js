module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/possibleDB",
  secretOrKey: "secret"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
