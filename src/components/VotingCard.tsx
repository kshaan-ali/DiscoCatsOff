const VotingCard = ({
  title,
  metrics,
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
      <ul className=" bg-[#fae4d6] items-center rounded-lg p-4 mt-2 text-sm w-full font-[Bubblegum_Sans] text-[#ae6231]  flex flex-col gap-2">
        {metrics.map((metric, i) => (
          <li
            key={i}
            className="font-bold "
          >
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <button className="mt-2 shadow-[2px_4px_0px_theme(colors.amber.800)] font-bold bg-[#e84544] rounded-xl py-1 px-4 w-full text-white font-[Passion_one] text-center text-xl">
        Vote
      </button>
    </div>
  );
};

export default VotingCard;
