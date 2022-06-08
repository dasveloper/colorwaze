export default function Home() {
  const onSubmit = async () => {
    const res = await fetch('/api/colorways', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
