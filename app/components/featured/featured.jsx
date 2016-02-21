import React from 'react'

const tilesData = [
  {
    img: 'http://www.fillmurray.com/300/300',
    title: 'Learning React',
    author: 'Donald McKendrick',
  },
  {
    img: 'http://www.fillmurray.com/200/300',
    title: 'Writing Poetry',
    author: 'Peter Gault',
  },
  {
    img: 'http://www.fillmurray.com/300/200',
    title: 'Camera',
    author: 'Danson67',
  },
  // {
  //   img: 'http://www.fillmurray.com/400/300',
  //   title: 'Morning',
  //   author: 'fancycrave1',
  // },
  // {
  //   img: 'http://www.fillmurray.com/300/400',
  //   title: 'Hats',
  //   author: 'Hans',
  // },
  // {
  //   img: 'http://www.fillmurray.com/350/300',
  //   title: 'Honey',
  //   author: 'fancycravel',
  // },
  // {
  //   img: 'http://www.fillmurray.com/300/350',
  //   title: 'Vegetables',
  //   author: 'jill111',
  // },
  // {
  //   img: 'http://www.fillmurray.com/370/300',
  //   title: 'Water plant',
  //   author: 'BkrmadtyaKarki',
  // },
];

export default React.createClass({
  renderCards: function () {
    return tilesData.map((tile) => {
      return (
        <div className="col-sm-6 col-md-4" key={tile.img}>
          <div className="thumbnail">
            <img src={tile.img} alt="..."/>
            <div className="caption">
              <h3>{tile.title}</h3>
              <p>{tile.author}</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      )
    })
  },

  render: function () {
    return (
      <div className="row">
        {this.renderCards()}
      </div>
    );
  }
});
