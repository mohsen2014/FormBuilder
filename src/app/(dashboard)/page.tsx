import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { GetFormStats, getForms } from '../../../actions/form'
import { ReactNode, Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import CreateFormButton from "@/components/createFormButton";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { describe } from "node:test";
import { formatDistance } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type IStatCardParam = {
  loading: boolean,
  data?: Awaited<ReturnType<typeof GetFormStats>>
}
export default function Home() {
  return (
   <div className='container pt-4'>
    <Suspense fallback={<StatsCards loading={true}/>}>
      <CardStatWrapper />
    </Suspense>
    <Separator className="mt-[2rem]"/>
    <span className="text-4xl font-bold col-span-2 mt-3 mb-3">Your Forms</span>
    <Separator/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
      <CreateFormButton/>
      <Suspense fallback={[1,2,3,4].map(item => 
        <FormCardSkeleton key={item}></FormCardSkeleton>
        )}>
        <FormCards ></FormCards>
      </Suspense>
    </div>
   </div>
  )
}

async function CardStatWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats}/>
}

async function StatsCards(params:IStatCardParam) {
  const {data, loading} = params;
  return(
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard 
      title="Total Visits" 
      icon={<LuView className="text-blue-600"/>}
      helperText="All time form visits"
      value={data?.visits?.toLocaleString()}
      loading={loading}
      className="shadow-md shadow-blue-600"
      />
      <StatsCard 
      title="Total Submission" 
      icon={<LuView className="text-yellow-600"/>}
      helperText="All time form visits"
      value={data?.submissions?.toLocaleString()}
      loading={loading}
      className="shadow-md shadow-yellow-600"
      />
      <StatsCard 
      title="Submission Rate" 
      icon={<LuView className="text-green-600"/>}
      helperText="All time form visits"
      value={data?.submissionsRate?.toLocaleString()}
      loading={loading}
      className="shadow-md shadow-green-600"
      />
      <StatsCard 
      title="Bounce Rate" 
      icon={<LuView className="text-red-600"/>}
      helperText="All time form visits"
      value={data?.bounceRate?.toLocaleString()}
      loading={loading}
      className="shadow-md shadow-red-600"
      />
    </div>
  )
}
function StatsCard({
  title,
  icon,
  helperText,
  value,
  loading,
  className
}:{
  title: string,
  icon: ReactNode,
  helperText: string,
  value?: string,
  loading: boolean,
  className: string
}) {
  return <Card className={className}>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text2xl font-bold">
        {
          loading ? 
          <Skeleton>
            <span className="opacity-0">0</span>
          </Skeleton> : value
        }
      </div>
      <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
    </CardContent>
  </Card>
}

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary/20 h-[190px] w-full"></Skeleton>
}
async function FormCards() {
  const forms = await getForms()
  return <>
    {forms.map(form => {
      return <FormCard key={form.id} form={form}></FormCard>;
    })}
  </>
}
function FormCard({form}:{form: Form}) {
  return <Card>
    <CardHeader>
      <CardTitle className="flex justify-between items-center gap-2">
        <span className="truncate font-bold">{form.name}</span>
        {form.publised ? <Badge>Published</Badge> : <Badge variant="destructive">Draft</Badge>}

      </CardTitle>
      <CardDescription className="flex justify-between items-center text-muted-foreground text-sm">
        {formatDistance(form.createAt, new Date(), {
          addSuffix: true
        })}
        {form.publised && <span className="flex items-center gap-2">
          <LuView className="text-muted-foreground"></LuView>  
          <span>{form.visits.toLocaleString()}</span>
          <FaWpforms className="text-muted-foreground"></FaWpforms>  
          <span>{form.submissions.toLocaleString()}</span>
        </span>}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col">
        <div className="truncate text-sm text-muted-foreground">
          {form.description || "No description"}
        </div>
        <div>
          {form.publised ? 
            <Button asChild  className="w-full mt-2 test-md gap-4">
              <Link href={`/froms/${form.id}`}>View Submission
              </Link>
            </Button> : 
            <Button asChild variant="secondary" className="w-full mt-2 test-md gap-4">
              <Link href={`/builder/${form.id}`}>Edit form
              </Link>
            </Button> 
          
          }
        </div>
      </div>
    </CardContent>
  </Card>
}
