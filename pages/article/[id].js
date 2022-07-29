import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>You are on article {id}</h1>;
}
