import { useSearchParams } from "next/navigation";
import React from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({ options, onChange }: SelectProps) => {
  const searchParams = useSearchParams();
  const url = searchParams.get("SortBy");

  return (
    <select onChange={onChange} className="py-2 px-5">
      <option disabled>Select an option</option>
      {options.map((option) => {
        const activeOption = url === option.value;

        return (
          <option
            selected={activeOption}
            value={option.value}
            className="hover:bg-stone-300"
            key={option.label}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
