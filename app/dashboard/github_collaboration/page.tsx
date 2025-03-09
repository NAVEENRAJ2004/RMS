import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, GitBranch, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GitHubCollaborationPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">GitHub Collaboration</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search repositories..." className="pl-8" />
        </div>
        <Button>Connect Repository</Button>
      </div>

      <Tabs defaultValue="my-repos" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="my-repos">My Repositories</TabsTrigger>
          <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
          <TabsTrigger value="starred">Starred</TabsTrigger>
          <TabsTrigger value="explore">Explore</TabsTrigger>
        </TabsList>
        <TabsContent value="my-repos" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <RepositoryCard key={i} />
          ))}
        </TabsContent>
        <TabsContent value="collaborations" className="space-y-4">
          <p className="text-muted-foreground">Repositories you&apos;re collaborating on will appear here.</p>
        </TabsContent>
        <TabsContent value="starred" className="space-y-4">
          <p className="text-muted-foreground">Your starred repositories will appear here.</p>
        </TabsContent>
        <TabsContent value="explore" className="space-y-4">
          <p className="text-muted-foreground">Explore repositories related to your research interests.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RepositoryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>research-ml-framework</CardTitle>
        <CardDescription>
          A framework for implementing and evaluating machine learning models for research purposes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-yellow-400"></div>
            JavaScript
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4" />
            42
          </div>
          <div className="flex items-center">
            <GitBranch className="mr-1 h-4 w-4" />
            15
          </div>
          <div>Updated 3 days ago</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">5 contributors</div>
        <Button variant="outline" size="sm">
          View Repository
        </Button>
      </CardFooter>
    </Card>
  )
}

