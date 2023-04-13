import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";


export default function About() {
  return (
    <>
        <h1 className={"title"}>
          Ir a <Link href="/">home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/about.jsx</code>
        </p>
    </>
  );
}

About.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
