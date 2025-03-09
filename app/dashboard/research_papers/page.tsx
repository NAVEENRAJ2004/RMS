import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResearchPapersPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Research Papers</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search papers..." className="pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
        <Button>Upload Paper</Button>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          <TabsTrigger value="my-papers">My Papers</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <ResearchPaperCard key={i} />
          ))}
        </TabsContent>
        <TabsContent value="popular" className="space-y-4">
          <p className="text-muted-foreground">Popular papers will appear here.</p>
        </TabsContent>
        <TabsContent value="bookmarked" className="space-y-4">
          <p className="text-muted-foreground">Your bookmarked papers will appear here.</p>
        </TabsContent>
        <TabsContent value="my-papers" className="space-y-4">
          <p className="text-muted-foreground">Papers you&apos;ve uploaded will appear here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ResearchPaperCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advances in Machine Learning for Natural Language Processing</CardTitle>
        <CardDescription>
          <span className="font-medium">Authors:</span> Jane Doe, John Smith •{" "}
          <span className="font-medium">Published:</span> 2023
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This paper explores recent advances in machine learning techniques applied to natural language processing
          tasks, with a focus on transformer architectures and their applications in various domains.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Keywords:</span> Machine Learning, NLP, Transformers
        </div>
        <Button variant="outline" size="sm">
          Read Paper
        </Button>
      </CardFooter>
    </Card>
  )
}

