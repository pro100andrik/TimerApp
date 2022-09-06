
function Laps(props) {
  return(
    <ol> {props.laps.map((element, index) => <li key={index}> {element}</li> )} </ol>
  )
}

export default Laps
