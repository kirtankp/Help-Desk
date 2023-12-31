import data from "./db.json"
import Link from "next/link"

const TicketList = () => {

    return (
        <>
            {data["tickets"].map((ticket) => (
                 <div key={ticket.id} className="card my-5">
                 <Link href={`/tickets/${ticket.id}`}>
                   <h3>{ticket.title}</h3>
                   <p>{ticket.body.slice(0, 200)}...</p>
                   <div className={`pill ${ticket.priority}`}>
                     {ticket.priority} priority
                   </div>
                 </Link>
               </div>
            ))}
            {data["tickets"].length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}

export default TicketList