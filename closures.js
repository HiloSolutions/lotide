const useNumber = function() {
  let number = 5;

  const showNumber = function() {
    console.log(number);
    number ++;
  };
  
  number++;
  return showNumber;
};

const show = useNumber();
show();
show();
show();
show();
show();