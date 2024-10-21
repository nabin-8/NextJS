import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1 className=' text-[48px]'>Hello, World!</h1>
      <Link href="/users">Users</Link>
      <ProductCart/>
    </main>
  )
}
