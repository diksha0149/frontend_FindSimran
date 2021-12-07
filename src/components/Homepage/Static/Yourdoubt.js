
// import React, { Component } from 'react';
// import Screenshot from './images/editvote.png'
// import Data from "./QnA";
// import {
//   PlusIcon,
//   MinusIcon
// } from "@heroicons/react/solid";



// export class doubtExchange extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topic: "",
//     };
//   }

//   render() {
//     return (
//       <div>
//         {Data.map((block) => (
//           <div className="flex flex-col bg-white rounded-t-2xl mt-2 shadow-sm">
//             <div
//               className={`relative px-3 py-3 flex rounded-t-2xl font-medium cursor-pointer border-b-2 ${this.state.topic === block.id && "bg-blue-300"
//                 }`}
//               onClick={() =>
//                 this.setState({
//                   topic:
//                     this.state.topic === block.id ? "" : block.id,
//                 })
//               }
//             >
//               {this.state.topic === block.id ? (
//                 <MinusIcon
//                   width={21}
//                   height={21}
//                   className="mx-3 text-red-600"
//                 />
//               ) : (
//                 <PlusIcon
//                   width={21}
//                   height={21}
//                   className="mx-3 text-blue-600"
//                 />
//               )}
//               <p className="mr-5">{block.id}</p>
//               {/* <p className="text-gray-500 absolute right-2">
//                 {block.list.length}
//               </p> */}
//             </div>
//             {this.state.topic === block.id &&
//               // block.list.map((item) => (
//                 <div className="flex flex-col bg-white mt-2 rounded-t-2xl shadow-sm">
                  
//                     <li className="text-blue-500 font-medium">{block.Question} :</li>
//                     <span className="text-black">{block.ans}</span>
      
//                 </div>
//               }
//           </div>
//         ))}
//       </div>
//     );
//   }

// }
// export default doubtExchange
































                //    <div className="flex flex-col absolute justify-center items-center m-50 p-10 w-100% bg-center">
                //     <div className=" relative p-5 bg-grey mt-5 rounded-t-2xl shadow-sm block justify-center items-center border-2 border-red-600  sm:w-full w-2/4">

                //         <p className="flex items-center font-25px py-1 mr-2">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>How many screams we can post?</p>
                //         <li className="justify-center items-center py-1 ml-1">
                //         You can post any required number of Screams</li>
                //         <p className="flex  items-center py-1">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>How can we find our peer partner?</p>
                //          <li className="py-1 ml-1">You can find your Simran after following few steps : <br />
                //          <span>-post your scream with required description and skills</span><br />
                //          <img src={Screenshot} width="40%" height="20px" margin="50%"  className="w-11/12 flex items-center flex items-center border-2 border-red-600 my-2 m-auto m-auto"/>
                //          <span>-wait for the votes</span><br />
                //          <span>-go through votes and contact them for collaboration via email or  Phone no.</span><br />
                //         </li>
                //         <p className="flex items-center py-1">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>How many features are present in website?</p>
                //         <li className="justify-center items-center py-2 ml-1">
                //         The features are:<br/>
                //         <span className="font-bold"> Post Scream</span> where you  can post a scream to find a partner,<br/>
                //         <img src={Screenshot} width="40%" height="20px" margin="50%"  className="w-11/12 flex items-center flex items-center border-2 border-red-600 my-2 m-auto m-auto"/>
                //         <span className="font-bold">Vote:</span>you can vote on others screams to be their peer partner,<br/> 
                //                        <div className="w-100%"> <img src={Screenshot} width="40%" height="20px" margin="50%" align-center className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto items-center"/></div>
                //                         <span className="font-bold">Upcoming Contest:</span> you get updates of contest which held on various coding  platform,<br/>
                //                         <img src={Screenshot} width="40%" height="20px" margin="50%" align-center className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>
                //                         <span className="font-bold">Projects:</span> where you can also go through projects sections where existing projects are present, you got an idea after lookings others project,<br/>
                //                         <img src={Screenshot} width="40%" height="20px" margin="50%" align-center className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>
                //                         <span className="font-bold">Coding Problems:</span> where you can also solve coding problems topic wise,<br/>
                //                         <img src={Screenshot} width="40%" height="20px" margin="50%" align-center className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>
                //                         <span className="font-bold">Study Resources:</span> where you can get access to various resources which are really proved helpful<br/> 
                //                         <img src={Screenshot} width="40%" height="20px" margin="50%" align-center className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>
                //          </li>
                //         <p className="flex items-center py-1 mr-2">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>Can we edit our scream after posting?</p>
                //           <img src={Screenshot} width="40%" height="20px" className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto" />  
                //         <li className="justify-center items-center py-1 ml-1">
                //         Yes, you can edit your scream.</li>
                //         <p className="flex items-center py-1">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>Can we edit our Vote after posting?</p>

                //         <li className="justify-center items-center py-1 ml-1">
                //         Yes, you can definitely edit your vote after posting.</li>
                //         <img src={Screenshot}  width="40%" height="20px" className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>
                //         <p className="flex items-center py-1">
                //         <QuestionMarkCircleIcon className="w-5 h-5"/>How many votes we can post?</p>
                //         <li className="justify-center items-center py-1 ml-1">
                //         You can post any required number of Votes,their is no limit.</li>
                //         <img src={Screenshot} width="40%" height="20px" className="w-11/12 flex items-center border-2 border-red-600 my-2 m-auto"/>

                //     </div>
                // </div>
        //)

//}
