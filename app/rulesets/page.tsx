import { Anton } from "next/font/google";
import cx from "classnames";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Ruleset() {
  return (
    <div className="w-full min-h-screen p-4 bg-white">
      <h1 className={cx(anton.className, "text-xl")}>
        <strong>Rulesets</strong>
      </h1>
    </div>
  );
}
