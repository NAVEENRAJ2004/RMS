import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DiscussionForumPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Discussion Forum</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search discussions..." className="pl-8" />
        </div>
        <Button>New Discussion</Button>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="my-discussions">My Discussions</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <DiscussionCard key={i} />
          ))}
        </TabsContent>
        <TabsContent value="popular" className="space-y-4">
          <p className="text-muted-foreground">Popular discussions will appear here.</p>
        </TabsContent>
        <TabsContent value="my-discussions" className="space-y-4">
          <p className="text-muted-foreground">Discussions you&apos;ve started will appear here.</p>
        </TabsContent>
        <TabsContent value="following" className="space-y-4">
          <p className="text-muted-foreground">Discussions you&apos;re following will appear here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DiscussionCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Best practices for implementing transformer models in production?</CardTitle>
            <CardDescription className="mt-1">Started by Alex Johnson • 2 days ago • Machine Learning</CardDescription>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@alexj" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          I&apos;m working on deploying transformer-based NLP models in a production environment and looking for advice on
          optimizing performance and managing computational resources effectively...
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <MessageSquare className="mr-1 h-4 w-4" />
          24 replies
        </div>
        <Button variant="outline" size="sm">
          Join Discussion
        </Button>
      </CardFooter>
    </Card>
  )
}

