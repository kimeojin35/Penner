import React, { useState } from "react";

function BoardCreate() {
  const [toast, setToast] = useState<boolean>(false);
  const onSubmit = (data) => {
    if (!data.title.trim() || !data.content.trim()) {
      setError("title", { type: "trim" });
      setToast(true);
      return;
    }
  };
  return <></>;
}

export default BoardCreate;
