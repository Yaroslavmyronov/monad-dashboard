import AvgBlockTime from './AvgBlockTime';
import AvgTps from './AvgTps';
import CustomAdress from './CustomAdress';

import Erc20TransferEvents from './Erc20TransferEvents';
import GasSpentByWallet from './GasSpentByWallet';
import GasUsedToday from './GasUsedToday';
import InsightCard from './InsightCard';
import NetworkLoadIndex from './NetworkLoadIndex';
import TransactionCount from './TransactionCount';

function Home() {
  return (
    <div className="container mx-auto pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-rows-[auto_auto] md:grid-rows-[288px_auto] gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <AvgBlockTime />
              <AvgTps />
            </div>
            <Erc20TransferEvents />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GasUsedToday />
            <InsightCard />
          </div>
        </div>

        <div className="grid grid-rows-[auto_auto_auto] md:grid-rows-[288px_288px_auto] gap-4">
          <TransactionCount />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
