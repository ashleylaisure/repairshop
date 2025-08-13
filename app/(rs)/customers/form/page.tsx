import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {

    try {
        const params = await searchParams
        const customerId = params.customerid
        // console.log("Customer ID:", customerId)
        // Edit customer form
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
            // console.log(customer)
            // put customer form component
            return (
                <pre>{JSON.stringify(customer, null, 2)}</pre>
            )

        } else {
            // new customer form componet
            console.log("create new customer")
        }
    } catch (error) {
        if(error instanceof Error) {
            throw error
        }
    }
}