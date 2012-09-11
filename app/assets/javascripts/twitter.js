// http://od-eon.com/blogs/stefan/asynchronous-loading-twitter-widgets/
function load_tweets(){
  new TWTR.Widget({
    id: 'twitter_container', // added
    version: 2,
    type: 'profile',
    rpp: 3,
    interval: 30000,
    width: 210,
    height: 275,
    theme: {
      shell: {
        background: '#EBEBEB',
        color: '#000000'
      },
      tweets: {
        background: '#EBEBEB',
        color: '#000000',
        links: '#7C7C7C'
      }
    },
    features: {
      scrollbar: false,
      loop: false,
      live: true,
      behavior: 'all'
    }
  }).render().setUser('hackerspace_krk').start();
}
