import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DailySellsSkeleton() {
    

    return (
        <Card className="w-40 flex-shrink-0">
      <CardContent className="p-2 flex flex-col gap-1">
        <div className="flex flex-col gap-1 p-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-10 w-full mt-auto" />
      </CardContent>
    </Card>
    );
}
