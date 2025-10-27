import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type TestimonialAuthor = {
  name: string
  handle: string
  imageUrl: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const cardContent = (
    <Card className={cn("h-full w-full max-w-[22rem] shrink-0 overflow-hidden rounded-2xl bg-card/50 backdrop-blur-lg border-white/10 flex flex-col", className)}>
        <CardContent className="flex flex-col justify-between flex-1 p-6">
            <blockquote className="text-foreground/90 mb-6 flex-1">&ldquo;{text}&rdquo;</blockquote>
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={author.imageUrl} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-sm text-muted-foreground">{author.handle}</p>
                </div>
            </div>
        </CardContent>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
