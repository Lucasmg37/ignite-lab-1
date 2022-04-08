import { getSession } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Auth() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const session = getSession(req, res)

  const redirect = {
    destination: '',
    permanent: false
  }

  if (!session) {
    redirect.destination = '/api/auth/login'
    return { redirect }
  } else {
    redirect.destination = '/app'
    return { redirect }
  }

}

