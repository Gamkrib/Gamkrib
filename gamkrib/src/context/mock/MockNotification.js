import { useEffect } from "react";

const api = "https://dummyjson.com/posts";

useEffect(() => {
  (async () => {
    let data = await fetch(api);
    const retrivedData = await data.json();
    console.log(retrivedData);
  })();
}, [api]);
