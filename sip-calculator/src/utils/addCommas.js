const addCommas = (number) => {
    const currencyFormatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
  
      return currencyFormatter.format(number);
  };
  export default addCommas;