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
import { Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S & string,
    className?: string,
} & InputHTMLAttributes<HTMLInputElement>

export function InputWithLabel<S>({fieldTitle, nameInSchema, className, ...props}: Props<S>){
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base" htmlFor={nameInSchema}>{fieldTitle}</FormLabel>
                    <FormControl>
                        <Input
                            id={nameInSchema}
                            className={`w-full, max-w-xs disabled:text-blue-700/90 dark:disabled:text-green-500/90 ${className}`}
                            placeholder={fieldTitle} 
                            {...props}
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}