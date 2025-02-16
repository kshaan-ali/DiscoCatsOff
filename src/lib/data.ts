const cardData: {
  title: string;
  stats: { label: string; value: string }[];
  total: string;
  metrics: string[];
  hasVote: boolean;
  primeChoice: boolean;
}[] = [
  {
    title: "Breadrome",
    stats: [
      { label: "Lending", value: "12%" },
      { label: "Emissions", value: "4%" },
      { label: "Bribes", value: "2%" },
    ],
    total: "10%",
    metrics: ["$20,000", "3x", "15"],
    hasVote: true,
    primeChoice: true,
  },
  {
    title: "Super Money",
    stats: [
      { label: "Lending", value: "14%" },
      { label: "Emissions", value: "2%" },
      { label: "Bribes", value: "3%" },
    ],
    total: "14%",
    metrics: ["$12,000", "1.5x", "25"],
    hasVote: true,
    primeChoice: true,
  },
  {
    title: "BeraBorrow",
    stats: [
      { label: "Lending", value: "14%" },
      { label: "Emissions", value: "5%" },
      { label: "Bribes", value: "2%" },
    ],
    total: "11%",
    metrics: ["$30,000", "1.5x", "N.A."],
    hasVote: true,
    primeChoice: false,
  },
];
export default cardData;
