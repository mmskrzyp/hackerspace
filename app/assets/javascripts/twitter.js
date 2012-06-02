// http://od-eon.com/blogs/stefan/asynchronous-loading-twitter-widgets/
new TWTR.Widget({
  id: 'twitter_container', // added
  version: 2,
  type: 'profile',
  rpp: 3,
  interval: 30000,
  width: 550,
  height: 150,
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
	scrollbar: true,
	loop: false,
	live: true,
	behavior: 'all'
  }
}).render().setUser('hackerspace_krk').start();