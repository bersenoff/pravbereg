import { useEffect } from "react";

export default (title: string) => {
  useEffect(() => {
    document.title = `Правый Берег - ${title}`;
  }, []);
}