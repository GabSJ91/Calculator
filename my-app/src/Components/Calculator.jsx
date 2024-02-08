import { useState } from "react"
import './Calculator.scss'

const Calculator = () => {


  //declaração de valores
  const [currentValue, setCurrentValue] =useState('0')
  const [pandingOperation, setPandingOperation] = useState(null)
  const [pandingValue, setPandingValue] = useState(null)
  const [completeOperation, setCompleteOperation] = useState("")

  const keyPadNumber = ['0','1','2','3','4','5','6','7','8','9']
  const operations = [ '+', '-','/','*']

  //função de concatenação para juntas os números
  const handleClick = (val) => {
    setCurrentValue((prevValue) => {
      
      if(prevValue === '0') {
        return val;
      } 

      else

      {
        return prevValue +  val
      }

    });

    setCompleteOperation((prevOperation) => prevOperation + val)
  }

//mostra o numero digitado e opção de soma mas não faz o resultado
  const handleOperation = (operation) => 
  {
    setCompleteOperation(currentValue + " " + operation)
    setPandingOperation(operation)
    setPandingValue(currentValue)
    setCurrentValue("0")
  }

   // função para resetar a tela quando clicar no botão AC
   const handleClear = () =>
    {
    setCurrentValue("0");
    setPandingOperation(null);
    setPandingValue(null);
    setCompleteOperation("");
  };



// Aqui é feita o calculo
const handleCalculate = () => {

  if(!pandingOperation || !pandingValue) {
    return;
  }

  const num1 = parseFloat(pandingValue)
  const num2 = parseFloat(currentValue)

  let result ;

  switch (pandingOperation) {
    case "+":
      result = num1 + num2;
      break;
      case "-":
        result = num1 - num2;
        break;
        case "/":
          result = num1 / num2;     
          break;  
          case "*":
            result = num1 * num2;
            break;
        
    
  
    default:
      break;
  }

  setCompleteOperation(pandingValue + "" + pandingOperation + "" + currentValue + " = " + result); 


  setCurrentValue(result.toString());
  setPandingOperation(null);
  setPandingValue(null);
 }










  return (
    <div className="calculator">
    <div className="complete__operation">{completeOperation}</div>
        <div className="display">{currentValue}</div>
        <div className="buttons">

          <button onClick={handleClear}>AC</button>

          {keyPadNumber.map((num) =>(
            <button key={num} onClick={() => handleClick(num)}>{num}</button>
          ))}

          {operations.map((operation) =>(
            <button key={operation} onClick={() => handleOperation(operation)}>{operation}</button>
          ))}


          <button onClick={handleCalculate}>=</button>

        </div>
        
    </div>
  )
}

export default Calculator