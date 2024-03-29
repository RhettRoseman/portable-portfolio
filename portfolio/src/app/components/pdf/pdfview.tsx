import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PDF = dynamic(() => require("../pdf"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return <PDF />;
};

export default View;