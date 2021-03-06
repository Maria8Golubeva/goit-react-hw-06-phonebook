import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { addContact } from '../../redux/contacts/contacts-actions';
import { getContacts } from "../../redux/contacts/contacts-selector";
import shortid from "shortid";
import styles from "./styles.module.css";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const inputHandler = (evt) => {
    switch (evt.target.name) {

      case "name":
        setName(evt.target.value);
        break;

      case "number":
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const submitHanlder = (evt) => {
    evt.preventDefault();
    const namesToLowerCase = contacts.map((item) => item.name.toLowerCase());

    if (namesToLowerCase.find((item) => item === name.toLowerCase())) {
      alert("please change name");
      setName('');
      return 
    };

    const contact = {
    id: shortid.generate(),
    name: name,
    number: number,
    };

    dispatch(addContact(contact));
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  const IdName = shortid.generate();
  const IdNumber = shortid.generate();

  return (
    <form onSubmit={submitHanlder}>
      <label className={styles.formLabel} htmlFor={IdName}>
        Name
        <input
          id={IdName}
          className={styles.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={inputHandler}
          value={name}
          required
        />
      </label>

      <label className={styles.formLabel} htmlFor={IdNumber}>
        Number
        <input
          id={IdNumber}
          className={styles.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={inputHandler}
          value={number}
          required
        />
      </label>
      <button className={styles.submitBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Form;