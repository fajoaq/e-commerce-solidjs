function getScrollDirection(oldYval) {
  // Get the new  Y scroll value
  const newVal = window.scrollY;

  //Subtract the two and conclude
  if (oldYval - newVal > 0) return 1;
  return -1; //direction
}

export { getScrollDirection };
