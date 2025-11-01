import style from './Checkbox.module.scss';

interface Props {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

function Checkbox({ label, checked = false, onChange }: Props) {
  return (
    <label className={style.checkboxWrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={style.checkboxInput}
      />
      <span className={style.customCheckbox}></span>
      <span className={style.labelText}>{label}</span>
    </label>
  );
}

export default Checkbox;
