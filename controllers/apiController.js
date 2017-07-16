function index(req,res) {
  res.json({
    message: 'Welcome to Jane\'s Wayfarer API!',
    description: 'Below are the available endpoints',
    endpoint: [
      {
        path: '/api',
        method: 'GET',
        description: 'shows this & all available routes as JSON :)'
      },
      {
        path: '/api/comments',
        method: 'GET',
        description: 'shows all comments as JSON'
      },
      {
        path: '/api/comments/:id',
        method: 'GET',
        description: 'shows a comment as JSON'
      },
      {
        path: '/api/cities',
        method: 'GET',
        description: 'shows all cities as JSON'
      },
      {
        path: '/api/cities/:id',
        method: 'GET',
        description: 'shows a city as JSON'
      },
      {
        path: '/profile/comments/:name',
        method: 'GET',
        description: 'shows comments created by a user'
      }
    ]
  });
}

module.exports = {
  index: index
}
