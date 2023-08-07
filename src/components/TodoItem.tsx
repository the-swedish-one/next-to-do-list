type TodoItemProps = {
  id: string;
  title: string;
  complete: Boolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-poimter peer" />
      <label
        htmlFor={id}
        className="cursor-poimter peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
