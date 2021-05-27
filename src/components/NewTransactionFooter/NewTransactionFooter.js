import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { toMoney } from "../../utils/money";
import Button from "../../components/elements/Button";
import styles from "./NewTransactionFooter.module.scss";
import Loader from "./../elements/Loader";

function NewTransactionFooter({
  formData,
  personData,
  closeModal,
  submitForm,
}) {
  const [total, setTotal] = useState(0);
  const [parts, setParts] = useState(0);
  const [difference, setDifference] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTotal(formData.total);
  }, [formData]);

  useEffect(() => {
    if (!personData) {
      return;
    }

    setParts(
      Object.values(personData).reduce((acc, { amount }) => acc + amount, 0)
    );
    setTimeout(() => setLoading(false), 100);
  }, [personData]);

  useEffect(() => {
    setDifference(total - parts);
  }, [total, parts]);

  function renderValue(value) {
    if (loading) {
      return <Loader />;
    }
    return toMoney(Math.abs(value));
  }
  function getColorclassName(value) {
    return value >= 0 ? "positive" : "negative";
  }
  return (
    <div className={styles.footer}>
      <div>
        <h3>Total: </h3>
        <h3 className={getColorclassName(total)}>{renderValue(total)}</h3>
      </div>
      <div>
        <h3>Partes: </h3>
        <h3 className={getColorclassName(parts)}>{renderValue(parts)}</h3>
      </div>
      <div>
        <h3>Diferença: </h3>
        <h3 className={getColorclassName(difference)}>
          {renderValue(difference)}
        </h3>
      </div>
      <div className={styles.actionButtons}>
        <Button
          variant="Outlined"
          title="Cancelar"
          onClick={(event) => {
            event.preventDefault();
            closeModal();
          }}
        />
        <Button variant="Primary" title="Gravar" onClick={submitForm} />
      </div>
    </div>
  );
}

export default NewTransactionFooter;
