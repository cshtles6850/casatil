import Link from 'next/link';
export default function NotFound() {
  return <main className="section"><div className="container"><h1>Page not found</h1><p className="lead">The transfer page you requested does not exist.</p><Link className="btn btn-primary" href="/">Back to homepage</Link></div></main>;
}
