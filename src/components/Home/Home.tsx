import AvgBlockTime from './AvgBlockTime';
import ConfirmedTxs from './ConfirmedTxs';
import CustomAdress from './CustomAdress';
import GasSpentByWallet from './GasSpentByWallet';
import GasUsedToday from './GasUsedToday';
import InsightCard from './InsightCard';
import NetworkLoadIndex from './NetworkLoadIndex';
import PendingTxs from './PendingTxs';
import TotalSupply from './TotalSupply';

function Home() {
  return (
    <div className="container mx-auto w-full pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Левая колонка */}
        <div className="grid grid-rows-[288px_auto] gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <AvgBlockTime />
              <ConfirmedTxs />
            </div>
            <PendingTxs />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GasUsedToday />
            <InsightCard />
          </div>
        </div>

        {/* Правая колонка */}
        <div className="grid grid-rows-[288px_288px_auto] gap-4">
          <TotalSupply />
          <div className="grid grid-cols-2 gap-4">
            <GasSpentByWallet />
            <NetworkLoadIndex />
          </div>

          <CustomAdress />
        </div>
      </div>
    </div>
  );
}

export default Home;
