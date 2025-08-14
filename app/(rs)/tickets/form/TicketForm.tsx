"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { selectCustomerSchemaType } from "@/zod-schemas/customer"
import { insertTicketSchema, type insertTicketSchemaType, type selectTicketSchemaType } from "@/zod-schemas/ticket"

type Props = {
    customer: selectCustomerSchemaType,
    ticket?: selectTicketSchemaType,
}

export default function TicketForm({customer, ticket}: Props) {
    const form = useForm<insertTicketSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertTicketSchema),
        defaultValues: {
            id: ticket?.id || "(New)",
            customerId: ticket?.customerId || customer.id,
            title: ticket?.title || "",
            description: ticket?.description || "",
            completed: ticket?.completed || false,
            tech: ticket?.tech || "new-ticket@example.com",
        }
    })

    async function onSubmit(data: insertTicketSchemaType) {
        // Handle form submission
        console.log("Form submitted with data:", data)
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">{ticket?.id ? `Edit Ticket ${ticket.id}` : "Create Ticket"}</h2>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <FormField
                        control={form.control}
                        name="customerId"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Customer ID</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="shadcn" 
                                    {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    )

}