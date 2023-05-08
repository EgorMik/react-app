import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

const Form = ({ value, updateText, handleAction, radio, handleRadio,onChangeDisplay }) => {
    return (
        <div className="inner">
          <form onSubmit={e => {e.preventDefault();}}>
              <Input
               radio={radio}
               value={value}
               updateText={updateText}
               handleRadio={handleRadio}
             />
              <Button 
              handleAction={handleAction}
              />
          </form>
        </div>
    );
  };
  export default Form;
