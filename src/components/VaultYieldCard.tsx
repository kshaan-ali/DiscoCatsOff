import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lending', value: 20, color: '#ffb400' },
  { name: 'remaning', value: 20, color: '#3E4247' },
  { name: 'Vault Fees', value: 20, color: '#ffb400' },
  { name: 'Bribes', value: 30, color: '#FFFFFF' },
];

export default function VaultYieldCard() {

  return (
    <>
      <div className="h-36 relative w-36">
        <div className='absolute w-full h-full flex justify-center items-center font-Teko font-semibold text-2xl'> 20%</div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="80%"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='py-4 pr-4'>
        <h2 className="font-Teko font-semibold">
          Vault Yield
        </h2>
        <p className='text-xs'>(last hour)</p>
        <p className=" flex gap-2 items-center"> <span className='w-3 h-3 bg-amber inline-block'></span>Lending</p>
        <p className=" flex gap-2 items-center"> <span className='w-3 h-3 bg-white inline-block'></span>Bribes</p>
        <p className=" flex gap-2 items-center"> <span className='w-3 h-3 bg-amber inline-block'></span>Vault Fees</p>

      </div>
    </>
  );
}
