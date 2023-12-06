require('dotenv').config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

module.exports = {
  local: {
    localDatabaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qvqotfv.mongodb.net/?retryWrites=true&w=majority`,
    secret: "password"
  }
}
