import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";


export default function Home() {

  const { user } = useUser()

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();