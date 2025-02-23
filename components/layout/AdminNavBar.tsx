import Link from "next/link";

export default function AdminNavBar() {
  return (
    <nav className="flex w-full justify-between items-center p-8">
      <Link href={"/"} className="flex gap-2 items-center self-start">
        <img
          src="/photo/clubexcellogo.png"
          alt="logo"
          className="w-10 lg:w-14 h-auto"
        />
        <span className="uppercase text-2xl md:text-3xl font-semibold">
          club excel
        </span>
      </Link>

      <div className="w-fit justify-center items-center gap-8 hidden md:flex">
        <Link href={"/contact"} className="uppercase">
          contact us
        </Link>
        <Link href={"/contact"} className="uppercase">
          create quiz
        </Link>
      </div>
    </nav>
  )
}