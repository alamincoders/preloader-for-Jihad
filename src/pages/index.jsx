import Root from "@/components/Home";
import Loader from "@/components/Loader";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }

  return (
    <>
      <Head>
        <title>Home - alamincoders</title>
        <meta
          name="description"
          content="alamincoders is a skilled web developer with expertise in the MERN stack. With a strong background in web development, Alamincoders is able to create high-quality web applications that are both efficient and user-friendly. They possess a deep understanding of modern web development technologies and are able to use this knowledge to create innovative solutions for their clients. With a keen eye for detail and a passion for coding, Alamincoders is a valuable asset to any development team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* here is your root components calls */}
        {/* this is an example */}

        {loading ? <Loader /> : <Root />}
      </main>
    </>
  );
}
