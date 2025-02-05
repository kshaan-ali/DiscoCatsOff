import VotingPanel from "./components/VotingPanel";
import Wave from "./svg/Wave";

function App() {
  return (
    <>
      <VotingPanel />
      <div className="fixed -z-10 bottom-0 left-0 w-full overflow-hidden">
        <Wave />
      </div>
    </>
  );
}

export default App;
