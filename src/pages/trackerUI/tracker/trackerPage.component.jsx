import ChallengeTrackerHeader from "./header/trackerHeader.component";
import ChallengesContextProvider from "./state/tracker.context";
import TrackerDashboard from "./dashboard/trackerDashboard.component";

export default function TrackerPage() {
  return (
    <>
      <ChallengesContextProvider>
        <ChallengeTrackerHeader />
        <TrackerDashboard /> {/* Challenges = tracker dashboard */}
      </ChallengesContextProvider>
    </>
  );
}
