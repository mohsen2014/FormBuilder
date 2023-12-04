import React from 'react'
import { getFormById } from '../../../../actions/form'

export default async function builder({id}:{id: string}) {
  try {
    const form = await getFormById(+id);
    if (!form){
      throw new Error("Form not found");
    }
  } catch (error) {
    throw new Error("Form not found");
  }
  return (
    <FormBuilder form={form} />
  )
}
