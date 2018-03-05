const sidebar = require('../helpers/sidebar');
module.exports = {
  index: (req, res)=> {
    const ViewModel = {
    image: {
        uniqueId: 1,
        title: 'Sample Image 1',
        description: 'This is a sample.',
        filename: 'sample1.jpg',
        Views: 0,
        likes: 0,
        timestamp: Date.now()
    },
    comments: [{
        image_id: 1,
        email: 'test@testing.com',
        name: 'Test Tester',
        gravatar: 'http://lorempixel.com/75/75/animals/1',
        comment: 'This is a test comment...',
        timestamp: Date.now()
    }, {
        image_id: 1,
        email: 'test@testing.com',
        name: 'Test Tester',
        gravatar: 'http://lorempixel.com/75/75/animals/2',
        comment: 'Another followup comment!',
        timestamp: Date.now()
    }]
};

    //res.render('image.handlebars');
    sidebar(ViewModel, (ViewModel)=> {
      res.render('image.handlebars', ViewModel);
    });
   },
    create(req, res) {
        res.send('The image:create POST controller');
    },
    like(req, res) {
    res.json({ likes: 1 });
    },
    comment(req, res) {
        res.send('The image:comment POST controller');
    }
};
