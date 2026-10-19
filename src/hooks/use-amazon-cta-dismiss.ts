import { useCallback, useState } from "react";

const DISMISS_KEY = "bomqi-amazon-cta-top-dismissed";

export const useAmazonCtaDismiss = () => {
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(DISMISS_KEY) === "1"
  );

  const dismiss = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }, []);

  return { dismissed, dismiss };
};
