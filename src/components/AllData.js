// import React from "react";

// function AllData(props) {
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>first name</th>
//           <th>task</th>
//           <th>enjoyment</th>
//           <th>difficulty</th>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default AllData;

import React from "react";

class AllData extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return (
      <div>
        <table>
          <tr>
            <th>first name</th>
            <th>task</th>
            <th>enjoyment</th>
            <th>difficulty</th>
          </tr>
          {/* {reviews.map((review) => { */}
          {/* return ( */}
          <tr>
            {/* <td>{this.assignment.name}</td> */}
            {/* <td>{review.task}</td>
                <td>{review.enjoymentRating}</td>
                <td>{review.difficultyRating}</td> */}
          </tr>
          {/* ); })} */}
        </table>
      </div>
    );
  }
}
export default AllData;
