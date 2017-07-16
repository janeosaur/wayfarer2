function index(req,res) {
  res.json({
    message: 'Welcome to Jane\'s Wayfarer API!',
    description: 'Below are the available endpoints',
    endpoint: [
      {
        method: 'GET',
        path: '/api',
        description: 'shows this & all avaliable routes as JSON :)'
      },
      {
        method: 'GET',
        path: '/api/cities',
        description: 'shows all city as JSON'
      },
      {
        method: 'GET',
        path: '/api/posts',
        description: 'shows all posts as JSON'
      },
      {
        method: 'GET',
        path: '/api/cities/:cityId',
        description: 'shows a specific city as JSON'
      },
      {
        method: 'GET',
        path: '/api/cities/:cityId/posts/',
        description: 'shows all posts within a specific city as JSON'
      },
      {
        method: 'GET',
        path: '/api/cities/:cityId/posts/:postId',
        description: 'shows a specific post within a specific city JSON'
      },
      {
        method: 'POST',
        path: '/api/cities/:cityId/posts/:postId',
        description: 'creates a specifc post in a specific city'
      },
      {
        method: 'PUT',
        path: '/api/cities/:cityId/posts/:postId',
        description: 'updates a specific post in a specific city'
      },
      {
        method: 'DELETE',
        path: '/api/cities/:cityId/posts/:postId',
        description: 'deletes a specific post in a specfic city'
      }
    ]
  });
}

module.exports = {
  index: index
}
