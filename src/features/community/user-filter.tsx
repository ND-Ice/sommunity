import classNames from "classnames";

type FilterOption = { label: string; value: string };

type UserFilterProps = {
  filterOptions: FilterOption[];
  currentValue?: string;
  selectFilter: (value: string) => void;
};

function UserFilter({
  filterOptions,
  currentValue,
  selectFilter,
}: UserFilterProps) {
  return (
    <div className="flex gap-4">
      {filterOptions?.map((option) => (
        <button
          key={option.value}
          onClick={() => selectFilter(option.value)}
          className={classNames(
            "h-full w-full rounded-lg border-2 p-2 px-4 font-semibold transition-all duration-100 ease-linear hover:bg-blue-400 hover:text-white",
            { "bg-blue-400 text-white": currentValue === option.value }
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default UserFilter;
