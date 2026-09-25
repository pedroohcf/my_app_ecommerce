export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <div className="text-xl lead">A Z</div>
        <IconBrandAmazon size={40} stroke={1} className="-mt-2" />
      </div>
    </Link>
  )
}