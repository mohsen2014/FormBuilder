"use client";
import * as z from "zod";
import { formSchema } from './formSchema';

export type IFormSchema = z.infer<typeof formSchema>;
