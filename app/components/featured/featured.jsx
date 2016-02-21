import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

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
  {
    img: 'http://www.fillmurray.com/400/300',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.fillmurray.com/300/400',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.fillmurray.com/350/300',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.fillmurray.com/300/350',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.fillmurray.com/370/300',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
