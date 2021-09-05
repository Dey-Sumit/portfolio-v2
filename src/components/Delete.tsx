import Head from "next/head";

const Delete = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">
          <span className="text-blue-500">Next.js with Tailwind & TypeScript</span>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by deleting{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            src/components/Delete.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Standard Folder Structure &rarr;</h3>
            <p className="mt-4 text-xl">
              pages and components folders are inside the src folder(like react 💙)
            </p>
          </a>

          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Path Config Added</h3>
            <p className="mt-4 text-xl">
              Get rid of relative imports ❌
              <br />
              Use absolute imports with @
            </p>
          </a>

          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Tailwind JIT Enabled</h3>
            <p className="mt-4 text-xl">
              Develop ( create bugs) Faster with Tailwind Just In Time mode
            </p>
          </a>

          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Any Proposal ?</h3>
            <p className="mt-4 text-xl">What should we also include in the boilerplate</p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a href="https://github.com/Dey-Sumit" className="text-green-700">
          Contribute to the repo & Please leave a star!
        </a>
      </footer>
    </div>
  );
};

export default Delete;
