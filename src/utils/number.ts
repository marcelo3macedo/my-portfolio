function indexToPosition(index: number): string {
  const position = (index + 1).toString().padStart(2, "0");
  return position;
}

export { indexToPosition };
