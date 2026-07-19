import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="ZephyrFuel home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>ZephyrFuel</span>
    </Link>
  );
}
