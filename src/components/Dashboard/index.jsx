import DashBoardStyle from "./dashboard.module.css";
import { DoughnutChart } from "./doughnut";
import { AreaChart } from "./area-chart";
function DashBoardPage() {
  return (
    <>
      <div className={DashBoardStyle.container}>
        <div className={DashBoardStyle.firstGroup}>
          <div className={DashBoardStyle.orders}>
            <h2>Orders</h2>
            <div className={DashBoardStyle.chart}>
              <DoughnutChart />
            </div>
          </div>
          <div className={DashBoardStyle.totalSalary}>
            <AreaChart />
          </div>
        </div>
        <div className={DashBoardStyle.lastGroup}>
          <div className={DashBoardStyle.assignedRisks}>
            <h2>Assigned Risks</h2>
            <p>There are no risk assigned</p>
          </div>
          <div className={DashBoardStyle.actionItems}>
            <h2>Assigned Action Items</h2>
            <p>There are no action items assigned</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardPage;
