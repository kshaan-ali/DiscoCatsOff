import VotingPanel from "./components/VotingPanel";
import Wave from "./svg/Wave";

function App() {
  return (
    <>
      <VotingPanel />
      <div className="fixed bottom-0 left-0 w-full overflow-hidden">
        <Wave />
      </div>
    </>
  );
}

export default App;
