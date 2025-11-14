import React,{use} from 'react';
import cardIcon1 from "../../assets/Ellipse 22.png"
import cardIcon2 from "../../assets/Vector.png"


const Tickets = ({ticketPromise}) => {
    const ticketData = use (ticketPromise)
    console.log(ticketData)
    return (
        <div className='bg-gray-100 pb-5'>
            <div className='max-w-[1440px] mx-auto inter flex justify-between pb-4 flex-col md:flex-row'> 
           <div className=''>
               <h3 className='font-semibold text-xl text-[#34485A]'>Customer Tickets</h3>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                {
                ticketData.map(ticket=><div className='ticket_contianer bg-white   p-4 rounded-xl mt-4'>
                 <div className='flex justify-between '>
                    <h2 className='font-bold'>{ticket.title}</h2>
                    <div className={`flex gap-2  font-medium p-1.5 rounded-full ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : ""}
                     ${ticket.status === "In-Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : ""}`}>
                        <img src={cardIcon1} alt=""  />
                        <button>{ticket.status}</button>
                    </div>
                    
                    
                 </div>
                 <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                 <div className='flex justify-between'>
                    <div className='flex justify-between gap-4'>
                        <p>{ticket.id}</p>
                        <p className={`
                        ${ticket.priority === "High Priority" ? "text-[#F83044]" : ""}
                        ${ticket.priority === "Medium Priority" ? "text-[#FEBB0C]" : ""}
                        ${ticket.priority === "Low Priority" ? "text-[#02A53B]" : ""}`}>{ticket.priority}</p>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <p>{ticket.assignee}</p>
                        <div className='flex gap-2'>
                            <img src={cardIcon2} alt="" />
                            <p>{ticket.date}</p>
                        </div>
                        
                    </div>
                 </div>
               </div>)
               }
               </div>

               
               
            </div>
           <div className='ml-5'>
                <div>
                    <h3 className='font-semibold text-xl text-[#34485A]'>Task Status</h3>
                    <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h3 className='font-semibold text-xl text-[#34485A]'>Resolved Task</h3>
                    <p className='text-[#627382]'>No resolved tasks yet.</p>
                </div>
           </div>
        </div>
        </div>
    );
};

export default Tickets;