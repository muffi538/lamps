import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center py-20 text-center">
      <p className="t-eyebrow">404</p>
      <h1 className="t-h1 mt-5 max-w-lg">This page has gone dark</h1>
      <p className="t-body mt-5 max-w-sm">
        The page you were looking for does not exist, or has moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/collections/diffusers" className="btn-outline">Shop the collection</Link>
      </div>
    </Container>
  );
}
