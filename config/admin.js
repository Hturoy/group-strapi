module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a558289e20e5d22b7f5e74f8287f657f'),
  },
});
