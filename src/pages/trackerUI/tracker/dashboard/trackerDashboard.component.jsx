import TrackerTabs from "../tabs/trackerTabs.component";

export default function TrackerDashboard() {
  return (
    <>
      <div style={{ border: 1, borderStyle: "solid", borderColor: "white" }}>
        <TrackerTabs />
        <p>tracker dashboard</p>
      </div>
    </>
  );
}
