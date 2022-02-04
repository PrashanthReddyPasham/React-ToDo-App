import React from "react";
import "./modal.css";
import TextField from "@material-ui/core/TextField";

function Modal({
  setOpenModal,
  handleGoal,
  modalDataEdit,
  goalList,
  setGoal,
  modalDelete,
  setModalDelete,
  setGoalList,
  modalDataDelete,
}) {
  const updatNewValue = () => {
    const newArray = goalList.filter(function (item) {
      if (item.id === modalDataEdit.id) {
        item.name = modalDataEdit.name;
      }
      return item;
    });
    localStorage.setItem("data", JSON.stringify(newArray));
    setOpenModal(false);
    setGoal("");
  };
  const deleteGoal = () => {
    const arr = goalList.filter(function (item) {
      return item !== modalDataDelete;
    });
    setGoalList(arr);
    localStorage.setItem("data", JSON.stringify(arr));
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              setModalDelete(false);
            }}
          >
            X
          </button>
        </div>

        {modalDelete === true ? (
          <h3>Are you sure you want to delete ?</h3>
        ) : (
          <div className="text">
            {" "}
            <TextField
              fullWidth
              id="standard-basic"
              label="Goal"
              value={modalDataEdit.name}
              onChange={(e) => handleGoal(e)}
            />
          </div>
        )}
        <div className="modal-footer">
          {modalDelete === true ? (
            <button
              style={{ backgroundColor: "cornflowerblue" }}
              onClick={() => {
                setOpenModal(false);
                setModalDelete(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => {
                setOpenModal(false);
                setModalDelete(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          )}

          {modalDelete === true ? (
            <button onClick={deleteGoal} style={{ backgroundColor: "crimson" }}>
              Delete
            </button>
          ) : (
            <button onClick={updatNewValue}>Save</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
