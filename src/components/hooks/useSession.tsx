import { useSession } from "next-auth/react";

export default function useFetchSession() {
  const { data: session } = useSession();

  return { session };
}
