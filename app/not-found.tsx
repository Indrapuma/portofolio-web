import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <h3 className="text-xl font-semibold mb-6">Page Not Found</h3>
      <p className="text-muted-foreground mb-8 max-w-md">
        Could not find the requested resource.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
