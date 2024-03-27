import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-w-full min-h-screen justify-items-center">
      <h1 className="text-9xl font-extrabold text-center mt-32   text-yellow-500">
        404
      </h1>
      <h2 className="text-4xl font-bold text-center text-white   p-4 drop-shadow-xl">
        چیزی پیدا نکردیم!!!
      </h2>
      <h6 className="text-xl mt-4 font-normal text-center text-yellow-300"><Link className="" href='/'>بازگشت به صفحه مدیریت وظایف</Link></h6>
    </div>)
}
