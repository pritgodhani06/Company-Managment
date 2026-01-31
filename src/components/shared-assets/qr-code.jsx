"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { cx } from "@/utils/cx";

const QRCodeFrameHandle = ({ className, ...props }) => (
  <div
    {...props}
    className={cx(
      "size-3 rounded-tl border-t-2 border-l-2 border-brand_alt",
      className
    )}
  />
);

export const GradientScan = ({ className, ...props }) => (
  <div
    {...props}
    className={cx(
      "absolute bottom-0 h-1/2 w-full border-t border-brand bg-brand-solid/10",
      className
    )}
    style={{
      maskImage:
        "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
      WebkitMaskImage:
        "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
      ...props.style,
    }}
  />
);

const styles = {
  md: { root: "p-2", qr: { width: 96, height: 96 } },
  lg: { root: "p-3", qr: { width: 128, height: 128 } },
};

export const QRCode = ({
  size = "md",
  value,
  options,
  className,
}) => {
  const ref = useRef(null);
  const [qrCode, setQrCode] = useState(null);

useEffect(() => {
  if (!ref.current) return;

  const container = ref.current;

  const instance = new QRCodeStyling({
    width: styles[size].qr.width,
    height: styles[size].qr.height,
    data: value,
    type: "svg",
    ...options,
  });

  // eslint-disable-next-line react-hooks/set-state-in-effect
  setQrCode(instance);
  instance.append(container);

  return () => {
    container.innerHTML = "";
  };
}, [size, value, options]);


  useEffect(() => {
    if (!qrCode) return;

    qrCode.update({
      data: value,
      ...options,
    });
  }, [qrCode, value, options]);

  return (
    <div
      className={cx(
        "relative flex items-center justify-center",
        styles[size].root,
        className
      )}
    >
      <div ref={ref} />

      <QRCodeFrameHandle className="absolute top-0 left-0" />
      <QRCodeFrameHandle className="absolute top-0 right-0 rotate-90" />
      <QRCodeFrameHandle className="absolute right-0 bottom-0 rotate-180" />
      <QRCodeFrameHandle className="absolute bottom-0 left-0 -rotate-90" />
    </div>
  );
};
