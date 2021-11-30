
import React, { Component } from 'react';
import Screenshot from './images/editvote.png'
import {
    QuestionMarkCircleIcon,
    ArrowRightIcon
} from "@heroicons/react/solid";



export class doubtExchange extends Component {
    render() {
        return (
                   <div className="flex flex-col absolute justify-center items-center m-50 p-10 w-100% bg-center">
                    <div className=" relative p-5 bg-grey mt-5 rounded-t-2xl shadow-sm block justify-center items-center">
                        
                        <p className="flex items-center font-25px py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5 mr-2"/>How many screams we can post?</p>
                        <li className="justify-center items-center py-1">
                        You can post any required number of Screams</li>
                        <p className="flex  items-center py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5"/>How can we find our peer partner?</p>
                         <li className="py-1">You can find your Simran after following few steps : <br />
                         <span>-post your scream with required description and skills</span><br />
                         <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                         <span>-wait for the votes</span><br />
                         <span>-go through votes and contact them for collaboration via email or  Phone no.</span><br />
                        </li>
                        <p className="flex items-center py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5"/>How many features are present in website?</p>
                        <li className="justify-center items-center py-2">
                        The features are:Post Scream where you  can post a scream to find a partner,<br/>
                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                                        Vote:you can vote on others screams to be their peer partner,<br/> 
                                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                                        Upcoming Contest: you get updates of contest which held on various coding  platform,<br/>
                                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                                        Projects where you can also go through projects sections where existing projects are present, you got an idea after lookings others project,<br/>
                                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                                        Coding Problems where you can also solve coding problems topic wise,<br/>
                                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                                        Study Resources where you can get access to various resources which are really proved helpful<br/> 
                                        <img src={Screenshot} width="40%" height="20px" margin="50%" align-center/>
                         </li>
                        <p className="flex items-center py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5"/>Can we edit our scream after posting?</p>
                          <img src={Screenshot} width="40%" height="20px" />  
                        <li className="justify-center items-center py-1">
                        Yes, you can edit your scream.</li>
                        <p className="flex items-center py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5"/>Can we edit our Vote after posting?</p>
                            
                        <li className="justify-center items-center py-1">
                        Yes, you can definitely edit your vote after posting.</li>
                        <img src={Screenshot}  width="40%" height="20px"/>
                        <p className="flex items-center py-1">
                        <QuestionMarkCircleIcon className="w-5 h-5"/>How many votes we can post?</p>
                        <li className="justify-center items-center py-1">
                        You can post any required number of Votes,their is no limit.</li>
                        <img src={Screenshot} width="40%" height="20px"/>
                        
                    </div>
                </div>
        )

    }
}

export default doubtExchange
