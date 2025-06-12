import Mock from "./mock";

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

export default function MockStories() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Mock status={status} />
        </section>
      ))}
    </>
  );
}