import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";

export default async function TicketFormPage({  
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {

    try {
        const {customerId, ticketId} = await searchParams
        
        // console.log("Ticket ID:", ticketId)
        // Edit ticket form
        if(!ticketId && !customerId) {
            return (
                <>
                    <h2 className="text-2xl mb-2">TTicket ID or Customer ID required to load ticket form</h2>
                    <BackButton title="Go Back" variant="default"/>
                </>
            )
        }

        // create new ticket
        if(customerId) {
            const customer = await getCustomer(parseInt(customerId))

            if(!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default"/>
                    </>
                )
            }

            if(!customer.active) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default"/>
                    </>
                )
            }

            // return ticket form
            return (
                <pre>{JSON.stringify(customer, null, 2)}</pre>
            )
        }

        // Edit ticket form
        if(ticketId) {
            const ticket = await getTicket(parseInt(ticketId))

            if(!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
                        <BackButton title="Go Back" variant="default"/>
                    </>
                )
            }

            const customer = await getCustomer(ticket.customerId)

            // return ticket form
            return (
                <>
                    <pre>{JSON.stringify(ticket, null, 2)}</pre>
                    <pre>{JSON.stringify(customer, null, 2)}</pre>
                </>
            )
        }


    } catch (error) {
        if(error instanceof Error) {
            throw error
        }
    }
}