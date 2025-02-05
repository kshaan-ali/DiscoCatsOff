const Card = ({
  title,
  stats,
  total,
}: {
  title: string;
  stats: { label: string; value: string }[];
  total: string;
  metrics: string[];
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-4 bg-white rounded-lg">
      <img src="/cat.webp" alt="" className="w-20 aspect-square rounded-full" />
      <h2 className="text-2xl font-bold font-[Bubblegum_Sans] text-[#e49768]">
        {title}
      </h2>
      <ul className="mt-2 text-sm w-full flex flex-col gap-2">
        {stats.map((stat, i) => (
          <li key={i} className="flex justify-between font-bold font-[Bubblegum_Sans] text-[#e49768] p-2 bg-[#fff2ea] w-full">
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold bg-[#e84544] shadow-[2px_4px_0px_theme(colors.amber.800)]  rounded-xl py-1 px-4 w-full text-white font-[Passion_one] text-center text-xl">Total: {total}</p>
    </div>
  );
};

export default Card;
