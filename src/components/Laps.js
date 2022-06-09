
function Laps(props) {
  return(
    <ol> {props.laps.map(element => <li key={element}> {element}</li> )} </ol>
  )
}

export default Laps
