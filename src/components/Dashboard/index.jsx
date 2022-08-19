import DashBoardStyle from "./dashboard.module.css";
import { DoughnutChart } from "./doughnut";
import { AreaChart } from "./area-chart";
import { useTranslation } from "react-i18next";
function DashBoardPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className={DashBoardStyle.container}>
        <div className={DashBoardStyle.firstGroup}>
          <div className={DashBoardStyle.orders}>
            <h2>{t("dashboard_page.orders_title")}</h2>
            <div className={DashBoardStyle.chart}>
              <DoughnutChart />
            </div>
          </div>
          <div className={DashBoardStyle.totalSalary}>
            {/* <h2>Total Salary</h2>
            <p>Years</p> */}
            <AreaChart />
          </div>
        </div>
        <div className={DashBoardStyle.lastGroup}>
          <div className={DashBoardStyle.assignedRisks}>
            <h2>{t("dashboard_page.assigned_risks_title")}</h2>
            <p>{t("dashboard_page.assigned_risks_text")}</p>
          </div>
          <div className={DashBoardStyle.actionItems}>
            <h2>{t("dashboard_page.assigned_action_title")}</h2>
            <p>{t("dashboard_page.assigned_action_text")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardPage;
