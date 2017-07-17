console.log ('This seed file is a-go!')
var db = require("./models");

var citiesList = [];
citiesList.push({
  name: 'San Francisco',
  country: 'United States',
  description: 'San Francisco, is the cultural, commercial, and financial \
                center of Northern California. It is the birthplace of the \
                United Nations. ',
  image: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/08/SANFRANCISCO.jpg',
  image2: '',
  comments: []
});

citiesList.push({
  name: 'London',
  country: 'United Kingdom',
  description: 'London is the capital and most populous city of England \
                and the United Kingdom. London is a leading global city\
                in the arts, commerce, education, entertainment, fashion, \
                finance, healthcare, media, professional services, research and \
                development, tourism, and transportation.',
  image: 'https://static01.nyt.com/images/2015/12/09/travel/09intransitphoto-london/09intransitphoto-london-facebookJumbo.jpg',
  image2: '',
  comments: []
});

citiesList.push({
  name: 'Gibraltar',
  country: 'United Kingdom',
  description: 'Gibraltar is a British Overseas Territory located on the southern end of the Iberian Peninsula.',
  image: 'http://www.visitgibraltar.gi/images/homepage_slider/df1aw_slide2.jpeg',
  image2: '',
  comments: []
});

var commentsList = [];
commentsList.push({
  name: 'Ariana Latte',
  text: 'San Francisco, or "San Fran kissco" as my 2 year old niece would say, is a wonderful city.  I have been here countless times and I can never get tired of the city has to offer!  This city has a lot of culture, I just love it!',
  date: '1499328007952',
  user: '314124',
  title: 'The Tourist in Me',
  city: 'San Francisco',
  image: 'https://s-media-cache-ak0.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
});
commentsList.push({
  name: 'Sejin Park',
  text: 'For me, when I visited SF for the very first time someone broke into my car and stole my bag. I was heartbroken, girls can understand my pain better. That day I decided, I will never visit or move to this city again. But destiny had something else in store for me and I bumped into this city again or should I say job opportunity brought me to this city again. ',
  date: '1499990000000',
  user: '21111',
  title: 'Better think twice!',
  city: 'San Francisco',
  image: 'https://asset-pipeline-passenger-test.herokuapp.com/assets/sejin-ebe0025ae539037112993dc5068c4ac1c1e053eadd3a0760ea0c4cd5697b5f94.jpg'
});
commentsList.push({
  name: 'Paul White',
  text: "San Francisco is an amazing city.  It is The City.  I came for the first time back in 2009 for my first week of training at my current job.  I'll never forget coming up from the Powell Street Station and being on Market Street.  Walking up Powell Street to the hotel.  Going to dinner and sitting in the Starlight Room looking out over the buildings and the hills and the pink skies.  That first week was amazing.  Monday night on Haight Street, Tuesday night on Columbus Avenue, Wednesday night in Chinatown, Thursday night in The Castro.  They days were spent going around to many different parts of The City - now places I see every day.  San Francisco has this energy that is hard to equal - because it is both intense and positive.  And, it's just a beautiful environment.",
  date: '1500200000099',
  user: '311',
  title: 'SF the Amazing',
  city: 'San Francisco',
  image: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg'
});
commentsList.push({
  name: 'Sejin Park',
  text: 'What more can I say... I love London! you have GOT to try it!',
  date: '1498899980369',
  user: '21111',
  title: 'Fish & Chips',
  city: 'London',
  image: 'https://asset-pipeline-passenger-test.herokuapp.com/assets/sejin-ebe0025ae539037112993dc5068c4ac1c1e053eadd3a0760ea0c4cd5697b5f94.jpg'
});
commentsList.push({
  name: 'Ariana Latte',
  text: 'London is a destination that you can continue to come back to again and again and continue to enjoy its delights.',
  date: '1494380293369',
  user: '314124',
  title: 'First time in London',
  city: 'London',
  image: 'https://s-media-cache-ak0.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
});
commentsList.push({
  name: 'Paul White',
  text: "London has gone from a food wasteland to a foodie's delight. Be sure to sample its international cuisines, including the explosion in fresh, local British cooking.",
  date: '1494380293369',
  user: '311',
  title: 'Food Here is Amazing',
  city: 'London',
  image: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg'
});
commentsList.push({
  name: 'Paul White',
  text: 'Our trip to Gibraltar was very nice. The drive was relaxing and Paco was entertaining. One small thing which would be nice is to have Aqua available on the bus at a small charge. The caves are amazing and the time in town was plenty. We made new friends and shared lunch and conversation.',
  date: '1500280293369',
  user: '311',
  title: '#bucketlist',
  city: 'Gibraltar',
  image: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg'

});
commentsList.push({
  name: 'Good Boy',
  text: 'London is a great place to see the sights, and there are lots of places to pee!',
  date: '149438223369',
  user: '3',
  title: 'My favorite things to do in London',
  city: 'London',
  image: 'https://s-media-cache-ak0.pinimg.com/736x/b4/4f/94/b44f94ca890a1485a8da5cc509ee7a9a--maltese-people-puppy-face.jpg'
});
commentsList.push({
  name: 'Sejin Park',
  text: 'Gibraltar is most famous for The Rock of Gibraltar, a 426 meter high limestone rock rising out of the sea. The rock can be seen for many miles. It is home to the Barbary Apes, a type of tail-less monkey which are the only wild monkeys in Europe.',
  date: '1494380080369',
  user: '21111',
  title: 'Rock of Gibraltar',
  city: "Gibraltar",
  image: 'https://asset-pipeline-passenger-test.herokuapp.com/assets/sejin-ebe0025ae539037112993dc5068c4ac1c1e053eadd3a0760ea0c4cd5697b5f94.jpg'
});
commentsList.push({
  name: 'Ariana Latte',
  text: 'This is one of the "must see attractions" of Gibraltar. It is definitely worth a visit and very beautiful caves which have been made very interesting.',
  date: '1500000080369',
  user: '314124',
  title: 'Good times were had',
  city: "Gibraltar",
  image: 'https://s-media-cache-ak0.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
});


db.Comment.remove({}, function(err, comments) {
  console.log('removed all comments');
  db.Comment.create(commentsList, function(err, comments){
    console.log('created all comments');
    db.City.remove({}, function(err, cities) {
      citiesList.forEach(function (cityData) {
        var city = new db.City({
          name: cityData.name,
          country: cityData.country,
          description: cityData.description,
          image: cityData.image
        });
        db.Comment.find({city: cityData.name})
          .populate('comments')
          .exec (function(err, foundComments) {
            if (err) {
              console.log('err with db.comment.find', err)
            } else {
              city.comments = foundComments;
              city.save(function(err, savedCity) {
                console.log('city with ref comments successfully saved')
              })
            }
          })
        })
      })
    })
  })
