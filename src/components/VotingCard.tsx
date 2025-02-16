import { TbBolt } from 'react-icons/tb';
import { TbPlayCardK } from 'react-icons/tb';
import { TbCoinRupeeFilled } from 'react-icons/tb';

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
    <div className="flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white">
      <h2 className="f-border mb-2 w-full bg-[#ffd3b6] text-center text-sm text-[#ae6231]">
        {title}
      </h2>
      <div className="flex w-full flex-col items-center justify-center p-4">
        <img
          src="/cat.webp"
          alt=""
          className="aspect-square w-20 rounded-xl mix-blend-luminosity"
        />
        <ul className="mt-2 flex w-full flex-col items-center gap-2 rounded-lg bg-[#fae4d6] p-4 font-[Bubblegum_Sans] text-sm text-[#ae6231]">
          {metrics.map((metric, i) => (
            <li key={i} className="flex gap-2 font-bold">
              <span>
                {i === 0 ? (
                  <TbCoinRupeeFilled />
                ) : i === 1 ? (
                  <TbPlayCardK />
                ) : (
                  <TbBolt />
                )}
              </span>

              <span>{metric}</span>
            </li>
          ))}
        </ul>
        <button className="mt-2 w-full rounded-xl bg-[#e84544] px-4 py-1 text-center font-[Passion_one] text-xl font-bold text-white shadow-[2px_4px_0px_theme(colors.amber.800)]">
          Vote
        </button>
      </div>
    </div>
  );
};

export default VotingCard;
