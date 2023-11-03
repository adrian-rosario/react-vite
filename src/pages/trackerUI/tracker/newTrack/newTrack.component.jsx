import pageCopy from "./newTrack.pageCopy";
import Modal from "../../../../modal/modal";
import "./newTrack.component.css";

// eslint-disable-next-line react/prop-types
export default function NewTrack({ onDone }) {
  return (
    <>
      <Modal title={pageCopy.title} onClose={onDone}>
        <div className='newTrack'>
          <h2>{pageCopy.heading}</h2>
          <button type='button' onClick={onDone}>
            {pageCopy.cancel}
          </button>
        </div>
      </Modal>
    </>
  );
}
