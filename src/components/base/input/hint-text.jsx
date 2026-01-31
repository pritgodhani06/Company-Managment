import { Text as AriaText } from "react-aria-components";
import { cx } from "@/utils/cx";
export const HintText = ({
  isInvalid,
  className,
  ...props
}) => {
  return <AriaText {...props} slot={isInvalid ? "errorMessage" : "description"} className={cx("text-sm text-tertiary",
  // Invalid state
  isInvalid && "text-error-primary", "group-invalid:text-error-primary", className)} />;
};
HintText.displayName = "HintText";