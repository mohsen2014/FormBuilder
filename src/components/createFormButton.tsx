"use client"

import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogFooter } from './ui/dialog'
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImSpinner2 } from "react-icons/im";
import { toast } from './ui/use-toast';
import { IFormSchema } from '../../models/IFormSchema';
import { formSchema } from '../../models/formSchema';
import { createForm } from '../../actions/form';
import { BsFileEarmarkPlus } from "react-icons/bs";
function CreateFormButton() {
    const form = useForm<IFormSchema>({
        resolver: zodResolver(formSchema)
    })
    async function submit(values: IFormSchema) {
        try {
            const formId = await createForm(values)
            toast({
                title: "Success",
            })
        } catch (e) {
            toast({
                title: "Error",
                description: "Something went wrong",
                variant: 'destructive'
            })
        }
    }
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className='group border border-primary/20 h-[190px] justify-center items-center flex flex-col 
            hover:border-primary border-dashed gap-4'>
                <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary"></BsFileEarmarkPlus>
                <div className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create New Form</div>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Create form
                </DialogTitle>
                <DialogDescription>
                    Create new form to start collecting responses
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className='space-y-2'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} rows={3}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    ></FormField>
                </form>
            </Form>
            <DialogFooter>
                <Button className='w-full mt-4' disabled={form.formState.isSubmitting} onClick={form.handleSubmit(submit)}>
                    {form.formState.isSubmitting ? <ImSpinner2 className="animate-spin"></ImSpinner2> : <span>Save</span>}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default CreateFormButton