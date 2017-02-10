// import React from 'react';
// import ReactSwipe from 'react-swipe';

// export default class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   next() {
//     this.refs.reactSwipe.next();
//   }

//   prev() {
//     this.refs.reactSwipe.prev();
//   }

//   renderRentals() {
//     return this.props.rentals.map((rental) => {

//       return (
//         <div key={rental.id} className="ui card">
//           <div className="ui image">
//             <img src="http://lorempixel.com/400/200" />
//           </div>
//           <div className="content">
//             <div className="header">{rental.title}</div>
//             <a href="/rentals/1">See More Details</a>
//             <div className="meta">
//               <a>{rental.address}</a>
//             </div>
//             <div className="description">
//               {rental.property_type}
//             </div>
//           </div>
//           <div className="extra content">
//             <span className="right floated">
//               Posted by
//             </span>
//             <span>
//               <i className="user icon"></i>
//               Posted on {rental.created_at}
//             </span>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <div className="ui stackable grid container">
//         <ReactSwipe className="carousel" swipeOptions={{continuous: true }}>
//           {this.renderRentals()}
//         </ReactSwipe>
//         <div className="ui one column centered grid">
//           <div className="row">
//             <div className="ui large buttons">
//               <button className="ui button" onClick={::this.prev}>Dislike</button>
//                 <div className="or"></div>
//               <button className="ui button" onClick={::this.next}>Like</button>
//             </div>
//           </div>
//         </div>
//       </div>  
//     );
//   }
// }



















// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import querystring from 'querystring';
// import ReactSwipe from 'react-swipe';

// const query = querystring.parse(window.location.search.slice(1));

// // generate slide panes
// const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
// const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
//   return (
//     <div key={i}>
//       <div className="item">{i}</div>
//     </div>
//   );
// });

// // change Swipe.js options by query params
// const startSlide = parseInt(query.startSlide, 10) || 0;
// const swipeOptions = {
//   startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
//   auto: parseInt(query.auto, 10) || 0,
//   speed: parseInt(query.speed, 10) || 300,
//   disableScroll: query.disableScroll === 'true',
//   continuous: query.continuous === 'true',
//   callback() {
//     console.log('slide changed');
//   },
//   transitionEnd() {
//     console.log('ended transition');
//   }
// };

// class Page extends Component {
//   next() {
//     this.refs.reactSwipe.next();
//   }

//   prev() {
//     this.refs.reactSwipe.prev();
//   }

//   render() {
//     return (
//       <div className="center">
//         <h1>ReactSwipe.js</h1>
//         <h2>Open this page from a mobile device (real or emulated).</h2>
//         <h2>You can pass <a href="https://github.com/voronianski/swipe-js-iso#config-options">Swipe.js options</a> as query params.</h2>

//         <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={swipeOptions}>
//             {paneNodes}
//         </ReactSwipe>

//         <div>
//           <button type="button" onClick={::this.prev}>Prev</button>
//           <button type="button" onClick={::this.next}>Next</button>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('app')
// );















import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import querystring from 'querystring';
import ReactSwipe from 'react-swipe';

// const query = querystring.parse(window.location.search.slice(1));

// // generate slide panes
// const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
// const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
//   return (
//     <div key={i}>
//       <div className="item">{i}</div>
//     </div>
//   );
// });

// // change Swipe.js options by query params
// const startSlide = parseInt(query.startSlide, 10) || 0;
// const swipeOptions = {
//   startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
//   auto: parseInt(query.auto, 10) || 0,
//   speed: parseInt(query.speed, 10) || 300,
//   disableScroll: query.disableScroll === 'true',
//   continuous: query.continuous === 'true',
//   callback() {
//     console.log('slide changed');
//   },
//   transitionEnd() {
//     console.log('ended transition');
//   }
// };

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {

      return (
        <div key={rental.id} className="ui card">
          <div className="ui image">
            <img src="http://lorempixel.com/400/200" />
          </div>
          <div className="content">
            <div className="header">{rental.title}</div>
            <a href="/rentals/1">See More Details</a>
            <div className="meta">
              <a>{rental.address}</a>
            </div>
            <div className="description">
              {rental.property_type}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Posted by
            </span>
            <span>
              <i className="user icon"></i>
              Posted on {rental.created_at}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="center">

        <ReactSwipe ref="reactSwipe" swipeOptions={{continuous: true }}>
          {this.renderRentals()}
        </ReactSwipe>
        <div className="ui center aligned container">
          <div className="ui large buttons">
            <button className="ui button" onClick={::this.prev}>Dislike</button>
              <div className="or"></div>
            <button className="ui button" onClick={::this.next}>Like</button>
          </div>
        </div>
      </div>
    );
  }
}