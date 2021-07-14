import { useContext } from "react";
import { darkCtx } from "./context/useDarkTheme";

export interface FieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export function Field({ label, onChange, value }: FieldProps) {
  return (
    <div>
      <label className="grid-cols-1 grid p-2">
        {label}
        <input
          type="text"
          className="rounded my-1 p-1 text-black border-2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
