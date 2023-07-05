const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Test = async () => {
  await delay(3000);

  return <div>Test</div>;
};

export default Test;
