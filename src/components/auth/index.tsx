import { trpc } from "../../utils/trpc";

import { signIn, signOut, useSession } from "next-auth/react";

const Auth: React.FC = () => {
    const { data: sessionData } = useSession();
  
    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
      undefined, // no input
      { enabled: sessionData?.user !== undefined },
    );
  
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        {sessionData && (
          <p className="text-2xl text-blue-500">
            Logged in as {sessionData?.user?.name}
          </p>
        )}
        {secretMessage && (
          <p className="text-2xl text-blue-500">{secretMessage}</p>
        )}
        <button
          className="items-center cursor-pointer transition-colors rounded-full border-[1px] sm:inline-block border-transparent min-w-[5rem] hover:bg-transparent bg-green-500 text-black hover:text-green-500 hover:border--green-500"
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    );
  };

export default Auth;