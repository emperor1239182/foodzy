import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DealsSkeleton() {
  return (
    <div className="w-70 relative shrink-0">
      {/* Image skeleton */}
      <Skeleton className="w-70 h-70 rounded-lg" />

      {/* Floating details card skeleton */}
      <Card className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 shadow-lg">
        <CardContent className="p-4 space-y-2">
          {/* name */}
          <Skeleton className="h-4 w-3/4" />

          {/* rating */}
          <Skeleton className="h-3 w-1/2" />

          {/* price + button row */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-8 w-16 rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
