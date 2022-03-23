module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '567f0f29019c0773f55e1ba4c61e85c2'),
  },
});
