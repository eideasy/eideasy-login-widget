const getFieldErrors = function getFieldErrors(result) {
  console.log(result);
  let errors = {};
  if (result.error &&
    result.error.response &&
    result.error.response.data &&
    result.error.response.data.errors
  ) {
    errors = result.error.response.data.errors;
  }
  return errors;
};

export default getFieldErrors;
