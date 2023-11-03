import TrackerIndiator from "../indicator/trackerIndicator.component";
import "./trackerTabs.component.css";

let thingIsActive = false;

// eslint-disable-next-line react/prop-types
function Tab({ isSelected, onSelect, children }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={(thingIsActive = !thingIsActive)}
      >
        {children}
        <TrackerIndiator indicatorText='20'></TrackerIndiator>
      </button>

      {isSelected && <div className='active-tab-indicator' />}
    </li>
  );
}

// eslint-disable-next-line react/prop-types
export default function TrackerTabs({ selectedType, onSelectType, children }) {
  return (
    <>
      <menu id='trackerTabs'>
        {/* <Tab isSelected={selectedType} onSelect={() => this.isSelected} /> */}
        <Tab
          isSelected={thingIsActive}
          onSelect={() => onSelectType("active")}
        />
      </menu>
      <div>{children}</div>
    </>
  );
}
