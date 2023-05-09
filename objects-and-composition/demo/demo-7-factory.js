function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
      return rect.width * rect.height;
    };
    return rect;
  }
  
  const rectangular = createRect(5, 8)
  console.log(rectangular);
  console.log(rectangular.getArea());