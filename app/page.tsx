import CustomLink from "@/components/custom-link";
import packageJSON from "../package.json";

export default function Index() {
  return (
    <div className="mt-12 space-y-2 ">
      <h1 className="animate-bounce text-3xl font-bold hover:paused">
        NextAuth.js Example
      </h1>
      <p className="delay-150 duration-300 animate-in slide-in-from-top-2">
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        for authentication. Check out the{" "}
        <CustomLink href="/server-example" className="underline">
          Server
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/client-example" className="underline">
          Client
        </CustomLink>{" "}
        examples to see how to secure pages and get session data.
      </p>
      <p>
        Current{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        version: <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
      </p>
    </div>
  );
}
