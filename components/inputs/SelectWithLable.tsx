'use client'

import { useFormContext } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "../ui/select"
import { string } from "zod"
import { ItemText } from "@radix-ui/react-select"
import { Item } from "@radix-ui/react-dropdown-menu"

type DataObj = {
    id: string,
    description: string,
}

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S & string,
    data: DataObj[],
    className?: string,
}

export function SelectWithLabel<S>({fieldTitle, nameInSchema, data, className}: Props<S>){
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base" htmlFor={nameInSchema}>{fieldTitle}</FormLabel>
                    <Select 
                        {...field}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                            <SelectTrigger
                                id={nameInSchema}
                                className={`w-full max-w-xs ${className}`}
                            >
                                <SelectValue placeholder="Select"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {data.map(item => (
                                <SelectItem 
                                    key={`${nameInSchema}.${item.id}`}
                                    value={item.id}
                                >
                                    {item.description}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}