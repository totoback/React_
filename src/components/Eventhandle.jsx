export default function EventHandle(){
  function alertFunc(){
    alert('클릭 ㅎㅇ');
  }
  return(
    <div>
      <button onClick = {alertFunc}>클릭</button>
      <button onClick = {() => {alert('클릭 ㅎ2')}}>클릭</button>
      <span onClick={() => {
        let num = 10;
        num += 5;
        console.log(num);}}>클릭</span>
    </div>
  )
}
