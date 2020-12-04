export default function attachFly() {
  // fetch all lanterns => htmlCollection != array
  const lanterns = document.getElementsByClassName('lantern__main');
  // convert htmlCollection to Array
  const lanternArr = Array.from(lanterns);
  // iterate through and slap animation classname to it 🔥
  lanternArr.forEach((item) => item.classList.add('animate__fadeOutUp'));
}
