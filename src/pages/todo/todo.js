import TextField from "@material-ui/core/TextField";

import { useState, useEffect } from "react";
import "./todo.css";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Modal from "../../components/modal/modal";

function Todo() {
  const [textError, setTextError] = useState(false);
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState("");
  const [number, setNumber] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalDataEdit, setModalDataEdit] = useState({});
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDataDelete, setModalDataDelete] = useState({});

  const handleGoal = (e) => {
    // const str = e.target.value;
    // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    const str = e.target.value;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    setGoal(str2);
    setModalDataEdit({ ...modalDataEdit, name: str2 });
  };

  const handleAddGoal = (e) => {
    setTextError(false);
    if (goal === "") {
      setTextError(true);
    }

    if (goal) {
      if (localStorage.getItem("id")) {
        const tempGoal = { id: number, name: goal };
        const tempGoalList = goalList;
        tempGoalList.push(tempGoal);
        setGoalList(tempGoalList);
        setNumber(number + 1);
        localStorage.setItem("data", JSON.stringify(goalList));
        localStorage.setItem("id", number);
      } else {
        const tempGoal = { id: number, name: goal };
        const tempGoalList = goalList;
        tempGoalList.push(tempGoal);
        setGoalList(tempGoalList);
        setNumber(number + 1);
        localStorage.setItem("data", JSON.stringify(goalList));
        localStorage.setItem("id", 1);
      }
    }
    setGoal("");
  };

  const modal = (item) => {
    setModalDataEdit(item);
    setOpenModal(true);
  };
  const handleDeleteGoal = (e) => {
    setOpenModal(true);
    setModalDelete(true);
    setModalDataDelete(e);
  };

  useEffect(() => {
    const myGoals = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    const id = localStorage.getItem("id") ? localStorage.getItem("id") : 1;
    setGoalList(myGoals);
    if (id === 1) {
      setNumber(parseInt(id));
    } else {
      setNumber(parseInt(id) + 1);
    }
  }, [goal]);

  return (
    <div className="Todo">
      <div className="container-1">
        <div className="textfield">
          <p>
            <TextField
              id="outlined-basic"
              label="Goal"
              variant="outlined"
              autoFocus={true}
              onChange={(e) => handleGoal(e)}
              required
              error={textError}
            />
          </p>
        </div>

        <div className="addicon">
          <p>
            <AddIcon
              style={{ fontSize: "xx-large" }}
              variant="contained"
              color="primary"
              onClick={() => {
                handleAddGoal();
              }}
            />
          </p>
        </div>
      </div>

      {goalList.map((item) => {
        return (
          <div className="container-2">
            <div className="id">
              <p>{item.id}.</p>
            </div>
            <div className="goal">
              <p>{item.name}</p>
            </div>
            <div className="edit">
              <p>
                <EditIcon
                  color="primary"
                  title="Edit"
                  onClick={() => {
                    modal(item);
                  }}
                />
              </p>
            </div>

            <div className="delete">
              <DeleteForeverRoundedIcon
                color="secondary"
                title="Delete"
                onClick={(e) => handleDeleteGoal(item)}
              />
            </div>
          </div>
        );
      })}

      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          modalDataEdit={modalDataEdit}
          handleGoal={handleGoal}
          goalList={goalList}
          setGoal={setGoal}
          modalDelete={modalDelete}
          setModalDelete={setModalDelete}
          setGoalList={setGoalList}
          modalDataDelete={modalDataDelete}
        />
      )}
    </div>
  );
}

export default Todo;
