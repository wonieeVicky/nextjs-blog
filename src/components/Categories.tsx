type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg fotn-bold border-b border-orange-500 mb-2">Cateogory</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-orange-500 ${
              category === selected && 'text-orange-600'
            } transition-colors duration-300 ease-in-out`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
