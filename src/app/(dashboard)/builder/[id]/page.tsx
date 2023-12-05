import React from 'react'
import { getFormById } from '../../../../../actions/form'
import FormBuilder from '@/components/formBuilder';

export default async function builder({params}: {params: {id: string}}) {
  try {
    const form = await getFormById(+params.id);
    if (!form){
      throw new Error("Form not found");
    }
    return (
      <FormBuilder form={form} />
    )
  } catch (error) {
    throw new Error("Form not found");
  }
}
