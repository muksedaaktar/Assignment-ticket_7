import React,{ useState , useEffect} from 'react';
import cardIcon1 from "../../assets/Ellipse 22.png"
import cardIcon2 from "../../assets/Vector.png"
import { toast } from 'react-toastify';



const Tickets = ({ ticketPromise , setInProgressCount, setResolvedCount }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTicket, setResolvedTicket] = useState([]);

  
  useEffect(() => {
    ticketPromise.then((data) => {
      setTickets(data);
       
    });
  }, []);

  
  const handleTicketClick = (ticket) => {
    if (!selectedTicket.find((t) => t.id === ticket.id)) {
      setSelectedTicket([...selectedTicket, ticket]);
      setInProgressCount((prev)=>prev+1)
      toast.success(`In Progress!`);
    }
  };

  
  const handleComplete = (ticket) => {
    setResolvedTicket([...resolvedTicket, ticket]);

    setSelectedTicket(selectedTicket.filter((t) => t.id !== ticket.id));
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    setInProgressCount((prev) => prev - 1); 
    setResolvedCount((prev) => prev + 1);

    toast.success(`Completed!`);
  };
    return  (
        <div className='bg-gray-100 pb-5'>
            <div className='max-w-[1440px] mx-auto inter flex justify-between pb-4 flex-col md:flex-row'> 
           <div className=''>
               <h3 className='font-semibold text-xl text-[#34485A]'>Customer Tickets</h3>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                {
                tickets.map(ticket=><div key={ticket.id} onClick={()=>handleTicketClick(ticket)}
                className='ticket_contianer bg-white   p-4 rounded-xl mt-4'>
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

             
           <div className='ml-5 mb-5'>
                <div>
                    <h3 className='font-semibold text-xl text-[#34485A]'>Task Status</h3>
                   {
                    selectedTicket.length ==0 && ( <p className='text-[#627382]'>Select a ticket to add to Task Status</p>)
                   }
                    
                    {
                        selectedTicket.map (ticket=>(<div key={ticket.id} className='bg-white p-4 rounded-xl mb-2'>
                        <p className=''>{ticket.title}</p>
                        <button onClick={()=>handleComplete(ticket)} className='bg-[#02A53B] text-white rounded-[10px] w-full p-2'>Complete</button>
                    </div>))
                    }

                </div>
                <div className='mt-5'>
                    <h3 className='font-semibold text-xl text-[#34485A]'>Resolved Task</h3>
                    {
                        resolvedTicket.length == 0 &&(<p className='text-[#627382]'>No resolved tasks yet.</p>)
                    }
                    
                     {
                        resolvedTicket.map(task=> (<p key={task.id} className='bg-white p-3 rounded-xl mb-2 '>{task.title} <br /><span className='text-green-600 font-semibold'>✔Complete</span></p>
                            
                        ))
                     }

                </div>
           </div>
        </div>
        </div>
    );
};

export default Tickets;