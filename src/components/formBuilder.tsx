"use client"
import React from 'react'
import { Form } from "@prisma/client";
import PreviewDialogBtn from './previewDialogBtn';
import SaveFormBtn from './saveFormBtn';
import PublishBtn from './publishBtn';
import Designer from './designer';
import { DndContext } from "@dnd-kit/core";
export default function FormBuilder({form}: {form?: Form}) {
  return (
    <DndContext>
      <main className="flex flex-col w-full h-[100vh]">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="font-bold text-3xl text-muted-foreground mr-2">
              {form?.name}
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn/>
            {!form?.publised && (<>
              <SaveFormBtn/> <PublishBtn/>
            </>)}
          </div>
        </nav>
        <div className='flex w-full h-full flex-grow items-center justify-center relative overflow-y-auto  bg-accent bg-[url(/graph-paper.svg)] dark:bg-[url(/graph-paper-dark.svg)]'>
              <Designer/>
        </div>
      </main>
    </DndContext>
    
  )
}
