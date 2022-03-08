module.exports = ({ env }) => ({
  url: env("https://dashboard.heroku.com/apps/group-assignment-noroff"),
  proxy: true,
  app: { keys: env.array("APP_KEYS", ["Key-1", "Key-2"]) },
});