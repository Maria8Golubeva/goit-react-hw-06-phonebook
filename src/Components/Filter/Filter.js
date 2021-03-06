import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from '../../redux/filter/filter-actions';
import { getFilter } from "../../redux/filter/filter-selector";

import shortid from "shortid";
import styles from "./styles.module.css";

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const inputId = shortid.generate();
  return (
    <label className={styles.filterLabel} htmlFor={inputId}>
      Search
      <input
        id={inputId}
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

export default Filter;