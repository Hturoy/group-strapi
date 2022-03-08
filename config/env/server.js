module.exports = ({ env }) => ({
  url: env("https://dashboard.heroku.com/apps/dota-builds"),
  proxy: true,
  app: { keys: env.array("APP_KEYS", ["Key-1", "Key-2"]) },
});