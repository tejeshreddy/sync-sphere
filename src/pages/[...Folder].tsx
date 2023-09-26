import ShowFiles from "@/components/ShowFiles";
import UploadFiles from "@/components/UploadFiles";
import { useRouter } from "next/router";
import React from "react";
import Topbar from "@/components/Topbar";
import useFetchSession from "../components/hooks/useSession";

export default function Folder() {
  const router = useRouter();
  let { session } = useFetchSession() as any;
  let parentId = router?.query?.id;
  return (
    <div>
      <Topbar />
      {session ? (
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
