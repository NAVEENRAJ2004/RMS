import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Github, MessageSquare } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center py-12 text-center mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Research Management System</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
        A comprehensive platform for managing research papers, collaborating on GitHub, and engaging in academic
        discussions.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <FeatureCard
          title="Research Papers"
          description="Browse, search, and manage research papers in your field."
          icon={FileText}
          href="/dashboard/research_papers"
        />
        <FeatureCard
          title="GitHub Collaboration"
          description="Collaborate on code repositories related to your research."
          icon={Github}
          href="/dashboard/github_collaboration"
        />
        <FeatureCard
          title="Discussion Forum"
          description="Engage in academic discussions with peers and experts."
          icon={MessageSquare}
          href="/dashboard/discussion_forum"
        />
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
}: {
  title: string
  description: string
  icon: React.ElementType
  href: string
}) {
  return (
    <Card className="w-full transition-all duration-200 hover:shadow-lg">
      <CardHeader >
        <div className="flex items-center justify-center">
          <div className="p-3 rounded-full bg-muted mb-4">
            <Icon className="h-7 w-7 text-primary" />
          </div>
        </div>
        <CardTitle className="text-center text-xl mb-2 ">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardFooter >
        <Link href={href} className="w-full">
          <Button className="w-full">Go to {title}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}