const useColorGenerator = () => {


  function getRandomColor() {
    let color = Math.floor(Math.random() * (360 - 0) + 360);
    return color;
  }

  function getRandomPlayBox(min, currentLevel) {
    let max = Math.floor(currentLevel * currentLevel)
    return Math.floor(Math.random() * (max - min) + min);
  } 

  return {getRandomColor, getRandomPlayBox};
};

export default useColorGenerator;
