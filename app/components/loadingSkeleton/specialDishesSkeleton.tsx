import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SpecialDishesSkeleton() {

    return (
        <Card>
            <CardContent>
                <div className="flex flex-col gap-2 items-center border-0 p-2 rounded-xl shadow-2xl relative">
                <Skeleton className="rounded-bl-4xl flex items-center justify-center p-1 absolute top-1 right-0 w-8 h-8"/>
                <Skeleton  className="flex justify-center items-center w-20 h-20 p-2 rounded-full"/>
                <Skeleton className="h-20 w-40"/>
                <Skeleton className="h-20 w-40"/>
                </div>
            </CardContent>
        </Card>
    );
}
