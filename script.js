var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://i66.tinypic.com/t6xc1w.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'http://i65.tinypic.com/6fw40l.jpg'
	},
	{
		id: 3,
		title: 'Władca pierścieni',
		desc: 'Melodramat o właścicielu zakładu jubilerskiego',
		img: 'http://i64.tinypic.com/2i7vas1.jpg'
	},
	{
		id: 4,
		title: 'Ja, robot',
		desc: 'Mockument o podróży blendera przez kolejne szuflady szafki kuchennej',
		img: 'http://i63.tinypic.com/drcaph.jpg'
	},
	{
		id: 5,
		title: 'Pierwsza krew',
		desc: 'Wybitny kardiochirurg John Rambo przechodzi szkolenie BHP z zasad udzielenia pierwszej pomocy',
		img: 'http://i68.tinypic.com/2eebo83.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('div', {className: 'movie-instance'},
			React.createElement('p', {className: 'movie-desc'}, movie.desc),
			React.createElement('img', {src: movie.img, className: 'poster'})
			)
		);
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);


ReactDOM.render(element, document.getElementById('app'));