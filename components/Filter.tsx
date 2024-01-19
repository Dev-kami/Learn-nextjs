"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "./Select";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = searchParams.get("SortBy") || "name-asc";
  let activeOption;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("SortBy", e.target.value);

    activeOption = url === e.target.value;

    router.push(`${pathname}?${params}`);
  }

  return (
    <Select
      onChange={handleChange}
      options={[
        { value: "name-asc", label: "Sort by name (A -Z)" },
        { value: "name-desc", label: "Sort by name (Z - A)" },
        { value: "username-asc", label: "Sort by username (A -Z)" },
        { value: "username-desc", label: "Sort by username (Z - A)" },
        { value: "street-asc", label: "Sort by street (A -Z)" },
        { value: "street-desc", label: "Sort by street (Z - A)" },
      ]}
    />
  );
};

export default Filter;
