import ky from 'ky';

export default function Home() {
  const onSubmit = async () => {
    const res = await ky.post('/api/colorways', { json: { name: 'foobar', colors: ['#fcfcfc'] } }).json();
    console.log(res);
  };
  return (
    <div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
