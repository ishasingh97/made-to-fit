export const getUniqueId = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  );

  export const isFormValid = (form= {}, setValidated = ()=>{}) => {
    const {  gender = '', name='', phone='' } = form
    let valid = true;
    if(name.trim() === '' ||
     (phone.length !== 10 && isNaN(phone) )|| 
     !['male', 'female'].includes(gender) ){
      valid = false
    }
    setValidated(valid)
     return valid
  };

  export const isEmptyObject = (obj) =>{
    return !Object.keys(obj).length;
  }