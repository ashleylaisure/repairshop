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

import { insertCustomerSchema, type insertCustomerSchemaType, type selectCustomerSchemaType } from "@/zod-schemas/customer"

type Props = {
    customer?: selectCustomerSchemaType,
}

export default function CustomerForm({customer}: Props) {
    const form = useForm<insertCustomerSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertCustomerSchema),
        defaultValues: {
            id: customer?.id || 0,
            firstName: customer?.firstName || "",
            lastName: customer?.lastName || "",
            address1: customer?.address1 || "",
            address2: customer?.address2 || "",
            city: customer?.city || "",
            state: customer?.state || "",
            zip: customer?.zip || "",
            email: customer?.email || "",
            phone: customer?.phone || "",
        }
    })

    async function onSubmit(data: insertCustomerSchemaType) {
        // Handle form submission
        console.log("Form submitted with data:", data)
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">{customer?.id ? `Edit Customer ${customer.id}` : "Create Customer"} Form</h2>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>First Name</FormLabel>
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