module.exports = {
    overrides: [
      {
        files: ['service-worker.js'], 
        env: {
          browser: true,
        },
        globals: {
          self: 'readonly', 
        },
      },
    ],
  };