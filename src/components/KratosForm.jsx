import { FORM_LABELS } from "../constants/kratos";
import KratosMessages from "./KratosMessages";

const KratosForm = ({
  action,
  messages = [],
  fields,
  submitLabel = "Submit",
}) => {
  const fieldsSorted = sortFormFields({ fields });
  return (
    <>
      {!!messages?.length && <KratosMessages messages={messages} />}
      {action && (
        <form action={action} style={{ margin: "60px 0" }} method="POST">
          {renderFormFields({ fields: fieldsSorted })}
          <button type="submit">{submitLabel}</button>
        </form>
      )}
    </>
  );
};

const sortFormFields = ({ fields }) => {
  return fields.sort((current, next) => {
    const c = FORM_LABELS[current.name]?.priority || 0;
    const n = FORM_LABELS[next.name]?.priority || 0;
    return n - c;
  });
};

const renderFormFields = ({ fields = [] }) =>
  fields.map((field) => {
    const { name, type, required, value, messages = [] } = field;
    const _required = required ? { required } : {};
    const _label = FORM_LABELS[name]?.label;
    const style = type === "hidden" ? { display: "none" } : {};
    return (
      <fieldset key={name} style={style}>
        <label>
          <input type={type} name={name} defaultValue={value} {..._required} />
          {_label && <span>{_label}</span>}
        </label>
        <KratosMessages messages={messages} />
      </fieldset>
    );
  });

export default KratosForm;
