"use server";

import { IStatCardParam } from "@/app/(dashboard)/page";
import prisma from "../src/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { IFormSchema } from '../models/IFormSchema';
import { formSchema } from "../models/formSchema";
class UserNotFound extends Error{}
export async function GetFormStats() {
    try {
        const user = await currentUser()
        if (!user) {
            throw new UserNotFound();
        }
        const stats = await prisma.form.aggregate({
            where: {
                userId: user.id
            },
            _sum: {
                submissions: true,
                visits: true,
            }
        });
        const visits = stats._sum.visits || 0;
        const submissions = stats._sum.submissions || 0;
        const submissionsRate = stats?._sum?.visits && stats?._sum?.visits > 0 ? (submissions / visits) * 100 : 0;
        const bounceRate = 100 - submissionsRate;
        return {
            visits,
            submissions,
            submissionsRate, 
            bounceRate
        }
    } catch (error) {
        return {
            visits: 0,
            submissions: 0,
            submissionsRate: 0, 
            bounceRate: 0
        }
    }
}
export async function createForm(data: IFormSchema) {console.log(data);
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
        throw new Error("");
    }
    const user = await currentUser()
    if(!user) {
        throw new UserNotFound();
    }
    const form = await prisma.form.create({
        data: {
            userId: user.id,
            name: data.name,
            description: data.description,
            // createAt: Date.now().toString()
        }
    })
    if(!form) {
        throw new Error("Something went wrong");
    }
    return form.id;
}
export async function getForms() {
    try {
        const user = await currentUser()
        if(!user) {
            throw new UserNotFound();
        }
        const forms = await prisma.form.findMany({
            where:{ userId: user?.id },
            orderBy: { createAt: 'desc' }
        });
        return forms;
    } catch (error) {
        return [];
    }
}