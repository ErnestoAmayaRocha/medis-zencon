import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Dashboard() {
  return (
    <section className="flex flex-wrap p-8 gap-4  h-auto w-full">

      <Card>
        <CardHeader>
          <CardTitle>10 Appoinments attend </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>5 patients</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
      
    </section>
  )
}
