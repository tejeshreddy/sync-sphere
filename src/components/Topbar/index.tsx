import React from "react";
import { signIn, signOut } from "next-auth/react";
import useFetchSession from "../hooks/useSession";
import Button from "@/components/common/Button/Button";
import styles from "./Topbar.module.scss";

export default function index() {
  let session = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img
          className={styles.profileImg}
          src={session?.user.image as string}
          onClick={() => signOut()}
        ></img>
      ) : (
        <Button
          btnClass={"btn-primary"}
          title={"Sign Up"}
          onClick={() => signIn()}
        />
      )}
    </div>
  );
}
